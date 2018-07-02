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
var ProtoProxy = (function (_super) {
    __extends(ProtoProxy, _super);
    function ProtoProxy() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    ProtoProxy.getInstance = function () {
        if (ProtoProxy.instance == null) {
            ProtoProxy.instance = new ProtoProxy();
        }
        return ProtoProxy.instance;
    };
    ProtoProxy.prototype.init = function () {
        this.addEventListener(ProtoEvent.RECEIVE_MESSAGE, this.receiveMessage, this);
    };
    ProtoProxy.prototype.receiveMessage = function (e) {
        var protoMgr = ProtoBuffManager.getInstance();
        var type = protoMgr.getType(e.id);
        var messageType = protoMgr.root.lookupType("cmsg.CRespLogin");
        var msg = messageType.decode(e.msg.bytes);
        console.log("mmmmm", msg);
        console.log(msg);
    };
    return ProtoProxy;
}(egret.EventDispatcher));
__reflect(ProtoProxy.prototype, "ProtoProxy");
//# sourceMappingURL=ProtoProxy.js.map