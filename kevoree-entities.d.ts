/// < reference path="./kevoree-commons.d.ts" />
import KevoreeCommons = require('kevoree-commons')

/**
 * Kevoree JS library API
 */
declare module KevoreeEntities {
    export class KevoreeEntity {
        protected log: KevoreeCommons.KevoreeLogger;
        protected dictionary : Dictionary;

        start(done: (err?: Error) => void): void;
        stop(done: (err?: Error) => void): void;
        update(done: (err?: Error) => void): void;
        getName(): string;
        getPath(): string;
        getNodeName(): string;
        getModelEntity(): any;
        getNetworkInfos(nodeName: string): any;
        getKevoreeCore(): any;
        submitScript(script: string, callback?: (err?: Error) => void): void;
        isStarted(): boolean;
    }

    export class Port {
        constructor(name: any, path: any);

        getComponent(): AbstractComponent;
        getInputPortMethodName(): string;
        processSend(msg: string, callback: Function): void;
        setInputPortMethodName(name: string): void;
        getName(): string;
        getPath(): string;
        setComponent(comp: AbstractComponent): void;
        setChannel(chan: AbstractChannel): void;
    }

    export interface Dictionary {
        getString(attrName: string, defaultVal?: string): string;
        getNumber(attrName: string, defaultVal?: number): number;
        getBoolean(attrName: string, defaultVal?: boolean): boolean;
    }

    export interface DictionaryType {}

    export interface DictionaryAttribute {
        fragmentDependant?: boolean;
        defaultValue?: any;
        datatype?: DataType;
        optional?: boolean;
    }

    export class AbstractChannel extends KevoreeEntity {
        protected localDispatch(msg: string, callback?: Function): void;
    }

    // this is implemented by channels so that it forces them to implement the onSend(...) method
    // even though the pure-JS impl as an empty skeleton for it
    export interface Channel {
        onSend(fromPortPath: string, destPortPaths: string[], msg: string, callback: () => void): void;
    }

    export class AbstractComponent extends KevoreeEntity {}

    export class AbstractGroup extends KevoreeEntity {
        updateModel(model: any): void;
    }

    export class AbstractNode extends KevoreeEntity {
        processTraces(diffSeq: any, targetModel: any): Array<any>;

        startSubNode(node: any, done: (err?: Error) => void): void;
        stopSubNode(node: any, done: (err?: Error) => void): void;
        removeSubNode(node: any, done: (err?: Error) => void): void;
    }

    export enum DataType {
        STRING, DOUBLE, LONG, INT, FLOAT, SHORT, BOOLEAN
    }
}

export = KevoreeEntities;