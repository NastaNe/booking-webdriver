/**
 * Created by nastane on 9/16/17.
 */

var expect = require('chai').expect;
var HomePage = require('../pages/home.page');
var ResultPage = require('../pages/result.page');


describe('Correct Location', function () {
    var homePage;
    var resultPage;

    var city = "New York";
    var month = "December";
    var checkin = new Date(2017, 12, 10);
    var checkout = new Date(2017, 12, 15);

    before(function() {
        homePage = new HomePage();
    });
    it('should search for' + {city}, function () {
        homePage.open();
        homePage.searchCity(city);
        expect(homePage.search_destination.getValue()).to.contain(city);
    });
    it('should search for concrete dates:', function () {
        homePage.open();
        // date to unix timestamp for data-id
        homePage.search(month, checkin.getTime(), checkout.getTime());
        expect(homePage.checkin.getValue()).to.contain(month);
        expect(homePage.checkin.getValue()).to.contain(checkin.getDate());
        expect(homePage.checkout.getValue()).to.contain(month);
        expect(homePage.checkout.getValue()).to.contain(checkout.getDate());
    });

    resultPage = new ResultPage();

    let hotelsOnPages = resultPage.hotels.value.length;
    hotelsOnPages.forEach(function(d) {
        it('should contain name of city -' + {city}, function () {
            resultPage.open();
            resultPage.getCoordinate(d).waitForExist(200);
            expect(resultPage.getCoordinate(d).getValue).to.contain(city);

        });
    });
});