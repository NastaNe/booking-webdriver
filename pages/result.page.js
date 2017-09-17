/**
 * Created by nastane on 9/16/17.
 */
"use strict";
var Page = require('./page');
class ResultPage extends Page {
    get hotels()  { return browser.element('[data-hotelid]'); }

    open() {
        super.open('');
    }

    getCoordinate(index){
        return browser.element('[data-coords](' + {index} +')');
    }

}
module.exports = ResultPage;