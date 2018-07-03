// TypeScript file
class FightPannel extends egret.Sprite {
	private bg: egret.Bitmap;// 背景

	public static FIGHT: string = "fight";
	private startBtn: eui.Button;
	private loginText: egret.TextField;//
	private input: egret.TextField;//
	public constructor() {
		super();
		this.init();
	}

	public start() {
		this.startBtn.touchEnabled = true;
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUseSkill, this);
	}
	//初始化
	private init() {
		this.bg = new egret.Bitmap(RES.getRes('login_png'));
		this.addChild(this.bg);

		this.loginText = new egret.TextField();
		this.loginText.text = "战斗界面";
		this.loginText.textColor = 0x000000;
		this.addChild(this.loginText);

		// this.input = new egret.TextField();
		// this.input.text = '';
		// this.input.type = egret.TextFieldType.INPUT;
		// this.input.textColor = 0xFFFFFF;
		// this.input.background = true
		// this.input.backgroundColor = 0x000000
		// this.addChild(this.input);

		this.startBtn = new eui.Button();
		this.startBtn.label = '使用技能';
		this.addChild(this.startBtn);
	}

	private onTouchTab(e: egret.TouchEvent) {
		// let protoMgr = ProtoBuffManager.getInstance()
		// const auth = protoMgr.root.lookupType("cmsg.CReqAuth");

		// let message = auth.create({ account: this.input.text });
		// // console.log(`message = ${JSON.stringify(message)}`);

		// console.log(message)
		// let buffer = auth.encode(message).finish();

		// protoMgr.sendMsg("cmsg.CReqAuth", buffer)
		// ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPAUTH, this.respAuth, this)

	}

	private reqUseSkill(skillID: number) {
		let protoMgr = ProtoBuffManager.getInstance()
		const msg = protoMgr.root.lookupType("cmsg.CReqUseSkill");

		let message = msg.create({ account: this.input.text });
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

	//结束界面，释放监听
	public end() {
		this.startBtn.touchEnabled = false;
		if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
			this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTab, this);
	}
}