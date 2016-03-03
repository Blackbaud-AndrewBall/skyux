
/*global describe, it, browser, beforeEach, expect, require */

describe('wait', function () {
    'use strict';

    var options = {};

    beforeEach(function (done) {
        require('../common').initWebdriverCss(browser, options, done);
    });

    it('should take wait screenshots', function (done) {
        var screenshotName = 'wait',
            pageName = options.prefix + screenshotName + '_full';
        browser
            .url('/wait/fixtures/test.full.html')
            .pause(1000)
            .webdrivercss(pageName, [
                {
                    name: screenshotName,
                    elem: '#screenshot-wait'
                }
            ], function (err, res) {
                expect(err).toBe(undefined);
                expect(res[screenshotName][0].isWithinMisMatchTolerance).toBe(true);
            }).call(done);
    });
});
