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
