interface PayloadInterface {

    [propName: string]: any;

};

interface StateInterface {

    [propName: string]: any;

};

export interface ObserverInterface {

    connections: any[];

    state: StateInterface;

    get: Function;

    set: Function;

    reducer: Function;

    [propName: string]: any;

};

export const Observer = function (state: object):ObserverInterface {

    let observer: ObserverInterface = {

        connections: [],

        state,

        reducer: (o: ObserverInterface, payload: PayloadInterface):ObserverInterface => {
            let nextState = Object.assign({}, o.state, payload);
            return Object.assign({}, o, {state: nextState});
        },

        set(key:string, value:any) {
            // update self //
            let nextState = this.reducer(this, {[key] : value});
            // update connections //
            this.connections.forEach(connection => connection(nextState));
            return nextState.state;
        },

        get() {
            debugger;
        }

    };


    return observer;

};
