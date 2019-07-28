import KVO from "../src/kvo";

describe('KVO Tests', () => {

    test('KVO: Instance of KVO should be key value coding complient', () => {
        let kvo = new KVO();

        kvo.set('firstName', 'Remy');
        expect(kvo.get('firstName')).toBe('Remy');

        kvo.set('lastName', 'Eubanks');
        expect(kvo.get('lastName')).toBe('Eubanks');

        kvo.set('isPet', true);
        expect(kvo.get('isPet')).toBe(true);

    });

});
