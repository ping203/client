class SkillConfig extends ConfigerBase {
	private id2Conf: Map<number,any>
	public constructor() {
		super()
		this.init()
	}

	private static instance : SkillConfig
	public static getInstance(): SkillConfig {
		if (SkillConfig.instance == null) {
			SkillConfig.instance = new SkillConfig();
		}

		return SkillConfig.instance;
	}

	public init(){
		let config = RES.getRes('GameSkillConfig_json');
		this.id2Conf = new Map
        for (let i in config.SkillConf){
			let conf = config.SkillConf[i]
			this.id2Conf.set(conf.SkillID, conf)
		}
	}

	public getSkillByID(id:number):any{
		if (!this.id2Conf.has(id)){
			return null
		}
		return this.id2Conf.get(id)
	}
}