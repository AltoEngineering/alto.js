import KVO from "./kvo";

class CoreObject extends KVO {

    toJSON ():any {
        interface jsonInterface {
            [key: string]: any;
        };

        let self = this;
        let json: jsonInterface = {};

        Object.keys(self).forEach((key) => {
            if (key === 'set' || key === 'get' || key === 'guid' || this[key] instanceof Function) {return}

            json[key] = this[key];
        });

        return json
    }

    init () {

    }

    static create (...args):any {
        let instance: CoreObject = new this();
        let mixin = {};

        [...args].forEach((obj) => {
            mixin = Object.assign({}, obj, mixin);
        });

        instance = Object.assign(instance, mixin);

        instance.init();

        return instance;
    }

};

export default CoreObject;
