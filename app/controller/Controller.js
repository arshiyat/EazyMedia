//Now directory for the day is created.. get the 

Ext.define('eazyMedia.controller.Controller', {
    extend: 'Ext.app.Controller',

    config: {

        eazyMediaStore:  null,

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
            img:'#img',




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
    fileSystem:'ppp',
    mediaDirectoryEntry:null,


    init:function()
    {
        //called when the app intializes, first called before launch

        //create the directories to store the media data

        // this.getMainDirectoryCreated();


    },

    launch:function()
    {
        //called when the app launches after the init function
        // alert('launch');

        //setting the store
        this.setEazyMediaStore(Ext.getStore('mediaStore')); 

        this.storeMedia('uuuhppps');


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

        var me=this;

        alert('dir entry'+this.mediaDirectoryEntry.fullPath);

        try{
            navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                                    destinationType: Camera.DestinationType.FILE_URI,
                                    saveToPhotoAlbum: false,
                                    sourceType: Camera.PictureSourceType.CAMERA,
                                    allowEdit: false });
             
            // Called when a photo is successfully retrieved
            function onPhotoURISuccess(imageURI) {
                // me.updateCameraImages(imageURI);
            };
             
            // Called if something bad happens.
            function onFail(message) {
                console.log('Failed because: ' + message);
            };
        }
        catch(e)
        {
            alert('exception'+e.toString());
        }

        //on click of the data view item
        // try{
        //     if (!this.view) {
        //         this.view = Ext.create('eazyMedia.view.ViewMedia');
        //     }
        //     this.getMain().push(this.view);
        // }
        // catch(e)
        // {
        //     alert('exception caught with '+e.message);
        // }

    },

    // Handler for the video button tap event
    onVideo: function() {

        var me=this;
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

        var me=this;
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
    getGeneratedId:function()
    {
        var now = new Date();

        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        return noteId;
    },

    getRandomInt:function(min,max)
    {
        return Math.floor(Math.random()*(max-min+1))+min;
    },


    readFilePath:function(url)
    {
        // url='file://'+url;
        alert('reading the file');
        try{
                    window.requestFileSystem(window.TEMPORARY, 1024*1024, function(fs) {
                        alert('file system'+url);
              fs.root.getFile(url, {create: false,exclusive:false}, function(fileEntry) {
                alert('got the file');
                // fileEntry.remove(function() {
                //   console.log('File removed.');
                // }, errorHandler);

              }, errorHandler);
            }, errorHandler);

                    var errorHandler=function errorHandler(e) {
                  var msg = '';

                  switch (e.code) {
                    case FileError.QUOTA_EXCEEDED_ERR:
                      msg = 'QUOTA_EXCEEDED_ERR';
                      break;
                    case FileError.NOT_FOUND_ERR:
                      msg = 'NOT_FOUND_ERR';
                      break;
                    case FileError.SECURITY_ERR:
                      msg = 'SECURITY_ERR';
                      break;
                    case FileError.INVALID_MODIFICATION_ERR:
                      msg = 'INVALID_MODIFICATION_ERR';
                      break;
                    case FileError.INVALID_STATE_ERR:
                      msg = 'INVALID_STATE_ERR';
                      break;
                    default:
                      msg = 'Unknown Error';
                      break;
                  };

                  alert('Error: ' + msg);}



        }
        catch(e)
        {
            alert('exception caught'+e.toString);
        }
    },

    updateCameraImages:function(imageURI)
    {
        alert('in updateCameraImages'+imageURI);
        alert(''+this.mediaDirectoryEntry.fullPath);
        try{
        var url;
        me=this;
        
        var mediaName=this.getGeneratedId();
        mediaName=mediaName+'.jpg';


         window.resolveLocalFileSystemURI(imageURI, function(fileEntry){
            alert('finally'+fileEntry.toURL());
            me.getImg().setSrc(url); 
             fileEntry.moveTo(me.mediaDirectoryEntry, mediaName,function(entry){

                    alert('moved image url'+entry.toURL());
                    me.getImg().setSrc(entry.toURL());
                }, function(e1){alert('erere');});
              }, function(e1){alert('erere');});


         // var gotImageURI=function(fileEntry)
         // {
         //    alert('got the fle finally...with path '+fileEntry.toURL());
         // };

         // var errorHandler=function(e)
         // {
         //    alert('caught the error');
         // };
     }
     catch(e)
     {
        alert('exception caught'+e.toString());
     }
    },

    errorHandler:function(e)
    {
        var msg = '';

        switch (e.code) {
            case FileError.QUOTA_EXCEEDED_ERR:
              msg = 'QUOTA_EXCEEDED_ERR';
              break;
            case FileError.NOT_FOUND_ERR:
              msg = 'NOT_FOUND_ERR';
              break;
            case FileError.SECURITY_ERR:
              msg = 'SECURITY_ERR';
              break;
            case FileError.INVALID_MODIFICATION_ERR:
              msg = 'INVALID_MODIFICATION_ERR';
              break;
            case FileError.INVALID_STATE_ERR:
              msg = 'INVALID_STATE_ERR';
              break;
            default:
              msg = 'Unknown Error';
              break;
        };

        alert('Error: ' + msg);
    },

    errorOnDirectory:function(e)
    {
        //Create the main directory EazyMedia
        alert('Directory not found ...create the directory');
    },

    createDirectory:function(root)
    {
        var me=this;
        try{
            alert('creting directot with root'+root.fullPath);
            root.getDirectory('EazyMedia', {create: true},function(dirEntry)
            {
                alert('creating eazyMedia directory with url '+dirEntry.fullPath);
                me.createSubDirectory(dirEntry);
            },function(e)
                {
                    me.errorHandler(e);
                }
            );
        }
        catch(e)
        {
            alert('Exception caught'+e.toString());
        }
    },

     createSubDirectory:function(dirEntry)
    {
        var me=this;
        var today=new Date();

        var todayString=''+today.getDate()+today.getMonth()+today.getFullYear();
        alert('in creating sub directories'+todayString);

        dirEntry.getDirectory(todayString, {},function(dirEntry)
        {
            alert('dir exists now start'+dirEntry.fullPath);
            me.mediaDirectoryEntry=dirEntry;
        },function(e){
            if(e.code==FileError.NOT_FOUND_ERR)
            {
                dirEntry.getDirectory(todayString, {create: true},function(dirEntry)
                {
                    alert('sub directory created now we are ready to start ');
                    me.mediaDirectoryEntry=dirEntry;
                },function(e){me.errorHandler(e);});
            }
        });
    },

    getMainDirectoryCreated:function()
    {
        var me=this;
        alert('file sss'+this.fileSystem);
        var fsystem=this.fileSystem;

        try{
            alert('finding the directory');
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs)
            {
                fsystem=fs.root;
                alert('found fs'+fsystem.fullPath);

                fs.root.getDirectory('EazyMedia', {}, function(dirEntry) {
                    alert('Directory found  of eazyMedia is found then call the method to create the new sub directory');
                        me.createSubDirectory(dirEntry);

                    },function(e)
                        {
                            if(e.code==FileError.NOT_FOUND_ERR)
                            {
                                 me.createDirectory(fsystem);
                            }
                         }
                );
            },function(e){me.errorHandler(e);});
        }
        catch(e)
        {
            alert('Exception '+e.toString());
        }
    },


    storeMedia:function(url)
    {
        //url is the media source url
        var now=new Date();

          // this.getStore().load();
            // this.getStore().removeAll();

            // this.getStore().sync();

            // this.getStore().load();


        try{
            //get the store
            var store = this.getEazyMediaStore();

            alert('found store '+store);

           // store.add({ id:'1', title: 'Audio'});//, srcUrl: 'resources/icons/audio.jpeg', mediaUrl: 'path', dateStamp: now });


            //load the localStorage store
            store.load();


            // if ((store.getCount()) == 0) {
            //     alert('store is empty');
            // }

           // store.add({ id:1, mediaType: 'Audio'});//, srcUrl: 'resources/icons/audio.jpeg', mediaUrl: 'path', dateStamp: now });
           // store.add({ id:2, mediaType: 'Audio', srcUrl: 'resources/icons/audio.jpeg', mediaUrl: 'path', dateStamp: now });

            // store.sync();


            alert('after added the count is '+store.getCount());
           


        }
        catch(e)
        {
            alert('Exception caught'+e.toString());
        }





    }
});
