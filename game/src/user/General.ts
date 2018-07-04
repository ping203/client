class Individual {
	private msg: any
	public constructor(msg: any) {
	}

	public getIndividual(): any {
		return this.msg
	}
}

class General {
	private info: any
	public constructor(info: any) {
		this.setInfo(info)
	}

	public getInfo(): any {
		return this.info
	}

	public setInfo(info : any) {
		this.info = info
	}
}