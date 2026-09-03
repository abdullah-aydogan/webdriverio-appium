describe('iOS Webview', () => {
    it('Working with dynamic webview', async () => {
        await $('~Webview').click();

        await driver.waitUntil(async () => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, { timeout: 30000, timeoutMsg: 'Timed out waiting for another context' });

        const contexts = await driver.getContexts();
        await driver.switchContext(contexts[1]);

        const subtitleTxt = await $('.hero__subtitle');
        await expect(subtitleTxt).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

        await driver.switchContext('NATIVE_APP');
        await $('~Home').click();

        const webdriverTxt = await $('//*[@name="WEBDRIVER"]');
        await expect(webdriverTxt).toBeDisplayed();
    });
});