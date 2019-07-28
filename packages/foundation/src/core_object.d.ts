import KVO from "./kvo";
declare class CoreObject extends KVO {
    toJSON(): any;
    init(): void;
    static create(...args: any[]): any;
}
export default CoreObject;
