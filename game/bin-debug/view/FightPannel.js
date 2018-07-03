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
var FightPannel = (function (_super) {
    __extends(FightPannel, _super);
    function FightPannel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    FightPannel.prototype.start = function () {
    };
    //初始化
    FightPannel.prototype.init = function () {
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
        this.input.background = true;
        this.input.backgroundColor = 0x000000;
        this.addChild(this.input);
        this.startBtn = new eui.Button();
        this.startBtn.label = '登录';
        this.addChild(this.startBtn);
    };
    FightPannel.prototype.onTouchTab = function (e) {
        // let protoMgr = ProtoBuffManager.getInstance()
        // const auth = protoMgr.root.lookupType("cmsg.CReqAuth");
        // let message = auth.create({ account: this.input.text });
        // // console.log(`message = ${JSON.stringify(message)}`);
        // console.log(message)
        // let buffer = auth.encode(message).finish();
        // protoMgr.sendMsg("cmsg.CReqAuth", buffer)
        // ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this)
    };
    FightPannel.prototype.respAuth = function (e) {
        // ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this)
        // if (e.msg.errCode && e.msg.errCode != 0) {
        //     console.log("登录错误")
        //     return
        // }
    };
    //结束界面，释放监听
    FightPannel.prototype.end = function () {
        this.startBtn.touchEnabled = false;
        if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
            this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
    };
    FightPannel.FIGHT = "fight";
    return FightPannel;
}(egret.Sprite));
__reflect(FightPannel.prototype, "FightPannel");
//# sourceMappingURL=FightPannel.js.map