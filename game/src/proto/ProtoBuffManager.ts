class ProtoBuffManager {
	public root: protobuf.Root
	private id2Type: Map<number,string>
	private type2id: Map<string,number>
	public constructor() {
		this.id2Type = new Map
		this.type2id = new Map
		this.init()
	}

	public static instance: ProtoBuffManager
	public static getInstance(): ProtoBuffManager {
		if (ProtoBuffManager.instance == null) {
			ProtoBuffManager.instance = new ProtoBuffManager();
		}

		return ProtoBuffManager.instance;
	}

	public init() {
		this.root = new protobuf.Root();
		let clientMsg: string = RES.getRes("client_msg_proto");
		let gameType: string = RES.getRes("game_type_proto");
		let gamedef: string = RES.getRes("game_def_proto");

		protobuf.parse(gameType, this.root);
		protobuf.parse(gamedef, this.root);
		protobuf.parse(clientMsg, this.root);

		this.initMsgID()

		// let code = this.stringHash("cmsg", "CReqAuth")
		// console.log(code)
		// 测试
		// console.log(this.root.nested["cmsg"]["nestedArray"])
		// for (var i = 0; i < this.root.deferred.length; i++) {
		// 	console.log(this.root.deferred[i])
		// }
	}


	private initMsgID(){
		let head = "cmsg"
		let arr = this.root.nested["cmsg"]["nestedArray"]
		let name = "name"
		for (var i = 0; i < arr.length; i++) {
			let msg = arr[i][name]
			let id = this.stringHash(head,msg)
			let str = head+"."+msg
			// console.log(id, str)
			this.id2Type.set(id,str)
			this.type2id.set(str,id)
		}
	}

	private stringHash(head, str: string): number {
		str = "*" + head + "." + str
		let hash: number = 0
		for (var i = 0; i < str.length; i++) {
			let ch = str.charCodeAt(i)
			hash = this.toUint16(hash + this.toUint16(hash << 5) + ch + this.toUint16(ch << 7))
		}
		// console.log(hash)
		return hash
	}

	private toUint16(num: number): number {
		return num & 65535
	}

	private getID(type:string): number {
		// console.log(this.type2id.get(type))
		return this.type2id.get(type)
	}

	public sendMsg(type:string, msg:Uint8Array) { 
		let id = this.getID(type)
		let byte = new egret.ByteArray(msg)
		Client.getInstance().write(id,byte)
	}


	public receiveMsg(num: number): number {
		return num & 65535
	}
}