class MainPannel extends egret.Sprite {
    public static CHANGEPANEL: string = "mainPannel";
    private bg: egret.Bitmap;// 背景
    private fightButton: eui.Button;
    private timeTitle: egret.TextField;//这里我们使用textfield当做开始按钮
    private userInfo: UserInfo;
    private generalInfo: GeneralInfo;
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
        this.userInfo = new UserInfo()

        this.updateUser()
        this.addChild(this.userInfo)
    }

    private updateUser() {
        let user = this.getUser()

        this.userInfo.update(user.nickName, 1)
    }

    private initGeneral() {
        this.generalInfo = new GeneralInfo()
        this.generalInfo.x = this.userInfo.width
        this.updateGeneralData()
        this.addChild(this.generalInfo)
    }

    private updateGeneralData() {
        let user = this.getUser()
        let general = user.getFightGeneral()
        console.log(general)
        if (general){
            this.generalInfo.update(general.getInfo())
        }
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

    private reqLearnSkill(e: egret.TouchEvent) {
        let protoMgr = ProtoBuffManager.getInstance()
        const msg = protoMgr.root.lookupType("cmsg.CReqLearnSkill");

        let message = msg.create({ skillID: 1 });
        // console.log(`message = ${JSON.stringify(message)}`);

        console.log(message)
        let buffer = msg.encode(message).finish();

        protoMgr.sendMsg("cmsg.CReqLearnSkill", buffer)
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPLEARNSKILL, this.respLearnSkill, this)

    }
    
    private respLearnSkill(e: ServiceEvent) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPLEARNSKILL, this.respLearnSkill, this)
        if (e.msg.errCode && e.msg.errCode != 0) {
            alert(e.msg.errMsg)
        }else {
            alert("学习成功")
        }

    }


    private getUser(): User {
        return User.getInstance()
    }

    //结束界面，释放监听
    public end() {

    }
}