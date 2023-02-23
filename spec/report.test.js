const Report = require('../report.js')

describe('Report can be initialised', () => {
    const report = new Report("Green, Green, Amber, Red, Green");

    test('Report can store inputed results', () => {
        expect(report.results).toEqual('Green, Green, Amber, Red, Green');
    });
});

describe('Results can be filtered', () => {
    const report = new Report("Green, Green, Green");

    test('A result of Green can be filtered', () => {
        expect(report.filterResults()).toContain("Green: 3");
    });

});