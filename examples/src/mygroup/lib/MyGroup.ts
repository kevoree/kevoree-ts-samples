/// <reference path="../../../../kevoree-entities.d.ts" />
import KevoreeEntities = require('kevoree-entities');

class MyGroup extends KevoreeEntities.AbstractGroup {

    start(done: (err?: Error) => void): void {
        this.log.info(this.toString(), 'start');
        done();
    }

    stop(done: (err?: Error) => void): void {
        this.log.info(this.toString(), 'stop');
        done();
    }

    toString(): string {
        return 'MyGroup'
    }
}

export = MyGroup