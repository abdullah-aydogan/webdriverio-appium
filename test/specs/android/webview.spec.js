describe('Web Browser Access', () => {
    before(async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    });

    it('Access external link and verify content in the browser', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();
        await $('//*[@text="Like us on Facebook"]').click();
        await $('//android.widget.Button[@text="Close"]').click();

        await driver.getContexts();
        // await driver.switchContext('WEBVIEW_chrome');

        // const coverImg = await $('img[data-imgperflogname="profileCoverPhoto"]');
        const coverImg = await $('//android.widget.Button[@text="Cover photo of ColorNote"]');
        await expect(coverImg).toBeDisplayed();

        // await driver.switchContext("NATIVE_APP");
        await driver.back();
        await driver.back();

        await $('//*[@text="Notes"]').click();

        const addNoteText = await $('//*[@text="Add note"]');
        await expect(addNoteText).toBeDisplayed();
    });
});