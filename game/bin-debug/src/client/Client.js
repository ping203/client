var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Client = (function () {
    function Client() {
        this.init();
    }
    Client.prototype.init = function () {
        this.conn = NetConn.getInstance();
    };
    Client.getInstance = function () {
        if (Client.instance == null) {
            Client.instance = new Client();
        }
        return Client.instance;
    };
    // 连接固定地址
    Client.prototype.connect = function (address, port) {
        if (this.conn.isConnect()) {
            return Error("已经连接");
        }
        this.conn.connect(address, port);
    };
    // 关闭连接
    Client.prototype.close = function () {
        if (!this.conn.isConnect()) {
            return Error("未连接");
        }
        this.conn.close();
    };
    Client.prototype.read = function () {
        var len = this.conn.read(2);
        return this.conn.read(Number(len));
    };
    Client.prototype.write = function (id, data) {
        var byte = new egret.ByteArray();
        var len = data.length + 2;
        byte.writeShort(len);
        byte.writeShort(id);
        byte.writeBytes(data);
        console.log(len, id, data);
        this.conn.write(data);
    };
    return Client;
}());
__reflect(Client.prototype, "Client");
//# sourceMappingURL=Client.js.map