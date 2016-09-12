import { AbstractComponent } from 'kevoree-entities';
import { createHash } from 'crypto';

class KevsSubmit extends AbstractComponent {
  /* KevsSubmit TypeDefinition version */
  static tdef_version: number = 1;

  /* KevsSubmit "submit" input port method */
  in_submit(msg: string): void {
    const time = new Date().getTime();
    const hash = createHash('md5').update(msg).digest('hex').substr(0, 6);
    this.log.info(this.toString(), `"${this.name}" received KevScript [${hash}] at ${time}`);
    this.getKevoreeCore().submitScript(msg, (err) => {
      if (err) {
        this.log.warn(this.toString(), `"${this.name}" [${hash}] from ${time}: ${err}`);
      } else {
        this.log.info(this.toString(), `"${this.name}" [${hash}] from ${time}: success`);
      }
    });
  }

  /* KevsSubmit "toString" method override */
  toString(): string {
    return 'KevsSubmit';
  }
}

export = KevsSubmit;
