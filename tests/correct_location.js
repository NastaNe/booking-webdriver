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
    var checkin = new Date(1512864000000);
    var checkout = new Date(1513296000000);

    homePage = new HomePage();
    it('should search for' + {city}, function () {
        homePage.open();
        homePage.searchCity(city);
        expect(homePage.search_destination.getValue()).to.contain(city);
    });
    it('should search for concrete dates:', function () {
        // date to unix timestamp for data-id
        homePage.search(month, checkin.getTime(), checkout.getTime());
        // expect(homePage.checkin.getText()).to.contain(month);
        // expect(homePage.checkin.getText()).to.contain(checkin.getDate());
        // expect(homePage.checkout.getText()).to.contain(month);
        // expect(homePage.checkout.getText()).to.contain(checkout.getDate());
        homePage.submit.click();
    });

    resultPage = new ResultPage();

    var hotelsOnPages = 50;
    // browser.elements('.//*[@data-hotelid]', function(err,res) {
    //     hotelsOnPages = res.value.length;
    // });
    it('should contain name of city -' + city, function () {
        for (let i = 1; i < hotelsOnPages; i +=2) {
            expect(resultPage.getCoordinate(i).isVisible()).to.equal(true);
            expect(resultPage.getCoordinate(i).getText()).to.contain(city);
        }

    });
});