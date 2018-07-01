// TypeScript file
class LoginPannel extends egret.Sprite {

    public static LOGIN: string = "login";
    private bg: egret.Bitmap;// 背景
    private startBtn: egret.TextField;//这里我们使用textfield当做按钮
    public constructor() {
        super();
        this.init();
    }

    //开启监听
    public start() {
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    }
    //初始化
    private init() {
        // this.bg = new egret.Bitmap(RES.getRes('gameStartBgImage'));
        // this.addChild(this.bg);

        this.startBtn = new egret.TextField();
        this.startBtn.text = '登录';
        this.addChild(this.startBtn);
        this.startBtn.x = (480 - this.startBtn.width) * 0.5;
        this.startBtn.y = 400;
    }

    private onTouchTab(e: egret.TouchEvent) {
        var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
        event.eventType = LoginPannel.LOGIN
        event.obj = this

        let protoMgr = ProtoBuffManager.getInstance()
        const Login = protoMgr.root.lookupType("cmsg.CReqAuth");


        let message = Login.create({ Account: "qiu" });
        console.log(message)
        let buffer = new protobuf.Writer
        let d = Login.encode(message,buffer).finish();

        let data = Login.encode(message).finish()
        protoMgr.sendMsg("cmsg.CReqAuth", data)

        ViewManager.getInstance().dispatchEvent(event)
    }

    //结束界面，释放监听
    public end() {
        this.startBtn.touchEnabled = false;
        if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    }
}