/**
 * Created by nastane on 9/16/17.
 */

"use strict";
var Page = require('./page');
class HomePage extends Page {
    get search_destination()  { return browser.element('#ss'); }
    get checkin_date()  { return browser.element('div[data-mode="checkin"]'); }
    get next_month()      { return browser.element(".//*[contains(@class, 'c2-button-further')]"); }
    get first_search_result() {return browser.element(".//ul[@data-list]/li[1]")}
    get checkout_date()  { return browser.element('div[data-mode="checkout"]'); }
    get submit()  {return browser.element('button[data-component="search/searchbox/submit-button"]')}
    get checkin() {return browser.element("(.//div[@data-placeholder='Check-in date'])[1]")}
    get checkout() {return browser.element("(.//div[@data-placeholder='Check-out date'])[1]")}

    open() {
        super.open('');
    }

    month_name(month){
        return browser.element('value*=' + month);
    }

    calendar_date(date){
        return browser.element("(.//td[contains(@data-id, '"+ date+"')])[1]")
    }

    calendar_date_checkout(date){
        return browser.element("(.//td[contains(@data-id, '"+ date+"')])[2]")
    }

    searchCity(city){
        this.search_destination.setValue(city);
        this.first_search_result.waitForExist(2000);
        this.first_search_result.click();
    }

    search(month, checkin, checkout) {
        this.next_month.waitForExist(3000);
        this.next_month.click();
        this.next_month.click();
        // }
        this.calendar_date(checkin).waitForVisible(3000);
        this.calendar_date(checkin).click();

        this.checkout_date.waitForVisible(200);
        this.checkout_date.click();
        this.calendar_date_checkout(checkout).waitForVisible(4000);
        this.calendar_date_checkout(checkout).click();
    }
}
module.exports = HomePage;
