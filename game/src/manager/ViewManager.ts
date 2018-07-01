class ChangeSceneEvent extends egret.Event {
    public static CHANGE_SCENE_EVENT: string = "changesceneevent";
    public eventType: any;//事件类型
    public obj: any;//对象
    public constructor(type: string, bubbles: boolean = false, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
}


/**
 *
 * @author 
 * 主要控制界面的切换
 */
class ViewManager extends egret.Sprite {
    public constructor() {
        super();
        this.init();
    }

    private static instance: ViewManager;
    private loginPannel: LoginPannel; // 开始界面
    private mainPannel: MainPannel; //游戏结束界面
    /**
     * 这里初始化
     */
    private init() {
        this.loginPannel = new LoginPannel();
        this.mainPannel = new MainPannel();
        this.addChild(this.loginPannel);
        this.loginPannel.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);

    }

    public start() {
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    }
    public static getInstance(): ViewManager {
        if (ViewManager.instance == null) {
            ViewManager.instance = new ViewManager();
        }

        return ViewManager.instance;
    }

    public onChangeScene(e: ChangeSceneEvent) {
        e.obj.end();
        this.removeChildren();

        switch (e.eventType) {
            case LoginPannel.LOGIN:
                this.mainPannel.start();
                this.addChild(this.mainPannel);
                break;
            default:
                this.loginPannel.start();
                this.addChild(this.loginPannel);
                break;
        }
    }
}