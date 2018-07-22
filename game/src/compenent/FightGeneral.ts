class FightGeneral extends eui.Component implements eui.UIComponent {
	private hp: eui.Label
	private atk: eui.Label
	private def: eui.Label
	private spa: eui.Label
	private spdf: eui.Label
	private spd: eui.Label
	private skills: eui.Label
	private level: eui.Label
	private userName: eui.Label
	private generalName: eui.Label
	private curHp: eui.Rect
	info: any
	public constructor(userName : string) {
		super();
		this.skinName = "fightGeneralSkin"
		this.userName.text = userName
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public update(info: any) {
		let conf = GeneralConfig.getInstance().getGeneralByID(info.generalID)
		// console.log(conf)
		if (!conf) {
			return
		}
		this.info = info
		this.hp.text = info.baseHp
		this.atk.text = info.baseAttack
		this.def.text = info.baseDefense
		this.spa.text = info.baseSpAttack
		this.spdf.text = info.baseSpDefense
		this.spd.text = info.baseSpeed
		this.level.text = info.level
		this.generalName.text = conf.GeneralName
		let scaleHp = info.curHP / info.baseHp

		// console.log(this.curHp, scaleHp,info.curHP/info.baseHp)
		if (scaleHp <0){
			scaleHp = 0
		}
		this.curHp.scaleX = scaleHp


		let skillConfMgr = SkillConfig.getInstance()
		this.skills.text = ""
		for (let i in info.skills) {
			let skillConf = skillConfMgr.getSkillByID(info.skills[i])
			if (skillConf) {
				this.skills.text += skillConf.SkillName
			}
		}

	}
	public getInfo() {
		return this.info
	}

}