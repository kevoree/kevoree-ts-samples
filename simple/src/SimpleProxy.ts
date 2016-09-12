import {
  AbstractComponent, DictionaryParam, Callback
} from 'kevoree-entities';

class SimpleProxy extends AbstractComponent {
  /* SimpleProxy TypeDefinition version */
  static tdef_version: number = 1;

  /* SimpleProxy "myAttr" definition */
  static dic_myAttr: DictionaryParam = {
    optional: false, defaultValue: 'foo'
  };

  /* SimpleProxy "start" method hook */
  start(done: Callback): void {
    setTimeout(() => {
      this.log.info(this.toString(), `Component '${this.name}' started`);
      done();
    }, 2000);
  }

  /* SimpleProxy "stop" method hook */
  stop(done: Callback): void {
    this.log.info(this.toString(), `Component '${this.name}' stopped`);
    done();
  }

  /* SimpleProxy "onMessage" input port method */
  in_onMessage(msg: string): void {
    this.log.info(this.toString(), `Received msg: ${msg}`);
    // proxy message to output port
    this.out_proxy(msg);
  }

  /* SimpleProxy "proxy" output port method */
  out_proxy(msg: string): void {}

  /* SimpleProxy "toString" method override */
  toString(): string {
    return 'SimpleProxy';
  }
}

export = SimpleProxy;
