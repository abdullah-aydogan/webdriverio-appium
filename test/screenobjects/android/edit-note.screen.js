import AddNoteScreen from "./add-note.screen";

class EditNoteScreen {

    get firstNote() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    }

    get moreIcon() {
        return $('~More');
    }

    get deleteIcon() {
        return $('//*[@text="Delete"]');
    }

    get navIcon() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashCanItem() {
        return $('//*[@text="Trash Can"]');
    }

    async skipTutorial() {
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed();
    }

    async addAndSaveNote(noteHeading, noteBody) {
        await AddNoteScreen.addNoteTxt.click();
        await AddNoteScreen.textOption.click();
        
        await expect(AddNoteScreen.textEditing).toBeDisplayed();
        
        await AddNoteScreen.noteHeading.addValue(noteHeading);
        await AddNoteScreen.noteBody.addValue(noteBody);
        
        await AddNoteScreen.saveNote();
        
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toHaveText(noteBody);
    }
}

export default new EditNoteScreen();