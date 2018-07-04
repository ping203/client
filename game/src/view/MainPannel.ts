class MainPannel extends egret.Sprite {
    public static CHANGEPANEL: string = "mainPannel";
    private bg: egret.Bitmap;// 背景
    private fightButton: eui.Button;
    private timeTitle: egret.TextField;//这里我们使用textfield当做开始按钮
    private userInfo: egret.Sprite;
    private generalInfo: egret.Sprite;
    public constructor() {
        super();
        this.init();
    }


    public start() {
        this.initUser()
        this.initGeneral()

        this.fightButton.touchEnabled = true;
        this.fightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqFight, this);
        this.fightButton.x = 1266
        this.fightButton.y = 700
        this.addChild(this.fightButton);
    }

    //初始化
    private init() {
        this.bg = new egret.Bitmap(RES.getRes('game_bg.pnt'));
        this.addChild(this.bg);

        this.fightButton = new eui.Button();
        this.fightButton.label = '战斗';
    }

    private initUser() {
        this.userInfo = new egret.Sprite()
        this.x = 0

        let bg = new egret.Bitmap(RES.getRes('user_png'));
        this.userInfo.addChild(bg);

        this.initUserData()
        this.addChild(this.userInfo)
    }

    private initUserData() {
        let nickName = new egret.TextField()
        let level = new egret.TextField()


        let user = this.getUser()
        // console.log(user.getName(), user, "ddddddddddddddd")
        nickName.text = user.getName()
        nickName.textColor = 0xff0000;
        nickName.size = 20
        nickName.y = 105
        nickName.x = 100
        level.text = "1"
        level.size = 20
        level.y = nickName.y + 75
        level.x = 100
        level.textColor = 0xff0000;

        this.userInfo.addChild(nickName)
        this.userInfo.addChild(level)
    }

    private initGeneral() {
        this.generalInfo = new egret.Sprite()
        this.generalInfo.x = this.userInfo.width

        let bg = new egret.Bitmap(RES.getRes('general_png'));
        this.generalInfo.addChild(bg);
        this.addChild(this.generalInfo)
    }

    private initGeneralData() {
        let nickName = new egret.TextField()
        let level = new egret.TextField()


        let user = this.getUser()
        nickName.text = user.getName()
        nickName.textColor = 0xff0000;
        nickName.size = 20
        nickName.y = 105
        nickName.x = 100
        level.text = "1"
        level.size = 20
        level.y = nickName.y + 75
        level.x = 100
        level.textColor = 0xff0000;

        this.userInfo.addChild(nickName)
        this.userInfo.addChild(level)
    }

    private reqFight(e: egret.TouchEvent) {
        let protoMgr = ProtoBuffManager.getInstance()
        const msg = protoMgr.root.lookupType("cmsg.CReqStageFight");

        let message = msg.create({ stageID: 0 });
        // console.log(`message = ${JSON.stringify(message)}`);

        console.log(message)
        let buffer = msg.encode(message).finish();

        protoMgr.sendMsg("cmsg.CReqStageFight", buffer)
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPSTAGEFIGHT, this.respStageFight, this)
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTART, this.notifyGameStart, this)

    }

    public respStageFight(e: ServiceEvent) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respStageFight, this)

        if (e.msg.errCode && e.msg.errCode != 0) {
            alert(e.msg.errMsg)
            return
        }

    }

    public notifyGameStart(e: ServiceEvent) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTART, this.notifyGameStart, this)
        console.log("游戏开始")
        var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
        event.eventType = FightPannel.FIGHT
        event.data = e.msg

        event.obj = this
        ViewManager.getInstance().dispatchEvent(event)
    }

    private getUser(): User {
        return User.getInstance()
    }

    //结束界面，释放监听
    public end() {

    }
}