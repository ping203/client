class ServiceEvent extends egret.Event {
<<<<<<< Updated upstream
	public static CMSG_CRESPLOGIN = "cmsg.CRespLogin"
	public static CMSG_CRESPAUTH = "cmsg.CRespAuth"
	public static CMSG_CRESPSTAGEFIGHT = "cmsg.CRespStageFight"
	public static CMSG_CNOTIFYGAMESTART = "cmsg.CNotifyGameStart"
=======
	public static CMSG_CRESPAUTH = "cmsg.CRespAuth"
	public static CMSG_CRESPLOGIN = "cmsg.CRespLogin"
	public static CMSG_CRESPUSERINIT = "cmsg.CRespUserInit"
	public static CMSG_CNOTIFYDATACHANGE = "cmsg.CNotifyDataChange"
>>>>>>> Stashed changes
	public msg: any;// 信息
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}


}