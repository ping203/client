class User {
	public nickName: string
	public userID: number
	public firstGeneralID: number
	public generals: Map<number, General>
	public constructor() {
		this.init()
	}
	public static instance: User
	public static getInstance(): User {
		if (User.instance == null) {
			User.instance = new User();
		}

		return User.instance;
	}

	public init() {
		this.generals = new Map

		ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYDATACHANGE, this.update, this)
	}

	public updateUser(nickName: string, userID: number, firstGeneralID: number) {
		this.nickName = nickName
		this.userID = userID
		this.firstGeneralID = firstGeneralID
	}

	public getByPkID(pkid: number): General {
		if (!this.generals.has(pkid)) {
			return null
		}
		return this.generals.get(pkid)
	}

	public updateGeneral(generals: Array<any>) {
		for (let i in generals) {
			let general = generals[i]
			// console.log(general)
			let gen = this.getByPkID(general.pkID)
			if (gen == null) {
				let item = new General(general)
				this.generals.set(general.pkID, item)
			} else {
				gen.setInfo(general)
			}
		}
	}


	public update(e: ServiceEvent) {
		// console.log("user update:", this)
		if (e.msg.changes.length == 0) {
			return
		}

		for (let item in e.msg.changes) {
			switch (e.msg.changes[item]) {
				case 1:
					let user = e.msg.user
					this.updateUser(user.nickname, user.userID, user.fightGeneralID)
				case 2:
					let generals = e.msg.generals
					this.updateGeneral(generals)
			}
		}
	}

	public getFightGeneral() :General{
		return this.getByPkID(this.firstGeneralID)
	}

	public getName(): string {
		return this.nickName
	}

	public clear() {
		User.instance = null
	}
}