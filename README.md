### IMPORTANT CHANGES TO THIS REPO

:warning: This repo used to be **kevoree/kevoree-js.d.ts**

:warning: This repo is now only a list of Kevoree TypeScript sample projects.  

If you want your Kevoree project to get TypeScript Definition files for the API, you just have to run `npm install kevoree-entities` because its `package.json` defines the `typings` correctly.


```ts
// sample
import { AbstractComponent, Callback } from 'kevoree-entities';

class MyComp extends AbstractComponent {
  tdef_version = 1;

  start(done: Callback): void {
    // start-up method
    done();
  }

  stop(done: Callback): void {
    // stop method
    done();
  }

  toString(): string {
    return 'MyComp';
  }
}
```

Check out [kevoree-entities.d.ts](https://github.com/kevoree/kevoree-js-entities/blob/master/kevoree-entities.d.ts) for the FULL API description


### Samples

In order to test the projects, just run:

```sh
npm i
typings install
grunt kevoree
```
It will start a Kevoree runtime for the current project.
