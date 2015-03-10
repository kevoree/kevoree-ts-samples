var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../../../kevoree-entities.d.ts" />
var KevoreeEntities = require('kevoree-entities');
var MyComp = (function (_super) {
    __extends(MyComp, _super);
    function MyComp() {
        _super.apply(this, arguments);
        this.dic_msg = {};
    }
    MyComp.prototype.start = function (done) {
        this.log.info(this.toString(), 'start');
        var msg = this.dictionary.getString('msg');
        if (msg) {
            this.out_out(msg);
        }
        done();
    };
    MyComp.prototype.stop = function (done) {
        this.log.info(this.toString(), 'stop');
        done();
    };
    MyComp.prototype.in_in = function (msg) {
        this.log.info(this.toString(), 'incoming msg: ' + msg);
    };
    MyComp.prototype.out_out = function (msg) {
    };
    MyComp.prototype.toString = function () {
        return 'MyComp';
    };
    return MyComp;
})(KevoreeEntities.AbstractComponent);
module.exports = MyComp;
