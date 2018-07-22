// TypeScript file
class FightPannel extends egret.Sprite {
	private bg: egret.Bitmap;// 背景

	public static FIGHT: string = "fight";
	private generals: Map<number, GameGeneral>
	private startBtn: eui.Button;
	private quitBtn: eui.Button;
	private gameStage: egret.Sprite; // 战斗操作界面
	private myGeneral: FightGeneral; // 我方武将信息界面
	private opGeneral: FightGeneral; // 敌方武将信息界面
	private fightInfo: ScrollText; // 战斗信息界面
	private gameResultWindow: egret.Sprite; // 结算弹窗

	public constructor() {
		super();
		this.init();
	}

	public start(generals: Array<any>) {
		this.initGenerals(generals)
		this.fightInfo.clearText()


		this.startBtn.visible = true
		this.startBtn.touchEnabled = true;
		this.quitBtn.visible = false
		this.quitBtn.touchEnabled = false;
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.useSkill, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTAGE, this.notifyGameStage, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMEACTION, this.notifyGameAction, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGENERALSTATAUS, this.notifyGeneralStatus, this);
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYGAMERESULT, this.notifyGameResult, this);
	}
	//初始化
	private init() {
		this.generals = new Map
		// this.bg = new egret.Bitmap(RES.getRes('login_png'));
		// this.addChild(this.bg);

		this.initMyGeneral()
		this.initOpGeneral()
		this.initFightInfo()

		this.addChild(this.myGeneral)
		this.addChild(this.opGeneral)
		this.addChild(this.fightInfo)

		this.startBtn = new eui.Button();
		this.startBtn.label = '使用技能';
		this.startBtn.x = 1200
		this.startBtn.y = 700
		this.addChild(this.startBtn);

		this.quitBtn = new eui.Button();
		this.quitBtn.label = '退出';
		this.quitBtn.x = 1200
		this.quitBtn.y = 700
		this.addChild(this.quitBtn);
		this.quitBtn.visible = false
	}

	private initMyGeneral() {
		this.myGeneral = new FightGeneral("我方")
		this.myGeneral.scaleX = 1.2
		this.myGeneral.scaleY = 1.2
	}

	private initOpGeneral() {
		this.opGeneral = new FightGeneral("敌方")
		this.opGeneral.x = this.myGeneral.width * this.myGeneral.scaleX

		this.opGeneral.scaleX = 1.2
		this.opGeneral.scaleY = 1.2
	}


	private initFightInfo() {
		this.fightInfo = new ScrollText()
		this.fightInfo.y = this.myGeneral.height * this.myGeneral.scaleY + 20
		// console.log(this.fightInfo.width, this.fightInfo.height)
	}

	// 初始化双方武将
	private initGenerals(generals: Array<any>) {
		let user = User.getInstance()
		for (let i in generals) {
			let general = new GameGeneral(generals[i])
			this.generals.set(generals[i].userID, general)
			if (generals[i].userID == user.userID) {
				this.myGeneral.update(generals[i])
			} else {
				this.opGeneral.update(generals[i])
			}
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

	private useSkill() {
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
		switch (e.msg.stage) {
			case 1:
				this.fightInfo.addText("回合开始")
			case 2:
				this.fightInfo.addText("决策开始:请选择使用技能")
		}
	}

	private notifyGameAction(e: ServiceEvent) {
		if (!e.msg) {
			return
		}
		switch (e.msg.type) {
			case 1:
				this.notifyUserSkill(e)
				break
			case 2:
				this.notifyUserSkill(e)
				break
		}
	}

	private notifyUserSkill(e: ServiceEvent) {
		if (this.isMe(e.msg.userID)) {
			this.fightInfo.addText("我方使用技能" + e.msg.skillID)
		} else {
			this.fightInfo.addText("敌方使用技能" + e.msg.skillID)
		}
	}

	private notifyCatch(e: ServiceEvent) {
		if (this.isMe(e.msg.userID)) {
			this.fightInfo.addText("我方使用捕捉")
		} else {
			this.fightInfo.addText("敌方使用捕捉")
		}
	}

	private isMe(userID: number): boolean {
		let user = User.getInstance()
		if (user.userID == userID) {
			return true
		} else {
			return false
		}
	}

	private notifyGeneralStatus(e: ServiceEvent) {
		if (!e.msg) {
			return
		}
		let userID = e.msg.gameGeneral.userID
		if (this.isMe(userID)) {
			let before = this.myGeneral.getInfo()
			this.printFightInfo(true, before, e.msg.gameGeneral)
			this.myGeneral.update(e.msg.gameGeneral)
		} else {
			let before = this.opGeneral.getInfo()
			this.printFightInfo(false, before, e.msg.gameGeneral)
			this.opGeneral.update(e.msg.gameGeneral)
		}
	}

	private printFightInfo(isMe: boolean, before: any, after: any) {
		let user = "我方"
		if (!isMe) {
			user = "敌方"
		}

		if (before.curHP != after.curHP) {
			if (after.curHP < before.curHP) {
				let text = user + "受到" + (before.curHP - after.curHP) + "伤害"
				this.fightInfo.addText(text)
			}
		}
	}

	private notifyGameResult(e: ServiceEvent) {
		this.fightInfo.addText("游戏结束")
		let user = User.getInstance()
		if (e.msg.winner == user.userID) {
			this.fightInfo.addText("我方获得胜利")
		} else {
			this.fightInfo.addText("敌方获得胜利")
		}

		this.fightInfo.addText("获得经验" + e.msg.exp)
		this.startBtn.visible = false
		this.startBtn.touchEnabled = false;
		this.quitBtn.visible = true
		this.quitBtn.touchEnabled = true;

		this.quitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.quit, this);

	}

	private gameEnd(e: ServiceEvent) {
		console.log("游戏结束", e.msg)
	}

	private quit() {
		var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
		event.eventType = MainPannel.CHANGEPANEL

		event.obj = this
		ViewManager.getInstance().dispatchEvent(event)
	}
	//结束界面，释放监听
	public end() {
		this.startBtn.touchEnabled = false;
		if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
			this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUseSkill, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTAGE))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMESTAGE, this.notifyGameStage, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGAMEACTION))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMEACTION, this.notifyGameAction, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGENERALSTATAUS))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGENERALSTATAUS, this.notifyGeneralStatus, this);
		if (ProtoProxy.getInstance().hasEventListener(ServiceEvent.CMSG_CNOTIFYGAMERESULT))
			ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CNOTIFYGAMERESULT, this.notifyGeneralStatus, this);
		if (this.quitBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
			this.quitBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.quit, this);
	}
}