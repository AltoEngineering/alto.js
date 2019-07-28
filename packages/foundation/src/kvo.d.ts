interface KVC {
    [key: string]: any;
}
declare class KVO implements KVC {
    set(key: string, value: any): KVO;
    get(key: string): any;
    setProperties(hash: object): KVO;
}
export default KVO;
