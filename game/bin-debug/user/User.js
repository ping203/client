var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var User = (function () {
    function User() {
        this.init();
    }
    User.getInstance = function () {
        if (User.instance == null) {
            User.instance = new User();
        }
        return User.instance;
    };
    User.prototype.init = function () {
        this.generals = new Map;
        ProtoProxy.getInstance().addEventListener(ServiceEvent.CMSG_CNOTIFYDATACHANGE, this.update, this);
    };
    User.prototype.updateUser = function (nickName, userID, firstGeneralID) {
        this.nickName = nickName;
        this.userID = userID;
        this.firstGeneralID = firstGeneralID;
    };
    User.prototype.getByPkID = function (pkid) {
        if (!this.generals.has(pkid)) {
            return null;
        }
        return this.generals.get(pkid);
    };
    User.prototype.updateGeneral = function (generals) {
        for (var i in generals) {
            var general = generals[i];
            var g = this.getByPkID(general.pkiID);
            if (g == null) {
                var item = new General(general);
                this.generals.set(general.pkID, general);
            }
            else {
                g.setInfo(general);
            }
        }
    };
    User.prototype.update = function (e) {
        console.log("user update:", this);
        if (e.msg.changes.length == 0) {
            return;
        }
        for (var item in e.msg.changes) {
            switch (e.msg.changes[item]) {
                case 1:
                    var user = e.msg.user;
                    this.updateUser(user.nickname, user.userID, user.fightGeneralID);
                case 2:
                    var generals = e.msg.generals;
                    this.updateGeneral(generals);
            }
        }
    };
    User.prototype.getFightGeneral = function () {
        return this.getByPkID(this.firstGeneralID);
    };
    User.prototype.getName = function () {
        return this.nickName;
    };
    User.prototype.clear = function () {
        User.instance = null;
    };
    return User;
}());
__reflect(User.prototype, "User");
//# sourceMappingURL=User.js.map