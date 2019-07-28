interface KVC {
    [key: string]: any
}

class KVO implements KVC {

    set (key: string, value: any):KVO {
        let self: KVO = this;

        if (self.get(key) === value) {
            return this;
        }

        if (self[`${key}WillChange`]) {
            self[`${key}WillChange`]()
        }

        self[key] = value;

        if (self[`${key}DidChange`]) {
            self[`${key}DidChange`]()
        }

        return self;
    }

    get (key: string):any {
        let self: KVO = this;

        return self[key]
    }

    setProperties (hash:object):KVO {
        let self: KVO = this;

        return Object.assign(self, hash);
    }

}

export default KVO;
