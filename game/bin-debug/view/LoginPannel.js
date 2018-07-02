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
        this.bg = new egret.Bitmap(RES.getRes('bg_jpg'));
        this.addChild(this.bg);
        this.loginText = new egret.TextField();
        this.loginText.text = "账号:";
        this.loginText.textColor = 0x000000;
        this.addChild(this.loginText);
        this.loginText.x = this.width * 0.2;
        this.loginText.y = this.height * 0.8;
        this.input = new egret.TextField();
        this.input.text = '';
        this.input.text;
        this.input.type = egret.TextFieldType.INPUT;
        this.input.textColor = 0x000000;
        this.input.background = true;
        this.input.backgroundColor = 0xFFFFFF;
        this.input.width = this.width * 0.5;
        this.addChild(this.input);
        this.input.x = this.width * 0.2 + this.loginText.width;
        this.input.y = this.loginText.y;
        this.startBtn = new eui.Button();
        this.startBtn.label = '登录';
        this.startBtn.x = this.width * 0.5 - this.startBtn.width / 2;
        this.startBtn.y = this.loginText.y + this.width * 0.1;
        this.addChild(this.startBtn);
    };
    LoginPannel.prototype.onTouchTab = function (e) {
        var protoMgr = ProtoBuffManager.getInstance();
        var auth = protoMgr.root.lookupType("cmsg.CReqAuth");
        var message = auth.create({ account: this.input.text });
        // console.log(`message = ${JSON.stringify(message)}`);
        console.log(message);
        var buffer = auth.encode(message).finish();
        protoMgr.sendMsg("cmsg.CReqAuth", buffer);
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this);
    };
    LoginPannel.prototype.respAuth = function (e) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this);
        if (e.msg.errCode && e.msg.errCode != 0) {
            console.log("登录错误");
            return;
        }
        var protoMgr = ProtoBuffManager.getInstance();
        var auth = protoMgr.root.lookupType("cmsg.CReqLogin");
        var message = auth.create({ userID: e.msg.userID, sign: e.msg.sign });
        // console.log(`message = ${JSON.stringify(message)}`);
        console.log(message);
        var buffer = auth.encode(message).finish();
        protoMgr.sendMsg("cmsg.CReqLogin", buffer);
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPLOGIN, this.respLogin, this);
    };
    LoginPannel.prototype.respLogin = function (e) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPLOGIN, this.respLogin, this);
        if (e.msg.ErrCode && e.msg.ErrCode != 0) {
            console.log("登录错误");
            return;
        }
        var event = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        event.eventType = LoginPannel.LOGIN;
        if (!e.msg.user.nickname) {
            event.eventType = UserInitPannel.Init;
        }
        var user = e.msg.user;
        User.getInstance().updateUser(user.nickname, user.userID, user.fightGeneralID);
        event.obj = this;
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