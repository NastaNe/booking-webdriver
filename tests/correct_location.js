/**
 * Created by nastane on 9/16/17.
 */

var expect = require('chai').expect;
var HomePage = require('../pages/home.page');


describe('Correct Location', function () {
    var homePage = new HomePage()
    it('should search for NY', function () {
        homePage.open();
        homePage.search("New York");
        expect(homePage.search_destination.getValue()).to.contain('New York');
    });
});