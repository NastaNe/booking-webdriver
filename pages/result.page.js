/**
 * Created by nastane on 9/16/17.
 */
"use strict";
var Page = require('./page');
class ResultPage extends Page {
    get hotels()  { return browser.element('.//*[@data-hotelid]'); }

    open() {
        super.open('');
    }

    getCoordinate(index){
        browser.element('(.//*[@data-coords])[' + index +']').waitForExist(2000);
        // browser.moveToObject('(.//*[@data-coords])[' + index +']');
        return browser.element('(.//*[@data-coords])[' + index +']');
    }

}
module.exports = ResultPage;