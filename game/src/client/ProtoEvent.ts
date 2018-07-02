class ProtoEvent extends egret.Event {
	public static RECEIVE_MESSAGE = "receiveMessage"
	public id: number;//协议ID
	public msg: egret.ByteArray;// 信息
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}


}