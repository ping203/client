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
var UserInitPannel = (function (_super) {
    __extends(UserInitPannel, _super);
    function UserInitPannel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    //开启监听
    UserInitPannel.prototype.start = function () {
        this.startBtn.touchEnabled = true;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUserInit, this);
    };
    //初始化
    UserInitPannel.prototype.init = function () {
        this.bg = new egret.Bitmap(RES.getRes('userInit_png'));
        this.addChild(this.bg);
        this.nameText = new egret.TextField();
        this.nameText.text = "名字:";
        this.nameText.textColor = 0x000000;
        this.addChild(this.nameText);
        this.nickName = this.getTextInput();
        this.addChild(this.nickName);
        this.nameText.x = this.width * 0.5 - (this.nameText.width + this.nickName.width) / 2;
        this.nameText.y = this.height * 0.4;
        this.nickName.x = this.nameText.x + this.nameText.width;
        this.nickName.y = this.nameText.y;
        this.generalText = new egret.TextField();
        this.generalText.text = "武将ID：";
        this.generalText.textColor = 0x000000;
        this.addChild(this.generalText);
        this.general = this.getTextInput();
        this.addChild(this.general);
        this.generalText.x = this.width * 0.5 - (this.generalText.width + this.general.width) / 2;
        this.generalText.y = this.height * 0.6;
        this.general.x = this.generalText.x + this.generalText.width;
        this.general.y = this.generalText.y;
        this.startBtn = new eui.Button();
        this.startBtn.width = this.width * 0.05;
        this.startBtn.label = '创建角色';
        this.startBtn.x = this.width * 0.5 - this.startBtn.width / 2;
        this.startBtn.y = this.general.y + this.width * 0.1;
        this.addChild(this.startBtn);
    };
    UserInitPannel.prototype.getTextInput = function () {
        var text = new egret.TextField();
        text.text = '';
        text.type = egret.TextFieldType.INPUT;
        text.textColor = 0xFFFFFF;
        text.background = true;
        text.backgroundColor = 0x000000;
        text.width = this.width * 0.3;
        return text;
    };
    UserInitPannel.prototype.reqUserInit = function (e) {
        var protoMgr = ProtoBuffManager.getInstance();
        var auth = protoMgr.root.lookupType("cmsg.CReqUserInit");
        var message = auth.create({ nickName: this.nickName.text, firstGeneral: this.general.text });
        // console.log(`message = ${JSON.stringify(message)}`);
        console.log(message);
        var buffer = auth.encode(message).finish();
        protoMgr.sendMsg("cmsg.CReqUserInit", buffer);
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPUSERINIT, this.respUserInit, this);
    };
    UserInitPannel.prototype.respUserInit = function (e) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPUSERINIT, this.respUserInit, this);
        if (e.msg.errCode && e.msg.errCode != 0) {
            alert(e.msg.errMsg);
            return;
        }
        // 跳转到主界面
        var event = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        event.eventType = LoginPannel.LOGIN;
        event.obj = this;
        ViewManager.getInstance().dispatchEvent(event);
    };
    //结束界面，释放监听
    UserInitPannel.prototype.end = function () {
        this.startBtn.touchEnabled = false;
        if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUserInit, this);
    };
    UserInitPannel.Init = "userInit";
    return UserInitPannel;
}(egret.Sprite));
__reflect(UserInitPannel.prototype, "UserInitPannel");
//# sourceMappingURL=UserInitPannel.ts.js.map