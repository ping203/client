// TypeScript file
class UserInitPannel extends egret.Sprite {

	public static Init: string = "userInit";
	private bg: egret.Bitmap;// 背景
	private startBtn: eui.Button;
	private nameText: egret.TextField;//
	private generalText: egret.TextField;
	private nickName: egret.TextField;//
	private general: egret.TextField;//
	public constructor() {
		super();
		this.init();
	}

	//开启监听
	public start() {
		this.startBtn.touchEnabled = true;
		this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUserInit, this);
	}
	//初始化
	private init() {
		this.bg = new egret.Bitmap(RES.getRes('userInit_png'));
		this.addChild(this.bg);

		this.nameText = new egret.TextField();
		this.nameText.text = "名字:";
		this.nameText.textColor = 0x000000;
		this.addChild(this.nameText);
		this.nickName = this.getTextInput()
		this.addChild(this.nickName);

		this.nameText.x = this.width * 0.5 - (this.nameText.width + this.nickName.width) / 2
		this.nameText.y = this.height * 0.4
		this.nickName.x = this.nameText.x + this.nameText.width
		this.nickName.y = this.nameText.y

		this.generalText = new egret.TextField();
		this.generalText.text = "武将ID：";
		this.generalText.textColor = 0x000000;
		this.addChild(this.generalText);
		this.general = this.getTextInput()
		this.addChild(this.general);

		this.generalText.x = this.width * 0.5 - (this.generalText.width + this.general.width) / 2
		this.generalText.y = this.height * 0.6
		this.general.x = this.generalText.x + this.generalText.width
		this.general.y = this.generalText.y

		this.startBtn = new eui.Button();
		this.startBtn.width = this.width * 0.05
		this.startBtn.label = '创建角色';
		this.startBtn.x = this.width * 0.5 - this.startBtn.width / 2
		this.startBtn.y = this.general.y + this.width * 0.1
		this.addChild(this.startBtn);
	}

	private getTextInput(): egret.TextField {
		let text = new egret.TextField();
		text.text = '';
		text.type = egret.TextFieldType.INPUT;
		text.textColor = 0xFFFFFF;
		text.background = true
		text.backgroundColor = 0x000000
		text.width = this.width * 0.3
		return text
	}

	private reqUserInit(e: egret.TouchEvent) {
		let protoMgr = ProtoBuffManager.getInstance()
		const auth = protoMgr.root.lookupType("cmsg.CReqUserInit");

		let message = auth.create({ nickName: this.nickName.text, firstGeneral: this.general.text });
		// console.log(`message = ${JSON.stringify(message)}`);

		console.log(message)
		let buffer = auth.encode(message).finish();

		protoMgr.sendMsg("cmsg.CReqUserInit", buffer)
		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CRESPUSERINIT, this.respUserInit, this)

	}

	public respUserInit(e: ServiceEvent) {
		ProtoProxy.getInstance().removeEventListener(ServiceEvent.CMSG_CRESPUSERINIT, this.respUserInit, this)

		if (e.msg.errCode && e.msg.errCode != 0) {
			alert(e.msg.errMsg)
			return
		}

		// 跳转到主界面
		var event: ChangeSceneEvent = new ChangeSceneEvent(ChangeSceneEvent.CHANGE_SCENE_EVENT)
		event.eventType = LoginPannel.LOGIN

		event.obj = this
		ViewManager.getInstance().dispatchEvent(event)
	}

	//结束界面，释放监听
	public end() {
		this.startBtn.touchEnabled = false;
		if (this.startBtn.hasEventListener(egret.TouchEvent.TOUCH_TAP))
			this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.reqUserInit, this);
	}
}