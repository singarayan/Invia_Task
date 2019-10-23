describe ('InviaTravel Page Test', function ()
{

    var originalTimeout;
    beforeEach (function ()
    {
    originalTimeout=jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL=100000;
    });

    afterEach(function()
    {
        jasmine.DEFAULT_TIMEOUT_INTERVAL=originalTimeout;
    });
    
    function waitForElement(obj, waitTimeoutMilliseconds){
        return browser.wait(function() { return obj.isPresent(); }, waitTimeoutMilliseconds)
        .then(function(){
           return browser.wait(function() { return obj.isDisplayed(); }, waitTimeoutMilliseconds);
        });
    }
    it('QA Automation Task', function(){
       
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.ab-in-den-urlaub.de/');
        browser.sleep(2000);    
            var cookie= element(by.id('CybotCookiebotDialogBodyButtonAccept'));
            waitForElement(cookie);     
             if (cookie.isDisplayed())
             {
                 cookie.click();
             }
       

        var hotellink= element(by.xpath('.//label[@class=\'item-hotel\']'));
        waitForElement(hotellink);
        hotellink.click();
        browser.sleep(3000);        
        var location=element(by.id('base[searchTerm]'));
        location.sendKeys('Madrid');
       var locsel= element(by.xpath('(.//div[@class=\'aiduac-content external\']//a/strong[text()=\'Madrid\'])[1]'));
       waitForElement(locsel);
       locsel.click();
       browser.sleep(2000);
       var startDate = element(by.xpath('((((.//div[@class=\'_input-box _input-box-icon-set _input-box-size- _input-box-datePickerTwoInputs datepicker-startpage\']))[2])/div/div/div/input)[1]'));
       waitForElement(startDate);
       startDate.clear();
       startDate.sendKeys('25.11.2019');
       browser.sleep(3000);
       var endDate = element(by.xpath('((((.//div[@class=\'_input-box _input-box-icon-set _input-box-size- _input-box-datePickerTwoInputs datepicker-startpage\']))[2])/div/div/div/input)[2]'));
       waitForElement(endDate);
       endDate.clear();
       endDate.sendKeys('29.11.2019');
       browser.sleep(3000);
       var traveller= element(by.xpath('(.//div[@id=\'personLayer-old\'])[2]'));
       waitForElement(traveller);
       traveller.click();
       var person= element(by.xpath('(.//button[text()=\'Auswahl übernehmen\'])[4]'));
       waitForElement(person);
       person.click();
       var room= element(by.id('base[numberOfRooms]'));
       waitForElement(room);
       room.click();
       var roomselect = element(by.xpath('.//select[@id=\'base[numberOfRooms]\']/option[@value=\'1\']'));
       waitForElement(roomselect);
       roomselect.click();
       var submit = element(by.xpath('(.//input[@value=\'submit\'])[2]'));
       waitForElement(submit);
       submit.click();
       browser.sleep(3000);
       var rating= element(by.xpath('(.//span[@class=\'select-icon hc-icon-star-50\'])'));
       waitForElement(rating);
       rating.click();
       var review= element(by.xpath('(.//span[@class=\'hc-icon-smiley-5 icon\'])'));
       waitForElement(review);
       review.click();       
       browser.actions().doubleClick(element(by.xpath('(//ul[@class="interactOrder"]/li[2])'))).perform();
       browser.actions().doubleClick(element(by.xpath('(//ul[@class="interactOrder"]/li[2])'))).perform();
    });

});