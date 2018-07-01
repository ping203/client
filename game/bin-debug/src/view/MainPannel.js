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
var MainPannel = (function (_super) {
    __extends(MainPannel, _super);
    function MainPannel() {
        var _this = _super.call(this) || this;
        _this.timeNumbers = 20; //计时的秒数
        _this.init();
        return _this;
    }
    //开启监听
    MainPannel.prototype.start = function () {
        this.timeNumbers = 20;
        this.timer.start();
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
    };
    //初始化
    MainPannel.prototype.init = function () {
        // this.bg = new egret.Bitmap(RES.getRes('gamePlayingBgImage'));
        // this.addChild(this.bg);
        this.timeTitle = new egret.TextField();
        this.timeTitle.text = "剩余时间：" + this.timeNumbers + " 秒";
        this.timeTitle.x = (480 - this.timeTitle.width) * 0.5;
        this.timeTitle.y = 400;
        this.addChild(this.timeTitle);
        this.timer = new egret.Timer(1000, this.timeNumbers);
    };
    MainPannel.prototype.onTimer = function (e) {
        this.timeNumbers -= 1;
        this.timeTitle.text = "剩余时间：" + this.timeNumbers + " 秒";
    };
    MainPannel.prototype.onTimerComplete = function (e) {
        this.dispatchEventWith(MainPannel.CHANGEPANEL);
    };
    //结束界面，释放监听
    MainPannel.prototype.end = function () {
        if (this.timer.hasEventListener(egret.TimerEvent.TIMER))
            this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimer, this);
        if (this.timer.hasEventListener(egret.TimerEvent.TIMER_COMPLETE))
            this.timer.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.onTimerComplete, this);
        this.timer.stop();
        this.timer.reset();
    };
    MainPannel.CHANGEPANEL = "mainPannel";
    return MainPannel;
}(egret.Sprite));
__reflect(MainPannel.prototype, "MainPannel");
//# sourceMappingURL=MainPannel.js.map