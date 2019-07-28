let ArrayController = () => {

    let arrayController = {

        data: [],

        connections: [],

        reducer: (controller: object, payload) => {
            // now update the current state of controller.data w/ the merged data
            return Object.assign({}, controller, {data: payload});
        },

        set(key:string, value:any) {
            // update self //
            if (this[`${key}WillChange`]) {
                this[`${key}WillChange`]()
            }

            this.data = this.reducer(this.data, {data :  value})

            if (this[`${key}DidChange`]) {
                this[`${key}DidChange`]()
            }

            // update connections //
            this.connections.forEach(connection => connection(this.data));

            return this.data.data;
        }

    };

};

export default ArrayController;
