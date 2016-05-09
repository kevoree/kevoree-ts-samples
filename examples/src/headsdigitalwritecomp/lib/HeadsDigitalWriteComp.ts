import KevoreeEntities = require('kevoree-entities');
import mraa = require('../../../../typings/mraa')

class HeadsDigitalWriteComp extends KevoreeEntities.AbstractComponent {
  timerToken: any;
  //dic_msg: KevoreeEntities.DictionaryAttribute = {};
  dic_test:  KevoreeEntities.DictionaryAttribute = {datatype : KevoreeEntities.DataType.BOOLEAN} ;
  dic_pin:  KevoreeEntities.DictionaryAttribute = {datatype : KevoreeEntities.DataType.INT,defaultValue:0} ;



  digitalPin0: mraa.Gpio;

  test:boolean
  pin:number

  ledState:Boolean = false; //Boolean to hold the state of Led

  start(done: (e?: Error) => void): void {
    this.log.info(this.toString(), 'start');
    this.dic_test = this.dictionary.getBoolean('test',true);
    this.pin = this.dictionary.getNumber('pin',0);

    if (!this.test) {
      this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
      this.digitalPin0 = new mraa.Gpio(this.pin);
      this.digitalPin0.dir(mraa.Dir.DIR_OUT);
      this.ledState = !this.ledState;
      this.digitalPin0.write(this.ledState?1:0);

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
    this.pin = this.dictionary.getNumber('pin',0);

    if (!this.test) {
      this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
      this.digitalPin0 = new mraa.Gpio(this.pin);
      this.digitalPin0.dir(mraa.Dir.DIR_OUT);
      this.ledState = !this.ledState;
      this.digitalPin0.write(this.ledState?1:0);
    }

    done();
  }

  in_getValue(msg: string): void {
    this.log.info(this.toString(), 'incoming msg: ' + msg);
    if (!this.test) {
      if (msg ==="1"){
        this.digitalPin0.write(1); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
        this.ledState = true;

      }else if(msg ==="O"){
        this.digitalPin0.write(0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
        this.ledState = true;

      }else{
       this.ledState = !this.ledState;
       this.digitalPin0.write(this.ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
      }

    }
  }


  toString(): string {
        return 'HeadsDigitalWriteComp'
    }
}

export = HeadsDigitalWriteComp
