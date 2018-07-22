// TypeScript file
class LoginPannel extends egret.Sprite {
    private bg: egret.Bitmap;// 背景

    public static LOGIN: string = "login";
    private startBtn: eui.Button;
    private loginText: egret.TextField;//
    private input: egret.TextField;//
    public constructor() {
        super();
        this.init();
    }

    //开启监听
    public start() {

    }
    public offset() {

        // console.log(this.width, this.height)

        this.input.width = this.width * 0.3
        this.loginText.x = this.width * 0.5 - (this.input.width + this.loginText.width) / 2
        this.loginText.y = this.height * 0.8

        this.input.x = this.loginText.x + this.loginText.width
        this.input.y = this.loginText.y

        this.startBtn.width = this.width * 0.05
        this.startBtn.x = this.width * 0.5 - this.startBtn.width / 2
        // console.log(this.startBtn.x, this.width, this.startBtn.width, this.loginText.width)
        this.startBtn.y = this.loginText.y + this.height * 0.1

        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqAuth, this);
    }
    //初始化
    private init() {
        this.bg = new egret.Bitmap(RES.getRes('login_png'));
        this.addChild(this.bg);

        this.loginText = new egret.TextField();
        this.loginText.text = "账号:";
        this.loginText.textColor = 0x000000;
        this.addChild(this.loginText);

        this.input = new egret.TextField();
        this.input.text = '';
        this.input.type = egret.TextFieldType.INPUT;
        this.input.textColor = 0xFFFFFF;
        this.input.background = true
        this.input.backgroundColor = 0x000000
        this.addChild(this.input);

        this.startBtn = new eui.Button();
        this.startBtn.label = '登录';
        this.addChild(this.startBtn);

        this.offset()

    }

    private reqAuth(e: egret.TouchEvent) {
        let protoMgr = ProtoBuffManager.getInstance()
        const auth = protoMgr.root.lookupType("cmsg.CReqAuth");

        let message = auth.create({ account: this.input.text });
        // console.log(`message = ${JSON.stringify(message)}`);

        console.log(message)
        let buffer = auth.encode(message).finish();

        protoMgr.sendMsg("cmsg.CReqAuth", buffer)
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this)

    }

    public respAuth(e: ServiceEvent) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this)

        if (e.msg.errCode && e.msg.errCode != 0) {
            console.log("登录错误")
            return
        }

        let protoMgr = ProtoBuffManager.getInstance()
        const auth = protoMgr.root.lookupType("cmsg.CReqLogin");

        let message = auth.create({ userID: e.msg.userID, sign: e.msg.sign });
        // console.log(`message = ${JSON.stringify(message)}`);

        console.log(message)
        let buffer = auth.encode(message).finish();

        protoMgr.sendMsg("cmsg.CReqLogin", buffer)
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPLOGIN, this.respLogin, this)

    }

    public respLogin(e: ServiceEvent) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPLOGIN, this.respLogin, this)

        if (e.msg.ErrCode && e.msg.ErrCode != 0) {
            console.log("登录错误")
            return
        }

        let user = e.msg.user
        User.getInstance().updateUser(user.nickname, user.userID, user.fightGeneralID)
        User.getInstance().updateGeneral(e.msg.generals)

        var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
        event.eventType = LoginPannel.LOGIN
        if (!e.msg.user.nickname) {
            event.eventType = UserInitPannel.Init
        }

        event.obj = this
        ViewManager.getInstance().dispatchEvent(event)
    }



    //结束界面，释放监听
    public end() {
        this.startBtn.touchEnabled = false;
        if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reqAuth, this);
    }
}