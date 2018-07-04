// TypeScript file
class FightPannel extends egret.Sprite {
	private bg: egret.Bitmap;// 背景

	public static FIGHT: string = "fight";
	private generals: Map<number, GameGeneral>
	private startBtn: eui.Button;
	private pkStage: egret.Sprite; // 交战界面
	private gameStage: egret.Sprite; // 战斗操作界面
	private myGeneral: egret.Sprite; // 我方武将信息界面
	private opGeneral: egret.Sprite; // 敌方武将信息界面
	private fightInfo: ScrollText; // 战斗信息界面
	private gameResultWindow: egret.Sprite; // 结算弹窗

	public constructor() {
		super();
		this.init();
	}

	public start(generals: Array<any>) {
		this.initGenerals(generals)

		this.startBtn.touchEnabled = true;
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUseSkill, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTAGE, this.notifyGameStage, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYUSESKILL, this.notifyUseSkill, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGENERALSTATAUS, this.notifyGeneralStatus, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMERESULT, this.notifyGameResult, this);
	}
	//初始化
	private init() {
		this.generals = new Map
		// this.bg = new egret.Bitmap(RES.getRes('login_png'));
		// this.addChild(this.bg);

		// this.initMyGeneral()
		// this.initStage()
		// this.initOpGeneral()
		this.initFightInfo()

		// this.addChild(this.myGeneral)
		// this.addChild(this.pkStage)
		// this.addChild(this.opGeneral)
		this.addChild(this.fightInfo)

		this.startBtn = new eui.Button();
		this.startBtn.label = '使用技能';
		this.addChild(this.startBtn);
	}

	private initMyGeneral() {
		this.myGeneral = new egret.Sprite

		let bg = new egret.Bitmap(RES.getRes('login_png'));
		bg.width = 360
		this.myGeneral.addChild(bg);
	}

	private initOpGeneral() {
		this.opGeneral = new egret.Sprite
		this.opGeneral.x = 720

		let bg = new egret.Bitmap(RES.getRes('login_png'));
		bg.width = 360
		this.opGeneral.addChild(bg);
	}

	private initStage() {
		this.pkStage = new egret.Sprite
		this.pkStage.x = this.myGeneral.x + 360

		let up = new egret.Bitmap(RES.getRes('login_png'));
		up.width = 360
		up.height = 384
		let down = new egret.Bitmap(RES.getRes('login_png'));
		down.width = 360
		down.height = 384
		down.y = 384

		this.pkStage.addChild(up)
		this.pkStage.addChild(down)
	}

	private initFightInfo() {
		this.fightInfo = new ScrollText()
		console.log(this.fightInfo.width, this.fightInfo.height)
		// this.fightInfo.addText("121212")
	}

	// 初始化双方武将
	private initGenerals(generals: Array<any>) {
		for (let i in generals) {
			let general = new GameGeneral(generals[i])
			this.generals.set(generals[i].userID, general)
			console.log("初始化武将:", general.getInfo())
		}
	}

	private reqUseSkill(skillID: number) {
		let protoMgr = ProtoBuffManager.getInstance()
		const msg = protoMgr.root.lookupType("cmsg.CReqUseSkill");

		let message = msg.create({ skillID: 1 });
		// console.log(`message = ${JSON.stringify(message)}`);

		console.log(message)
		let buffer = msg.encode(message).finish();

		protoMgr.sendMsg("cmsg.CReqUseSkill", buffer)
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPUSESKILL, this.respUseSkill, this)
	}

	private userSkill() {
		this.reqUseSkill(1)
	}

	public respUseSkill(e: ServiceEvent) {
		ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPUSESKILL, this.respUseSkill, this)
		if (e.msg.errCode && e.msg.errCode != 0) {
			alert(e.msg.errMsg)
			return
		}
	}

	// 返回主界面
	private back2MainPannel() {
		var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
		event.eventType = LoginPannel.LOGIN
		event.obj = this
		ViewManager.getInstance().dispatchEvent(event)
	}

	private notifyGameStage(e: ServiceEvent) {
		console.log("阶段变化", e.msg)
	}

	private notifyUseSkill(e: ServiceEvent) {
		console.log("使用技能", e.msg)
	}

	private notifyGeneralStatus(e: ServiceEvent) {
		console.log("武将信息变化", e.msg)
	}

	private notifyGameResult(e: ServiceEvent) {
		console.log("游戏结果", e.msg)
		let user = User.getInstance()
		if (e.msg.winner == user.userID) {
			alert("获得胜利")
		} else {
			alert("失败")
		}
	}

	private gameEnd(e: ServiceEvent) {
		console.log("游戏结束", e.msg)
	}
	//结束界面，释放监听
	public end() {
		this.startBtn.touchEnabled = false;
		if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
			this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUseSkill, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTAGE))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTAGE, this.notifyGameStage, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYUSESKILL))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYUSESKILL, this.notifyUseSkill, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGENERALSTATAUS))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGENERALSTATAUS, this.notifyGeneralStatus, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGAMERESULT))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMERESULT, this.notifyGeneralStatus, this);
	}
}