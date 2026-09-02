import ListScreen from '../../screenobjects/ios/list.screen';
import ItemScreen from '../../screenobjects/ios/item.screen';

describe('Todo Item', () => {
    before(async () => {
        await ListScreen.createListBtn.click();
        await ListScreen.listNameInput.addValue("Things to do today");
        await ListScreen.createBtn.click();
        
        await expect(await ListScreen.listNameField("Things to do today")).toBeExisting();
        await ListScreen.listNameField("Things to do today").click();
    });

    beforeEach(() => {
        console.log('BEFORE EACH HOOK!!');
    });

    after(() => {
        console.log('AFTER HOOK!!');
    });

    afterEach(() => {
        console.log('AFTER EACH HOOK!!');
    });

    it('Create a todo item', async () => {
        await ItemScreen.createItem.click();
        await ItemScreen.title.addValue("Buy Groceries");
        await ItemScreen.dueDate.click();
        await ItemScreen.getByAccessibility("Monday, August 31").click();
        await ItemScreen.secondWindow.click();
        await ItemScreen.createBtn.click();

        await expect(await ItemScreen.getByAccessibility("Buy Groceries")).toBeExisting();
        await expect(await ItemScreen.getByAccessibility("Due Tomorrow")).toBeExisting();
    });
});