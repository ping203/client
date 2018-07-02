

class ProtoProxy extends egret.EventDispatcher {
	constructor() {
		super();
		this.init()
	}

	public static instance: ProtoProxy
	public static getInstance(): ProtoProxy {
		if (ProtoProxy.instance == null) {
			ProtoProxy.instance = new ProtoProxy();
		}

		return ProtoProxy.instance;
	}

	public init() {
		this.addEventListener(ProtoEvent.RECEIVE_MESSAGE, this.receiveMessage, this)
	}

	public receiveMessage(e: ProtoEvent) {
		let protoMgr = ProtoBuffManager.getInstance()
		let type = protoMgr.getType(e.id)
		let messageType = protoMgr.root.lookupType("cmsg.CRespLogin")

		let msg = messageType.decode(e.msg.bytes)
		console.log(msg)

		let serviceEvent = new ServiceEvent(type)
		serviceEvent.msg = msg
		this.dispatchEvent(serviceEvent)
	}


}