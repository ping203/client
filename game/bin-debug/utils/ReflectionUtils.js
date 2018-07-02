var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ReflectionUtils = (function () {
    function ReflectionUtils() {
    }
    ReflectionUtils.GetInstanceByClassName = function (clsName, args) {
        var instance;
        try {
            instance = Object.create(window[clsName].prototype);
            instance.constructor.apply(instance);
        }
        catch (error) {
            console.log(error);
        }
        return instance;
    };
    return ReflectionUtils;
}());
__reflect(ReflectionUtils.prototype, "ReflectionUtils");
//# sourceMappingURL=ReflectionUtils.js.map