class ScrollText extends eui.Component implements eui.UIComponent {
	private textScroll: eui.Scroller;    //聊天记录滚动容器
	private fightText: eui.Label;
	public constructor() {
		super();
		this.skinName = "ScrollTextSkin"
	}

	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}


	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public addText(str: string) {
		//显示聊天记录
		if (this.fightText.text != "") {
			this.fightText.text += "\n" + str;
		} else {
			this.fightText.text += str;
		}
		// console.log(this.fightText.height)
		//文本高度大于滚动容器高度时，将视口置于文本最后一行
		if (this.fightText.height > this.textScroll.height) {
			this.textScroll.viewport.scrollV = this.fightText.height - this.textScroll.height;
		}
	}

	public clearText() {
		this.fightText.text = ""
	}

}