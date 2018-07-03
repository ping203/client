class ServiceEvent extends egret.Event {
	public static CMSG_CRESPLOGIN = "cmsg.CRespLogin"
	public static CMSG_CRESPAUTH = "cmsg.CRespAuth"
	public static CMSG_CRESPSTAGEFIGHT = "cmsg.CRespStageFight"
	public static CMSG_CNOTIFYGAMESTART = "cmsg.CNotifyGameStart"
	public msg: any;// 信息
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}


}