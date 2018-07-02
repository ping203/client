class NetConn {
	private webSocket: egret.WebSocket; // webSocket
	private static instance: NetConn;
	public constructor() {
		this.init()
	}

	public static getInstance(): NetConn {
		if (NetConn.instance == null) {
			NetConn.instance = new NetConn();
		}

		return NetConn.instance;
	}

	public init() {
		this.webSocket = new egret.WebSocket
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
	}

	// 连接固定地址
	public connect(address: string, port: number) {
		this.webSocket.connect(address, port)
	}

	public isConnect(): boolean {
		return this.webSocket.connected
	}

	public close() {
		this.webSocket.close()
	}

	public read(): egret.ByteArray {
		var byte: egret.ByteArray = new egret.ByteArray();
		this.webSocket.readBytes(byte);
		return byte
	}

	public write(data: egret.ByteArray) {
		this.webSocket.writeBytes(data)
		this.webSocket.flush()
	}

	public onReceiveMessage(e: egret.ProgressEvent) {
		let r = this.read()
		let id = r.readShort()
		let event = new ProtoEvent(ProtoEvent.RECEIVE_MESSAGE)
		event.id = id
		let data = new egret.ByteArray
		r.readBytes(data,2)
		event.msg = data

		ProtoProxy.getInstance().dispatchEvent(event)
	}
	public onSocketOpen(e: egret.Event) {
		console.log("连接成功")
	}

	public onSocketClose(e: egret.IOErrorEvent) {
		console.log("连接断开")
	}

	public onSocketError() {
		console.log("数据读取错误")
	}

}