class ServiceEvent extends egret.Event {
	public static CMSG_CRESPLOGIN = "cmsg.CRespLogin"
	public static CMSG_CRESPAUTH = "cmsg.CRespAuth"
	public static CMSG_CRESPSTAGEFIGHT = "cmsg.CRespStageFight"
	public static CMSG_CNOTIFYGAMESTART = "cmsg.CNotifyGameStart"
	public static CMSG_CRESPUSERINIT = "cmsg.CRespUserInit"
	public static CMSG_CNOTIFYDATACHANGE = "cmsg.CNotifyDataChange"
	public static CMSG_CRESPUSESKILL = "cmsg.CRespUserSkill"
	public static CMSG_CRESPLEARNSKILL = "cmsg.CRespLearnSkill"
	public static CMSG_CRESPCATCH = "cmsg.CRespCatch"

	public static CMSG_CNOTIFYGAMESTAGE = "cmsg.CNotifyGameStage"
	public static CMSG_CNOTIFYGAMEACTION = "cmsg.CNotifyGameAction"
	public static CMSG_CNOTIFYGENERALSTATAUS = "cmsg.CNotifyGeneralStatus"
	public static CMSG_CNOTIFYGAMERESULT = "cmsg.CNotifyGameResult"

	public msg: any;// 信息
	public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
		super(type, bubbles, cancelable);
	}


}