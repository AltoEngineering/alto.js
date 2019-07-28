import generateGuid from "../../src/utils/guid";

describe('Guid Tests', () => {

    test('guid should start at 1', () => {

        let guid = generateGuid();

        expect(guid).toEqual('alto-guid: 1');
    });

    test('guid should increment', () => {

        let guid = generateGuid();

        expect(guid).toEqual('alto-guid: 2');
    });

});
