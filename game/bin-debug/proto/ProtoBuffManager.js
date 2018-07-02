var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ProtoBuffManager = (function () {
    function ProtoBuffManager() {
        this.id2Type = new Map;
        this.type2id = new Map;
        this.init();
    }
    ProtoBuffManager.getInstance = function () {
        if (ProtoBuffManager.instance == null) {
            ProtoBuffManager.instance = new ProtoBuffManager();
        }
        return ProtoBuffManager.instance;
    };
    ProtoBuffManager.prototype.init = function () {
        this.root = new protobuf.Root();
        var clientMsg = RES.getRes("client_msg_proto");
        var gameType = RES.getRes("game_type_proto");
        var gamedef = RES.getRes("game_def_proto");
        protobuf.parse(gameType, this.root);
        protobuf.parse(gamedef, this.root);
        protobuf.parse(clientMsg, this.root);
        this.initMsgID();
        // let code = this.stringHash("cmsg", "CReqAuth")
        // console.log(code)
        // 测试
        // console.log(this.root.nested["cmsg"]["nestedArray"])
        // for (var i = 0; i < this.root.deferred.length; i++) {
        // 	console.log(this.root.deferred[i])
        // }
    };
    ProtoBuffManager.prototype.initMsgID = function () {
        var head = "cmsg";
        var arr = this.root.nested["cmsg"]["nestedArray"];
        var name = "name";
        for (var i = 0; i < arr.length; i++) {
            var msg = arr[i][name];
            var id = this.stringHash(head, msg);
            var str = head + "." + msg;
            // console.log(id, str)
            this.id2Type.set(id, str);
            this.type2id.set(str, id);
        }
    };
    ProtoBuffManager.prototype.stringHash = function (head, str) {
        str = "*" + head + "." + str;
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            var ch = str.charCodeAt(i);
            hash = this.toUint16(hash + this.toUint16(hash << 5) + ch + this.toUint16(ch << 7));
        }
        // console.log(hash)
        return hash;
    };
    ProtoBuffManager.prototype.toUint16 = function (num) {
        return num & 65535;
    };
    ProtoBuffManager.prototype.getID = function (type) {
        // console.log(this.type2id.get(type))
        return this.type2id.get(type);
    };
    ProtoBuffManager.prototype.getType = function (id) {
        // console.log(this.type2id.get(type))
        return this.id2Type.get(id);
    };
    ProtoBuffManager.prototype.sendMsg = function (type, msg) {
        var id = this.getID(type);
        var byte = new egret.ByteArray(msg);
        Client.getInstance().write(id, byte);
    };
    ProtoBuffManager.prototype.receiveMsg = function (num) {
        return num & 65535;
    };
    return ProtoBuffManager;
}());
__reflect(ProtoBuffManager.prototype, "ProtoBuffManager");
//# sourceMappingURL=ProtoBuffManager.js.map