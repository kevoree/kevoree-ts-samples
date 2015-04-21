/// <reference path="../../../../kevoree-entities.d.ts" />
/// <reference path='../../../../typings/mraa/mraa.d.ts' />
import KevoreeEntities = require('kevoree-entities');

class HeadsTempEdisonComp extends KevoreeEntities.AbstractComponent {
    timerToken : any;
    //dic_msg: KevoreeEntities.DictionaryAttribute = {};
    dic_test: boolean =true;
    dic_period: number =500;
    start(done: (e?: Error) => void): void {

        this.log.info(this.toString(), 'start');
        this.dic_test  = this.dictionary.getString('test') === "true";

      if (!this.dic_test){
        var m = require('mraa'); //require mraa
        this.log.info('MRAA Version: ' + m.getVersion(), 'start');
        var analogPin0 = new m.Aio(0);
        this.timerToken = setInterval(() => this.out_out(analogPin0.read()), this.dic_period);
      }else{
        this.timerToken = setInterval(() => this.log.info(this.toString(), 'toto'), this.dic_period);
      }
        done();


    }

    stop(done: (err?: Error) => void): void {
        this.log.info(this.toString(), 'stop');
        clearInterval(this.timerToken);
        done();
    }

    in_in(msg: string): void {
        this.log.info(this.toString(), 'incoming msg: '+msg);
    }

    out_out(msg: string): void {}

    toString(): string {
        return 'HeadsTempEdisonComp'
    }
}

export = HeadsTempEdisonComp
