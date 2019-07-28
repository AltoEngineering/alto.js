"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guid_1 = require("../../src/utils/guid");
describe('Guid Tests', () => {
    test('guid should start at 1', () => {
        let guid = guid_1.default();
        expect(guid).toEqual('alto-guid: 1');
    });
    test('guid should increment', () => {
        let guid = guid_1.default();
        expect(guid).toEqual('alto-guid: 2');
    });
});
//# sourceMappingURL=guid.test.js.map