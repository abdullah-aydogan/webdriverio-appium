import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe('Delete Note', () => {
    before(async () => {
        await EditNoteScreen.skipTutorial();
        await EditNoteScreen.addAndSaveNote("TV shows", "Friends\nBreakingBad\nPeakyBlinders");
        await driver.back();
    });


    it('Delete a note & check the note in trash can', async () => {
        const note = await EditNoteScreen.firstNote.getText();

        await EditNoteScreen.firstNote.click();
        await EditNoteScreen.moreIcon.click();
        await EditNoteScreen.deleteIcon.click();

        await driver.acceptAlert();

        await EditNoteScreen.navIcon.click();
        await EditNoteScreen.trashCanItem.click();

        const trashCanItem = await EditNoteScreen.firstNote;

        await expect(trashCanItem).toHaveText(note);
    });
});