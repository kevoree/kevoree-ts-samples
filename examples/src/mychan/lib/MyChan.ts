/// <reference path="../../../../kevoree-entities.d.ts" />
import KevoreeEntities = require('kevoree-entities');

class MyChan extends KevoreeEntities.AbstractChannel implements KevoreeEntities.Channel {

    start(done: (err?: Error) => void): void {
        this.log.info(this.toString(), 'start');
        done();
    }

    stop(done: (err?: Error) => void): void {
        this.log.info(this.toString(), 'stop');
        done();
    }

    onSend(fromPortPath: string, destPortPaths: string[], msg: string, callback: () => void): void {
        this.localDispatch(msg, callback);
    }

    toString(): string {
        return 'MyChan'
    }
}

export = MyChan