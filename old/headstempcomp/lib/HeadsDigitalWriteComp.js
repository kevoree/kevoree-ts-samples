var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var KevoreeEntities = require('kevoree-entities');
var mraa = require('mraa');
var HeadsDigitalWriteComp = (function (_super) {
    __extends(HeadsDigitalWriteComp, _super);
    function HeadsDigitalWriteComp() {
        _super.apply(this, arguments);
        this.dic_test = { datatype: KevoreeEntities.DataType.BOOLEAN };
        this.dic_pin = { datatype: KevoreeEntities.DataType.INT, defaultValue: 0 };
        this.ledState = false;
    }
    HeadsDigitalWriteComp.prototype.start = function (done) {
        this.log.info(this.toString(), 'start');
        this.dic_test = this.dictionary.getBoolean('test', true);
        this.pin = this.dictionary.getNumber('pin', 0);
        if (!this.test) {
            this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
            this.digitalPin0 = new mraa.Gpio(this.pin);
            this.digitalPin0.dir(mraa.Dir.DIR_OUT);
            this.ledState = !this.ledState;
            this.digitalPin0.write(this.ledState ? 1 : 0);
        }
        done();
    };
    HeadsDigitalWriteComp.prototype.stop = function (done) {
        this.log.info(this.toString(), 'stop');
        done();
    };
    HeadsDigitalWriteComp.prototype.update = function (done) {
        this.log.info(this.toString(), 'update');
        this.test = this.dictionary.getBoolean('test', true);
        this.pin = this.dictionary.getNumber('pin', 0);
        if (!this.test) {
            this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
            this.digitalPin0 = new mraa.Gpio(this.pin);
            this.digitalPin0.dir(mraa.Dir.DIR_OUT);
            this.ledState = !this.ledState;
            this.digitalPin0.write(this.ledState ? 1 : 0);
        }
        done();
    };
    HeadsDigitalWriteComp.prototype.in_getValue = function (msg) {
        this.log.info(this.toString(), 'incoming msg: ' + msg);
        if (!this.test) {
            if (msg === "1") {
                this.digitalPin0.write(1);
                this.ledState = true;
            }
            else if (msg === "O") {
                this.digitalPin0.write(0);
                this.ledState = true;
            }
            else {
                this.ledState = !this.ledState;
                this.digitalPin0.write(this.ledState ? 1 : 0);
            }
        }
    };
    HeadsDigitalWriteComp.prototype.toString = function () {
        return 'HeadsDigitalWriteComp';
    };
    return HeadsDigitalWriteComp;
})(KevoreeEntities.AbstractComponent);
module.exports = HeadsDigitalWriteComp;
