import KevoreeEntities = require('kevoree-entities');
import mraa = require('mraa')

class HeadsTempEdisonComp extends KevoreeEntities.AbstractComponent {
  timerToken: any;
  //dic_msg: KevoreeEntities.DictionaryAttribute = {};
  dic_test:  KevoreeEntities.DictionaryAttribute = {datatype : KevoreeEntities.DataType.BOOLEAN} ;
  dic_period:  KevoreeEntities.DictionaryAttribute = {datatype : KevoreeEntities.DataType.INT,defaultValue:500} ;

  analogPin0: mraa.Aio;
  start(done: (e?: Error) => void): void {



    this.log.info(this.toString(), 'start');
    var test = this.dictionary.getBoolean('test',true);
    var period = this.dictionary.getNumber('period',500);


    if (!test) {

      //var mraa = require('mraa'); //require mraa
      this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
      this.analogPin0 = new mraa.Aio(0);
      this.timerToken = setInterval(() => { var value = this.analogPin0.read(); this.log.info(this.toString(), "" + value); this.out_out("" + value) }, period);

    } else {
      this.timerToken = setInterval(() => this.log.info(this.toString(),  ""+parseInt(""+((Math.random()*60)-20),10)), period);
    }
    done();
  }

  stop(done: (err?: Error) => void): void {
    this.log.info(this.toString(), 'stop');
    clearInterval(this.timerToken);
    done();
  }

  update(done: (err?: Error) => void): void {
    this.log.info(this.toString(), 'update');
    clearInterval(this.timerToken);
    var test = this.dictionary.getBoolean('test',true);
    var period = this.dictionary.getNumber('period')
    if (!test) {
      this.timerToken = setInterval(() => { var value = this.analogPin0.read(); this.log.info(this.toString(), "" + value); this.out_out("" + value) }, period);
    } else {
      this.timerToken = setInterval(() => this.log.info(this.toString(), ""+Math.random()), period);
    }
    done();
  }

  in_getValue(msg: string): void {
    this.log.info(this.toString(), 'incoming msg: ' + msg);
    var value = this.analogPin0.read();
    this.out_out("" + value)
  }

  out_out(msg: string): void { }

  toString(): string {
        return 'HeadsTempEdisonComp'
    }
}

export = HeadsTempEdisonComp
