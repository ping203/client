class MainPannel extends egret.Sprite {
    public static CHANGEPANEL: string = "mainPannel";
    private bg: egret.Bitmap;// 背景
    private fightButton: eui.Button;
    private timeTitle: egret.TextField;//这里我们使用textfield当做开始按钮
    public constructor() {
        super();
        this.init();
    }


    public start() {
        this.fightButton.touchEnabled = true;
        this.fightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqFight, this);
    }
    //初始化
    private init() {
        this.bg = new egret.Bitmap(RES.getRes('game_bg.pnt'));
        this.addChild(this.bg);

        this.fightButton = new eui.Button();
        this.fightButton.label = '战斗';
        this.addChild(this.fightButton);
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

        var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
        event.eventType = FightPannel.FIGHT
        event.data = e.msg
        let user = e.msg.user

        event.obj = this
        ViewManager.getInstance().dispatchEvent(event)
    }

    //结束界面，释放监听
    public end() {

    }
}