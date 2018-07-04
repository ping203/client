class UserInfo extends eui.Component implements eui.UIComponent {
	private nickName: eui.Label;
	private level: eui.Label;
	public constructor() {
		super();
		this.skinName = "UserInfoSkin"
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public update(nickName:string,level:number){
		this.nickName.text = nickName
		this.level.text = ""+level
	}

}