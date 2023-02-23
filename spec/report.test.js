const Report = require('../report.js')

describe('Report can be initialised', () => {
    const report = new Report("Green, Green, Amber, Red, Green");

    test('Report can store inputed results', () => {
        expect(report.results).toEqual('Green, Green, Amber, Red, Green');
    });
});