var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Individual = (function () {
    function Individual(msg) {
    }
    Individual.prototype.getIndividual = function () {
        return this.msg;
    };
    return Individual;
}());
__reflect(Individual.prototype, "Individual");
var General = (function () {
    function General(info) {
        this.setInfo(info);
    }
    General.prototype.getInfo = function () {
        return this.info;
    };
    General.prototype.setInfo = function (info) {
        this.info = info;
    };
    return General;
}());
__reflect(General.prototype, "General");
//# sourceMappingURL=General.js.map