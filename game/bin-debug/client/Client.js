var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Client = (function () {
    function Client() {
        this.timeNumbers = 5; //重连时间
        this.count = 0;
        this.init();
    }
    Client.prototype.start = function () {
        this.count = 0;
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
    };
    Client.prototype.stop = function () {
        if (this.timer.hasEventListener(egret.TimerEvent.TIMER))
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.timer.stop();
        this.timer.reset();
    };
    Client.prototype.init = function () {
        this.conn = NetConn.getInstance();
        this.timer = new egret.Timer(1000);
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
        this.address = address;
        this.port = port;
        this.conn.connect(address, port);
    };
    Client.prototype.reconnect = function () {
        if (this.conn.isConnect()) {
            return Error("已经连接");
        }
        this.conn.connect(this.address, this.port);
    };
    // 关闭连接
    Client.prototype.close = function () {
        if (!this.conn.isConnect()) {
            return Error("未连接");
        }
        this.conn.close();
    };
    Client.prototype.write = function (id, data) {
        var byte = new egret.ByteArray();
        byte.writeShort(id);
        byte.writeBytes(data);
        // console.log(byte)
        this.conn.write(byte);
    };
    Client.prototype.onTimer = function (e) {
        this.count++;
        if (this.count % this.timeNumbers == 0) {
            this.reconnect();
        }
    };
    return Client;
}());
__reflect(Client.prototype, "Client");
//# sourceMappingURL=Client.js.map