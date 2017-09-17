/**
 * Created by nastane on 9/16/17.
 */

"use strict";
var Page = require('./page');
class HomePage extends Page {
    get search_destination()  { return browser.element('#ss'); }
    get checkin_date()  { return browser.element('div[data-mode="checkin"]'); }
    get next_month()      { return browser.element('class*="c2-button-further"'); }
    get checkout_date()  { return browser.element('div[data-mode="checkout"]'); }
    get submit()  {return browser.element('button[data-component="search/searchbox/submit-button"]')}

    open() {
        super.open('');
    }

    month_name(month){
        return browser.element('value*="' + {month} +'"');
    }

    calendar_date(date){
        return browser.element('data-id*="'+ {date} +'"');
    }

    searchCity(city){
        this.search_destination.setValue(city);
    }

    search(month, checkin, checkout) {
        this.checkin_date.click();
        if (!this.month_name(month).isVisible){
            this.next_month.click();
        }
        this.calendar_date(checkin).click();

        this.checkout_date.click();
        if (!this.month_name(month).isVisible){
            this.next_month.click();
        }
        this.calendar_date(checkout).click();

        this.submit.click()
    }

}
module.exports = HomePage;
