<<<<<<< HEAD
# kevoree-js.d.ts
First try at providing **TypeScript** declaration files for **kevoree-js**

### Available declarations
- kevoree-entities (partially)
- kevoree-commons (partially)

### Examples
You can find some TypeScript usage examples in the `examples/` folder.
In order to generate the JavaScript from it, you must first install the project dependencies:

```sh
npm install
```

And then run the default grunt task:
```sh
grunt
```
The generated JavaScript sources are located in the `gen/` folder

### Test the examples
In order to tests the generated javascript, you must change your directory to `gen/src/mychan`, `gen/src/mycomp`
or `gen/src/mygroup` and run:

Only the first time:
```sh
npm install
```

Then:
```sh
grunt kevoree
```
=======
### IMPORTANT CHANGES TO THIS REPO

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
>>>>>>> rebirth
