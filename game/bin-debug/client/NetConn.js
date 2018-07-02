var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var NetConn = (function () {
    function NetConn() {
        this.init();
    }
    NetConn.getInstance = function () {
        if (NetConn.instance == null) {
            NetConn.instance = new NetConn();
        }
        return NetConn.instance;
    };
    NetConn.prototype.init = function () {
        this.webSocket = new egret.WebSocket;
        //设置数据格式为二进制，默认为字符串
        this.webSocket.type = egret.WebSocket.TYPE_BINARY;
        //添加收到数据侦听，收到数据会调用此方法
        this.webSocket.addEventListener(egret.ProgressEvent.SOCKET_DATA, this.onReceiveMessage, this);
        //添加链接打开侦听，连接成功会调用此方法
        this.webSocket.addEventListener(egret.Event.CONNECT, this.onSocketOpen, this);
        //添加链接关闭侦听，手动关闭或者服务器关闭连接会调用此方法
        this.webSocket.addEventListener(egret.Event.CLOSE, this.onSocketClose, this);
        //添加异常侦听，出现异常会调用此方法
        this.webSocket.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onSocketError, this);
    };
    // 连接固定地址
    NetConn.prototype.connect = function (address, port) {
        this.webSocket.connect(address, port);
    };
    NetConn.prototype.isConnect = function () {
        return this.webSocket.connected;
    };
    NetConn.prototype.close = function () {
        this.webSocket.close();
    };
    NetConn.prototype.read = function () {
        var byte = new egret.ByteArray();
        this.webSocket.readBytes(byte);
        return byte;
    };
    NetConn.prototype.write = function (data) {
        this.webSocket.writeBytes(data);
        this.webSocket.flush();
    };
    NetConn.prototype.onReceiveMessage = function (e) {
        var r = this.read();
        var id = r.readUnsignedShort();
        var event = new ProtoEvent(ProtoEvent.RECEIVE_MESSAGE);
        event.id = id;
        var data = new egret.ByteArray;
        r.readBytes(data);
        event.msg = data;
        // console.log(event.id, event.msg)
        ProtoProxy.getInstance().dispatchEvent(event);
    };
    NetConn.prototype.onSocketOpen = function (e) {
        console.log("连接成功");
        var client = Client.getInstance();
        client.stop();
    };
    NetConn.prototype.onSocketClose = function (e) {
        console.log("连接断开");
        var client = Client.getInstance();
        client.start();
    };
    NetConn.prototype.onSocketError = function () {
        console.log("数据读取错误");
    };
    return NetConn;
}());
__reflect(NetConn.prototype, "NetConn");
//# sourceMappingURL=NetConn.js.map