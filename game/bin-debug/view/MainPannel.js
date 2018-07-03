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
var MainPannel = (function (_super) {
    __extends(MainPannel, _super);
    function MainPannel() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    MainPannel.prototype.start = function () {
        this.fightButton.touchEnabled = true;
        this.fightButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqFight, this);
    };
    //初始化
    MainPannel.prototype.init = function () {
        this.bg = new egret.Bitmap(RES.getRes('game_bg.pnt'));
        this.addChild(this.bg);
        this.fightButton = new eui.Button();
        this.fightButton.label = '战斗';
        this.addChild(this.fightButton);
    };
    MainPannel.prototype.reqFight = function (e) {
        var protoMgr = ProtoBuffManager.getInstance();
        var msg = protoMgr.root.lookupType("cmsg.CReqStageFight");
        var message = msg.create({ stageID: 0 });
        // console.log(`message = ${JSON.stringify(message)}`);
        console.log(message);
        var buffer = msg.encode(message).finish();
        protoMgr.sendMsg("cmsg.CReqStageFight", buffer);
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPSTAGEFIGHT, this.respStageFight, this);
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTART, this.notifyGameStart, this);
    };
    MainPannel.prototype.respStageFight = function (e) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respStageFight, this);
        if (e.msg.errCode && e.msg.errCode != 0) {
            alert(e.msg.errMsg);
            return;
        }
    };
    MainPannel.prototype.notifyGameStart = function (e) {
        ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTART, this.notifyGameStart, this);
        var event = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT);
        event.eventType = FightPannel.FIGHT;
        event.data = e.msg;
        var user = e.msg.user;
        event.obj = this;
        ViewManager.getInstance().dispatchEvent(event);
    };
    //结束界面，释放监听
    MainPannel.prototype.end = function () {
    };
    MainPannel.CHANGEPANEL = "mainPannel";
    return MainPannel;
}(egret.Sprite));
__reflect(MainPannel.prototype, "MainPannel");
//# sourceMappingURL=MainPannel.js.map