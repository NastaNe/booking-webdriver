/**
 * Created by nastane on 9/16/17.
 */

"use strict";

class Page {
    constructor() {
        this.title = 'My Page';
    }
    open(path) {
        browser.url('/' + path);
    }
}
module.exports = Page;