var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../../../kevoree-entities.d.ts" />
var KevoreeEntities = require('kevoree-entities');
var MyGroup = (function (_super) {
    __extends(MyGroup, _super);
    function MyGroup() {
        _super.apply(this, arguments);
    }
    MyGroup.prototype.start = function (done) {
        this.log.info(this.toString(), 'start');
        done();
    };
    MyGroup.prototype.stop = function (done) {
        this.log.info(this.toString(), 'stop');
        done();
    };
    MyGroup.prototype.toString = function () {
        return 'MyGroup';
    };
    return MyGroup;
})(KevoreeEntities.AbstractGroup);
module.exports = MyGroup;
