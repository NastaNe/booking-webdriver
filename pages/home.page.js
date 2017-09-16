/**
 * Created by nastane on 9/16/17.
 */

"use strict";
let Page = require('./page');
class HomePage extends Page {
    get search_destination()  { return browser.element('#ss'); }
    get checkin_date()  { return browser.element('div[data-mode="checkin"]'); }
    get next_month()      { return browser.element('class*="c2-button-further"'); }
    get flash()     { return browser.element('#flash'); }

    open() {
        super.open('');
    }

    search(city) {
        this.search_destination.setValue(city);
    }

}
module.exports = HomePage;
