class Client {
	private conn: NetConn
	private static instance: Client
	public constructor() {
		this.init()
	}

	public init() {
		this.conn = NetConn.getInstance()
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
		this.conn.connect(address, port)
	}

	// 关闭连接
	public close() {
		if (!this.conn.isConnect()) {
			return Error("未连接")
		}
		this.conn.close()
	}

	public read(): egret.ByteArray {
		let len = this.conn.read(2)
		return this.conn.read(Number(len))
	}

	public write(id:number, data:egret.ByteArray){
		var byte: egret.ByteArray = new egret.ByteArray();
		byte.writeShort(id)
		byte.writeBytes(data)
		console.log(byte)

		this.conn.write(byte)
	}
}