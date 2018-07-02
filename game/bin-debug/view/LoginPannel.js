var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var LoginPannel = (function (_super) {
    __extends(LoginPannel, _super);
    function LoginPannel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    //开启监听
    LoginPannel.prototype.start = function () {
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    };
    //初始化
    LoginPannel.prototype.init = function () {
        // this.bg = new egret.Bitmap(RES.getRes('gameStartBgImage'));
        // this.addChild(this.bg);
        this.startBtn = new egret.TextField();
        this.startBtn.text = '登录';
        this.addChild(this.startBtn);
        this.startBtn.x = (480 - this.startBtn.width) * 0.5;
        this.startBtn.y = 400;
    };
    LoginPannel.prototype.onTouchTab = function (e) {
        var event = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        event.eventType = LoginPannel.LOGIN;
        event.obj = this;
        var protoMgr = ProtoBuffManager.getInstance();
        var Login = protoMgr.root.lookupType("cmsg.CReqLogin");
        var message = Login.create({ userID: 232222 });
        // console.log(`message = ${JSON.stringify(message)}`);
        var buffer = Login.encode(message).finish();
        // console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
        // let decoded = Login.decode(buffer);
        // console.log(`decoded = ${JSON.stringify(decoded)}`);
        // let message = Login.create({ Account: "qiu" });
        // console.log(message)
        // let buffer = new protobuf.Writer
        // let d = Login.encode(message,buffer).finish();
        // let data = Login.encode(message).finish()
        protoMgr.sendMsg("cmsg.CReqLogin", buffer);
        ViewManager.getInstance().dispatchEvent(event);
    };
    //结束界面，释放监听
    LoginPannel.prototype.end = function () {
        this.startBtn.touchEnabled = false;
        if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    };
    LoginPannel.LOGIN = "login";
    return LoginPannel;
}(egret.Sprite));
__reflect(LoginPannel.prototype, "LoginPannel");
//# sourceMappingURL=LoginPannel.js.map