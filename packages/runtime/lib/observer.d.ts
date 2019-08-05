interface StateInterface {
    [propName: string]: any;
}
export interface ObserverInterface {
    connections: any[];
    state: StateInterface;
    get: Function;
    set: Function;
    reducer: Function;
    [propName: string]: any;
}
export declare const Observer: (state: object) => ObserverInterface;
export {};
//# sourceMappingURL=observer.d.ts.map