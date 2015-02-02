Ext.define('eazyMedia.controller.Controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            // main: 'mainview',

            photoButton: '#photo',
            videoButton:'#video',
            audioButton:'#audio',
            noteButton:'#note',

            // contacts: 'contacts',
            // showContact: 'contact-show',
            // editContact: 'contact-edit',
            // saveButton: '#saveButton'
        },

        control: {
            // main: {
            //     push: 'onMainPush',
            //     pop: 'onMainPop'
            // },
            photoButton: {
                tap: 'onContactEdit'
            },
            videoButton: {
                tap: 'onVideo'
            },
            audioButton: {
                tap: 'onAudio'
            },
            noteButton: {
                tap: 'onNote'
            },
            // contacts: {
            //     itemtap: 'onContactSelect'
            // },
            // saveButton: {
            //     tap: 'onContactSave'
            // },
            // editContact: {
            //     change: 'onContactChange'
            // }
        }
    },

    onMainPush: function(view, item) {
        // var editButton = this.getEditButton();

        // if (item.xtype == "contact-show") {
        //     this.getContacts().deselectAll();

        //     this.showEditButton();
        // } else {
        //     this.hideEditButton();
        // }
    },

    onMainPop: function(view, item) {
        // if (item.xtype == "contact-edit") {
        //     this.showEditButton();
        // } else {
        //     this.hideEditButton();
        // }
    },

    onContactSelect: function(list, index, node, record) {
        var editButton = this.getEditButton();

        if (!this.showContact) {
            this.showContact = Ext.create('AddressBook.view.contact.Show');
        }

        // Bind the record onto the show contact view
        this.showContact.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.showContact);
    },

    onContactEdit: function() {
        alert('gottcha');
        // if (!this.editContact) {
        //     this.editContact = Ext.create('AddressBook.view.contact.Edit');
        // }

        // // Bind the record onto the edit contact view
        // this.editContact.setRecord(this.getShowContact().getRecord());

        // this.getMain().push(this.editContact);

        // if (Ext.theme.name == "Blackberry") {
        //     this.showSaveButton();
        // }
    },

    onContactChange: function() {
        this.showSaveButton();
    },

    onContactSave: function() {
        var record = this.getEditContact().saveRecord();

        this.getShowContact().updateRecord(record);

        this.getMain().pop();
    },

    showEditButton: function() {
        var editButton = this.getEditButton();

        if (!editButton.isHidden()) {
            return;
        }

        this.hideSaveButton();

        editButton.show();
    },

    hideEditButton: function() {
        var editButton = this.getEditButton();

        if (editButton.isHidden()) {
            return;
        }

        editButton.hide();
    },

    showSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (!saveButton.isHidden()) {
            return;
        }

        saveButton.show();
    },

    hideSaveButton: function() {
        var saveButton = this.getSaveButton();

        if (saveButton.isHidden()) {
            return;
        }

        saveButton.hide();
    }
});
