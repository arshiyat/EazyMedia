Ext.define('eazyMedia.controller.Controller', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            view:'view',
            settingsview:'setttingview',
            filterview:'filterview',
            photoButton: '#photo',
            videoButton:'#video',
            audioButton:'#audio',
            noteButton:'#note',
            settingsButton:'#settings',
            sortButton:'#sortButton',
            deleteButton:'#deleteButton',
            settingsList:'#settingslist',
            SettingsBackbutton:'#SettingsBackbutton',
            filterBackbutton:'#filterBackbutton',




            // contacts: 'contacts',
            // showContact: 'contact-show',
            // editContact: 'contact-edit',
            // saveButton: '#saveButton'
        },

        control: {
            main: {
                push:'onMainPush',
                pop: 'onMainPop'
            },
            photoButton: {
                tap: 'onPhoto'
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
            settingsButton: {
                tap: 'onSettings'
            },
            settingsList: {
                itemtap: 'onSettingsSelect'
            },

            SettingsBackbutton:{
                tap:'onSettingBackButton'
            },
            filterBackbutton:{
                tap:'onFilterBackButton'
            },
            // saveButton: {
            //     tap: 'onContactSave'
            // },
            // editContact: {
            //     change: 'onContactChange'
            // }
        }
    },

    SlideLeftTransition: {type:'slide',direction:'left'},
    SlideRightTransition:{type:'slide',direction:'right'},

    init:function()
    {
        //called when the app intializes, first called before launch
        // alert('init');
    },

    launch:function()
    {
        //called when the app launches after the init function
        // alert('launch');
    },

    onMainPush: function(view, item) {
        var sortButton = this.getSortButton();

        if (item.xtype == "view") {
            // this.getContacts().deselectAll();
            this.hideSortButton();
            this.showDeleteButton();

        } else {
            this.showSortButton();
            this.hideDeleteButton();

        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "view") {
            this.showSortButton();
            this.hideDeleteButton();

        } else {
            this.hideEditButton();
            this.showDeleteButton();

        }
    },

    onSettingsSelect: function(list, index, node, record) {
        // var editButton = this.getEditButton();

        if (!this.filterview) {
            this.filterview = Ext.create('eazyMedia.view.Filters');
        }

        var filterview=this.getFilterview();
        Ext.Viewport.animateActiveItem(filterview,this.SlideLeftTransition);
    },

    onFilterBackButton:function()
    {
        if (!this.settingsview) {
                this.settingsview = Ext.create('eazyMedia.view.Settings');
        }

        var settingsView=this.getSettingsview();
        Ext.Viewport.animateActiveItem(settingsView,this.SlideRightTransition);
    },

    onSettingBackButton:function()
    {
            if (!this.main) {
                this.main = Ext.create('eazyMedia.view.Main');
            }

            var main=this.getMain();
            Ext.Viewport.animateActiveItem(main,this.SlideRightTransition);
    },


    // Handler for the photo button tap event
    onPhoto: function() {

        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;

                alert('captured path is '+path);
                // do something interesting with the file
            }
        }

        // capture error callback
        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start image capture
        navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});

        

        try{
            if (!this.view) {
                this.view = Ext.create('eazyMedia.view.ViewMedia');
            }
            this.getMain().push(this.view);
        }
        catch(e)
        {
            alert('exception caught with '+e.message);
        }

    },

    // Handler for the video button tap event
    onVideo: function() {
        // capture callback
        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                // do something interesting with the file
            }
        };

        // capture error callback
        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});

        // alert('handler for the video');
    },

    // Handler for the audio button tap event
    onAudio: function() {

        // capture callback
        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                // do something interesting with the file
            }
        };

        // capture error callback
        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
            // alert('handler for the audio');
    },
    
    // Handler for the note button tap event
    onNote: function() {
        alert('handler for the note');
    },
    
    // Handler for the settings button tap event
    onSettings: function() {
        // alert('handler for the settings');
         if (!this.settingsview) {
            this.settingsview = Ext.create('eazyMedia.view.Settings');
        }

        var settingsview=this.getSettingsview();
        Ext.Viewport.animateActiveItem(settingsview,this.SlideLeftTransition);
    },

    onContactChange: function() {
        this.showSaveButton();
    },

    onContactSave: function() {
        var record = this.getEditContact().saveRecord();

        this.getShowContact().updateRecord(record);

        this.getMain().pop();
    },

    showSortButton: function() {
        var sortButton = this.getSortButton();

        if (!sortButton.isHidden()) {
            return;
        }

        // this.hideSaveButton();

        sortButton.show();
    },

    hideSortButton: function() {
        var sortButton = this.getSortButton();

        if (sortButton.isHidden()) {
            return;
        }

        sortButton.hide();
    },

    showDeleteButton: function() {
        var deleteButton = this.getDeleteButton();

        if (!deleteButton.isHidden()) {
            return;
        }
        // alert(deleteButton.isHidden());
        deleteButton.show();
        // alert(deleteButton.isHidden());

    },

    hideDeleteButton: function() {
        var deleteButton = this.getDeleteButton();

        if (deleteButton.isHidden()) {
            return;
        }

        deleteButton.hide();
    },

    //helper functions....
    generateId:function()
    {
        var now = new Date();

        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        return noteId;
    },

    getRandomInt:function(min,max)
    {
        return Math.floor(Math.random()*(max-min+1))+min;
    }
});
