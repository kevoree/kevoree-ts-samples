var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../../../kevoree-entities.d.ts" />
var KevoreeEntities = require('kevoree-entities');
var MyChan = (function (_super) {
    __extends(MyChan, _super);
    function MyChan() {
        _super.apply(this, arguments);
    }
    MyChan.prototype.start = function (done) {
        this.log.info(this.toString(), 'start');
        done();
    };
    MyChan.prototype.stop = function (done) {
        this.log.info(this.toString(), 'stop');
        done();
    };
    MyChan.prototype.onSend = function (fromPortPath, destPortPaths, msg, callback) {
        this.localDispatch(msg, callback);
    };
    MyChan.prototype.toString = function () {
        return 'MyChan';
    };
    return MyChan;
})(KevoreeEntities.AbstractChannel);
module.exports = MyChan;
