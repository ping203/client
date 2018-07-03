var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ChangeSceneEvent = (function (_super) {
    __extends(ChangeSceneEvent, _super);
    function ChangeSceneEvent(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        return _super.call(this, type, bubbles, cancelable) || this;
    }
    ChangeSceneEvent.CHANGE_SCENE_EVENT = "changesceneevent";
    return ChangeSceneEvent;
}(egret.Event));
__reflect(ChangeSceneEvent.prototype, "ChangeSceneEvent");
/**
 *
 * @author
 * 主要控制界面的切换
 */
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    // private userInitPannel: UserInitPannel; //创角色界面
    /**
     * 这里初始化
     */
    ViewManager.prototype.init = function () {
        this.bg = new egret.Bitmap(RES.getRes('game_bg_png'));
        this.addChild(this.bg);
        console.log(this.bg.width, this.bg.height);
        console.log(this.width, this.height);
        this.loginPannel = new LoginPannel();
        this.mainPannel = new MainPannel();
        // this.userInitPannel = new UserInitPannel();
        this.addChild(this.loginPannel);
        this.loginPannel.start();
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    };
    ViewManager.prototype.start = function () {
        this.addEventListener(ChangeSceneEvent.CHANGE_SCENE_EVENT, this.onChangeScene, this);
    };
    ViewManager.getInstance = function () {
        if (ViewManager.instance == null) {
            ViewManager.instance = new ViewManager();
        }
        return ViewManager.instance;
    };
    ViewManager.prototype.onChangeScene = function (e) {
        e.obj.end();
        this.removeChild(e.obj);
        switch (e.eventType) {
            case LoginPannel.LOGIN:
                this.mainPannel.start();
                this.addChild(this.mainPannel);
                break;
            //  case UserInitPannel.Init:
            //     this.userInitPannel.start();
            //     this.addChild(this.userInitPannel);
            //     break;
            default:
                this.addChild(this.loginPannel);
                this.loginPannel.start();
                break;
        }
    };
    return ViewManager;
}(egret.Sprite));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map