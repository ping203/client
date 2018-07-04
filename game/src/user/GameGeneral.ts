class GameGeneral {
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