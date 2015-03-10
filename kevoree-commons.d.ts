/**
 * Kevoree JS commons API
 */
declare module KevoreeCommons {
    export class KevoreeLogger {
        info(tag: string, msg?: string): void;
        error(tag: string, msg?: string): void;
        warn(tag: string, msg?: string): void;
        debug(tag: string, msg?: string): void;
        setLevel(level: number): void;
        setTag(tag: string): void;
    }
}

export = KevoreeCommons;