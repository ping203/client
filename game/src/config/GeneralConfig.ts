class GeneralConfig extends ConfigerBase {
	private id2Conf: Map<number,any>
	public constructor() {
		super()
		this.init()
	}

	private static instance : GeneralConfig
	public static getInstance(): GeneralConfig {
		if (GeneralConfig.instance == null) {
			GeneralConfig.instance = new GeneralConfig();
		}

		return GeneralConfig.instance;
	}

	public init(){
		let config = RES.getRes('GameGeneralConfig_json');
		this.id2Conf = new Map
        for (let i in config.GeneralConf){
			let conf = config.GeneralConf[i]
			this.id2Conf.set(conf.GeneralID, conf)
		}
	}

	public getGeneralByID(id:number):any{
		if (!this.id2Conf.has(id)){
			return null
		}
		return this.id2Conf.get(id)
	}
}