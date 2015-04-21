import KevoreeEntities = require('kevoree-entities');
import mraa = require('mraa')

class HeadsTempEdisonComp extends KevoreeEntities.AbstractComponent {
  timerToken: any;
  //dic_msg: KevoreeEntities.DictionaryAttribute = {};
  dic_test: boolean = false;
  dic_period: number = 500;
  analogPin0: mraa.Aio;
  start(done: (e?: Error) => void): void {

    this.log.info(this.toString(), 'start');
    this.dic_test = this.dictionary.getBoolean('test');
    this.dic_period = this.dictionary.getNumber('period')
    if (!this.dic_test) {
      //var mraa = require('mraa'); //require mraa
      this.log.info(this.toString(), 'MRAA Version: ' + mraa.getVersion());
      this.analogPin0 = new mraa.Aio(0);
      this.timerToken = setInterval(() => { var value = this.analogPin0.read(); this.log.info(this.toString(), "" + value); this.out_out("" + value) }, this.dic_period);

    } else {
      this.timerToken = setInterval(() => this.log.info(this.toString(), 'toto'), this.dic_period);
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
    this.dic_period = this.dictionary.getNumber('period')
    if (!this.dic_test) {
      this.timerToken = setInterval(() => { var value = this.analogPin0.read(); this.log.info(this.toString(), "" + value); this.out_out("" + value) }, this.dic_period);
    } else {
      this.timerToken = setInterval(() => this.log.info(this.toString(), 'toto'), this.dic_period);
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
