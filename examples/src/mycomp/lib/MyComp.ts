/// <reference path="../../../../kevoree-entities.d.ts" />
import KevoreeEntities = require('kevoree-entities');

class MyComp extends KevoreeEntities.AbstractComponent {
    dic_msg: KevoreeEntities.DictionaryAttribute = {};

    start(done: (e?: Error) => void): void {
        this.log.info(this.toString(), 'start');
        var msg = this.dictionary.getString('msg');
        if (msg) {
            this.out_out(msg);
        }
        done();
    }

    stop(done: (err?: Error) => void): void {
        this.log.info(this.toString(), 'stop');
        done();
    }

    in_in(msg: string): void {
        this.log.info(this.toString(), 'incoming msg: '+msg);
    }

    out_out(msg: string): void {}

    toString(): string {
        return 'MyComp'
    }
}

export = MyComp