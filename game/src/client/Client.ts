class Client {
	private conn: NetConn
	private static instance: Client
	private address: string
	private port: number
	public timer: egret.Timer;//计时器
	public timeNumbers: number = 5;//重连时间
	public count: number = 0;
	public constructor() {
		this.init()
	}

	public start() {
		this.count = 0
		this.timer.start();
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
	}

	public stop() {
		if (this.timer.hasEventListener(egret.TimerEvent.TIMER))
			this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
		this.timer.stop();
		this.timer.reset();
	}

	public init() {
		this.conn = NetConn.getInstance()
		this.timer = new egret.Timer(1000);
	}


	public static getInstance(): Client {
		if (Client.instance == null) {
			Client.instance = new Client();
		}

		return Client.instance;
	}


	// 连接固定地址
	public connect(address: string, port: number): Error {
		if (this.conn.isConnect()) {
			return Error("已经连接")
		}
		this.address = address
		this.port = port
		this.conn.connect(address, port)
	}

	public reconnect(): Error {
		if (this.conn.isConnect()) {
			return Error("已经连接")
		}
		this.conn.connect(this.address, this.port)
	}

	// 关闭连接
	public close() {
		if (!this.conn.isConnect()) {
			return Error("未连接")
		}
		this.conn.close()
	}


	public write(id: number, data: egret.ByteArray) {
		var byte: egret.ByteArray = new egret.ByteArray();
		byte.writeShort(id)
		byte.writeBytes(data)
		// console.log(byte)

		this.conn.write(byte)
	}

	public onTimer(e: egret.TimerEvent) {
		this.count++
		if (this.count%this.timeNumbers == 0){
			this.reconnect()
		}
	}

}