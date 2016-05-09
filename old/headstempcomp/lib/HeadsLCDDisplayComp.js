var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var KevoreeEntities = require('kevoree-entities');
var mraa = require('mraa');
var LCD = require('jsupm_i2clcd');
var HeadsLCDDisplayComp = (function (_super) {
    __extends(HeadsLCDDisplayComp, _super);
    function HeadsLCDDisplayComp() {
        _super.apply(this, arguments);
        //dic_msg: KevoreeEntities.DictionaryAttribute = {};
        this.dic_test = { datatype: KevoreeEntities.DataType.BOOLEAN };
    }
    HeadsLCDDisplayComp.prototype.start = function (done) {
        this.log.info(this.toString(), 'start');
        this.dic_test = this.dictionary.getBoolean('test', true);
        if (!this.test) {
            this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
            this.myLCD = new LCD.Jhd1313m1(6, 0x3E, 0x62);
        }
        done();
    };
    HeadsLCDDisplayComp.prototype.stop = function (done) {
        this.log.info(this.toString(), 'stop');
        done();
    };
    HeadsLCDDisplayComp.prototype.update = function (done) {
        this.log.info(this.toString(), 'update');
        this.test = this.dictionary.getBoolean('test', true);
        if (!this.test) {
            this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
            this.myLCD = new LCD.Jhd1313m1(6, 0x3E, 0x62);
        }
        done();
    };
    HeadsLCDDisplayComp.prototype.in_getValue = function (msg) {
        this.log.info(this.toString(), 'incoming msg: ' + msg);
        if (!this.test) {
            this.myLCD.setCursor(0, 1);
            this.myLCD.write(msg);
        }
    };
    HeadsLCDDisplayComp.prototype.toString = function () {
        return 'HeadsLCDDisplayComp';
    };
    return HeadsLCDDisplayComp;
})(KevoreeEntities.AbstractComponent);
module.exports = HeadsLCDDisplayComp;
