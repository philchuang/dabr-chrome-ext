Auto Dayton MLS
======================

What is it?
-----------
Chrome extension for making the [Dayton, OH MLS](http://dayton.rapmls.com/scripts/mgrqispi.dll?APPNAME=Dayton&PRGNAME=MLSLogin&ARGUMENT=1qpfrF1qRkQqOropCefZ1w%3D%3D&KeyRid=1) site easier to use.

Why would I want to use it?
---------------------------

The Dayton, OH MLS site is difficult to use. You can't bookmark searches, and it has a terrible query page.

So I wrote an extension for Chrome that simplifies the search to the primary fields and also allows you to create a bookmark to re-run that search.

How do I get it?
----------------

1. Save the [Auto Dayton-MLS.crx](https://github.com/philchuang/chrome-auto-dayton-mls/blob/master/crx/Auto%20DAY-MLS.crx) chrome extension file to your computer (click on the link, then click on "View Raw").
2. In Chrome, open a new tab to the extensions management page, `chrome://extensions` - *sorry, chrome blocks this from being a link, so you'll have to manually type it in or copy & paste*.
3. Drag & drop the crx file into the extensions management page.
4. Look for it in the browser actions section to the right of the address bar.

Status
------

Current Version: **v2.0**

Latest features

* Added the ability to scrape (capture & save) listings from search results. Listings can be sorted, filtered, and managed from the listings page (click on the icon in the upper-right of the search popup).
* When searching & scraping, you'll get notifications whenever a listing changes (list price change, status change, description change, new pictures). Sort by "Updated" descending to see the listings with the latest changes.

To Dos

* Add a few more search fields (perhaps make that configurable).
* Add the capability to add listings to a listings set (useful if you're a realtor with multiple clients and wanted to keep track of a different set of houses for each).
  * Associate searches with a listing set
* Eliminate need to Refresh on the listings page when scraping search results.

License
-------

The MIT License (MIT)

Copyright (c) 2014 PhilChuang.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
