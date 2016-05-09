import KevoreeEntities = require('kevoree-entities');
import mraa = require('../../../../typings/mraa')
import LCD  = require('../../../../typings/jsupm_i2clcd');

class HeadsLCDDisplayComp extends KevoreeEntities.AbstractComponent {
  timerToken: any;
  //dic_msg: KevoreeEntities.DictionaryAttribute = {};
  dic_test:  KevoreeEntities.DictionaryAttribute = {datatype : KevoreeEntities.DataType.BOOLEAN} ;
  myLCD: LCD.Jhd1313m1;
  test:boolean

  start(done: (e?: Error) => void): void {
    this.log.info(this.toString(), 'start');
    this.dic_test = this.dictionary.getBoolean('test',true);

    if (!this.test) {
      this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
      this.myLCD = new LCD.Jhd1313m1(6, 0x3E, 0x62);

    }
    done();
  }

  stop(done: (err?: Error) => void): void {
    this.log.info(this.toString(), 'stop');
    done();
  }

  update(done: (err?: Error) => void): void {
    this.log.info(this.toString(), 'update');
    this.test = this.dictionary.getBoolean('test',true);
    if (!this.test) {
      this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
      this.myLCD = new LCD.Jhd1313m1(6, 0x3E, 0x62);
    }

    done();
  }

  in_getValue(msg: string): void {
    this.log.info(this.toString(), 'incoming msg: ' + msg);
    if (!this.test) {
    this.myLCD.setCursor(0,1);
    this.myLCD.write(msg);
  }
  }


  toString(): string {
        return 'HeadsLCDDisplayComp'
    }
}

export = HeadsLCDDisplayComp
