describe('Todo Item', () => {
    it('Create a todo item', async () => {
        await $('//*[@name="Create list"]').click();
        await $('//*[@value="List Name"]').addValue("Things to do today");
        await $('~Create').click();

        await expect(await $('~Things to do today')).toBeExisting();

        await $('~Things to do today').click();
        await $("//*[@name='Create item']").click();
        await $('//*[@value="Title"]').addValue("Buy Groceries");
        await $("//*[@value='Due']").click();
        await $("~Monday, August 31").click();
        await $('~Done').click();
        await $('~Create').click();

        await expect($("~Buy Groceries")).toBeExisting();
        await expect($("~Due Tomorrow")).toBeExisting();
    });
});