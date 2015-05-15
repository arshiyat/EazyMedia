//Now directory for the day is created.. get the 

Ext.define('eazyMedia.controller.Controller', {
    extend: 'Ext.app.Controller',

    config: {

        captureStore:  null,
        mediaStore:null,

        refs: {
            main: 'mainview',
            view:'view',
            settingsview:'setttingview',
            captureDataView:'captureDataView',
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
            showPanel:'#showPanel',
            // captureDataView:'#captureDataView',


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
            sortButton:{
                tap:'onSortButton'
            },
            "captureDataView#grid": {
                tapped: 'method'
            }
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
    fileSystem:null,
    mediaDirectoryEntry:null,
    eazyDirectoryEntry:null,
    currentCapturedId:-1,

    method: function(formpanel, formValues) {
        console.log(formValues);

        if(formValues[0]==="a")
        {
            alert('play the audio');
        }

        

        //if the link and the tag is know then create the media object and play the media
    },

    init:function()
    {
        //called when the app intializes, first called before launch

    },

    launch:function()
    {
        try{
            //setting the stores
            this.setCaptureStore(Ext.getStore('Captures'));
            this.setMediaStore(Ext.getStore('Medias'));

            // this.getCaptureStore().setAutoLoad(true);
            this.getCaptureStore().setAutoSync(true);

            // this.getMediaStore().setAutoLoad(true);
            this.getMediaStore().setAutoSync(true);

            this.getStoreVals();

            // this.clearStore();

            //create the current date directory if it does not exists. 

            this.getMainDirectoryCreated();

            //video/audio path modifications for video tag to work

            this.getVideoAudioPath();

        }
        catch(e)
        {
            alert('Exception caught'+e.toString());
        }
    },

    getVideoAudioPath:function()
    {
        try{
            var store=this.getMediaStore();
            var url,me=this;


            store.each(function(record,id){
                if(record.get('type')==='v' || record.get('type')==='a')
                {
                      url=record.get('url');  
                      window.resolveLocalFileSystemURL(url, function(fileEntry){
                          // alert('changing url to get appurl'+fileEntry.toURL());
                          record.set('appUrl',fileEntry.toURL());

                          console.log('output..'+fileEntry.toURL());
                          me.getStoreVals();

                        }, function(e){alert('exception in resolve');});
                }
            });

            // store.sync();
             // store.each(function(record,id){
             //    alert(record.get('currentUrl'));
             // });


        }
        catch(e)
        {
            alert('exception caught'+e.toString);
        }

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


    onSortButton:function()
    {

    alert('in sort');
    try{
        
        var userStore = this.getStore();
        alert(userStore);

        // alert(userStore.getAt(0).get('imageType')+'fdfsd'+userStore.getAt(userStore.getCount()).get('srcUrl'));//.get('srcUrl'));
        
        // var htmlStr="";
        // // alert('src is ' +this.getImg().getSrc());
    
        // if(userStore.getAt(0).get('imageType')==='i')
        // {
        //     // this.getImg().setSrc(null);
        //     // this.getImg().setSrc(userStore.getAt(0).get('srcUrl'));
        //     htmlStr="<img src='"+userStore.getAt(0).get('srcUrl')+"' width='200' height='200'>";
        //     // this.getShowPanel().setHtml(htmlStr);
        // }
        // else if(userStore.getAt(0).get('imageType')==='v')
        // {

        // }
        var count=userStore.getCount();
        // alert(count);

        var url=userStore.getAt(6).get('srcUrl');

        // alert(url);
        var me=this;



         window.resolveLocalFileSystemURI(url, function(fileEntry){
            // alert('finally'+fileEntry.toURL());
            var html='<video width="320" height="240" controls src="'+fileEntry.toURL()+'"/>';
            alert(html);

            me.getShowPanel().setHtml(html);

            // me.getImg().setSrc(url); 
             // fileEntry.moveTo(me.mediaDirectoryEntry, mediaName,function(entry){

             //        alert('moved image url'+entry.toURL());
             //        if(captureType=='v')
             //        {
             //            alert(entry.toInternalURL());
             //            me.storeMedia1(entry.toInternalURL(),entry.toURL(),captureType);

             //        }
             //        else
             //        {
             //            me.storeMedia(entry.toInternalURL(),captureType);
             //        }

             //         // me.getImg().setSrc(entry.toInternalURL());
                   
             //    }, function(e1){me.errorHandler(e);});
              }, function(e){alert('exception in resolve');});

        // on click of the data view item
        
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

    // Handler for the photo button tap event
    onPhoto: function() {

        var me=this;

        try{
            navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 20,targetWidth: 600, targetHeight: 600,encodingType: 0,
                                    destinationType: Camera.DestinationType.FILE_URI,
                                    saveToPhotoAlbum: false,
                                    sourceType: Camera.PictureSourceType.CAMERA,
                                    allowEdit: false });
             
            // Called when a photo is successfully retrieved
            function onPhotoURISuccess(imageURI) {
                me.moveAndRenameMedia(imageURI,'i');
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

        

    },

    // Handler for the video button tap event
    onVideo: function() {

        var me=this;
        // capture callback
        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                // alert('path is '+ path);
                me.moveAndRenameMedia('file:///'+path,'v');
                // do something interesting with the file
            }
        };

        // capture error callback
        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start video capture
        navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:1});

    },

    // Handler for the audio button tap event
    onAudio: function() {

        var me=this;
        // capture callback
        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                // alert(path);
                me.moveAndRenameMedia('file:///'+path,'a');
                // do something interesting with the file
            }
        };

        // capture error callback
        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        // start audio capture
        navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:1});
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

        var id = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        return id;
    },

    getRandomInt:function(min,max)
    {
        return Math.floor(Math.random()*(max-min+1))+min;
    },

    moveAndRenameMedia:function(URI,captureType)
    {
        try{
        //In case the directory for current date is not created then this creats sub directory matching current date
        this.createSubDirectory(this.eazyDirectoryEntry);

        // alert('in moveAndRenameMedia'+this.mediaDirectoryEntry.fullPath);
        
        var url;
        me=this;
        
        var mediaName=this.getGeneratedId();
        var type;

        switch(captureType)
        {
            case 'i': type='.jpg';
                    break;

            case 'v': type='.mov';
                    break;

            case 'a': type='.wav';
                    break;

        }

        mediaName=mediaName+type;

        window.resolveLocalFileSystemURI(URI, function(fileEntry){
            // alert('finally'+fileEntry.toURL());
            // me.getImg().setSrc(url); 
             fileEntry.moveTo(me.mediaDirectoryEntry, mediaName,function(entry){
                    // alert('moved image url'+entry.toURL());
                    me.storeMedia(entry.toInternalURL(),entry.toURL(),captureType);
                     // me.getImg().setSrc(entry.toInternalURL());
                   
                }, function(e1){me.errorHandler(e);});
              }, function(e){me.errorHandler(e);});
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

    createDirectory:function(root)
    {
        var me=this;
        try{
            // alert('creting directot with root'+root.fullPath);
            root.getDirectory('EazyMedia', {create: true},function(dirEntry)
            {
                // alert('creating eazyMedia directory with url '+dirEntry.fullPath);
                me.eazyDirectoryEntry=dirEntry;
                me.createSubDirectory(dirEntry);
            },function(e)
                {
                    me.errorHandler(e);
                }
            );
        }
        catch(e)
        {
            console.log('Exception caught'+e.toString());
        }
    },

     createSubDirectory:function(dirEntry)
    {
        try{
        var me=this;
        var today=new Date();

        var todayString=''+today.getDate()+today.getMonth()+today.getFullYear();
        // alert('in creating sub directories'+todayString);

        dirEntry.getDirectory(todayString, {},function(dirEntry)
        {
            // alert('dir exists now start'+dirEntry.fullPath);
            me.mediaDirectoryEntry=dirEntry;
        },function(e){
            if(e.code==FileError.NOT_FOUND_ERR)
            {
                dirEntry.getDirectory(todayString, {create: true},function(dirEntry)
                {
                    // alert('sub directory created now we are ready to start ');
                    me.mediaDirectoryEntry=dirEntry;
                },function(e){me.errorHandler(e);});
            }
        });
        }
        catch(e)
        {
            console.log('Exception '+e.toString());
        }
    },

    getMainDirectoryCreated:function()
    {
        var me=this;
        // var fsystem=this.fileSystem;
        var fsystem;

        try{
            // alert('finding the directory');
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs)
            {
                fsystem=fs.root;
                // alert('found fs'+fsystem.fullPath);

                fs.root.getDirectory('EazyMedia', {}, function(dirEntry) {
                    // alert('Directory found  of eazyMedia is found then call the method to create the new sub directory');
                        me.eazyDirectoryEntry=dirEntry;
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


    storeMedia:function(url,currentUrl,mediaType)
    {
        //url is the media source url
       
        try{
            

            var now=new Date();

            var mediaStore = this.getMediaStore();

            var counter=mediaStore.getCount()+1,captureCounter=0;

            this.generateCaptureId();

            if(this.getCaptureStore().getCount==0)
            {
                throw(new Exception('Capture model missing'));
            }
            
            captureCounter=this.getCaptureStore().getCount();
            // alert('mediaId'+counter);
            // alert('captureId '+captureCounter+'type '+mediaType);
        
            mediaStore.add({mediaId:counter,captureId:captureCounter,type:mediaType,url:url,appUrl:currentUrl,dateStamp:now});

            this.getCaptureStore().getData().getAt(0).set('captureName','..');

            // this.getCaptureStore().load(this.getCaptureStore().getCount());
            // this.getCaptureDataView().refresh();

            // alert('store count is '+mediaStore.getCount());
              
        }
        catch(e)
        {
            alert('Exception caught'+e.toString());
        }
    },

    //called when the sub directory for that date is created. We make an entry to captures store as and when that is done.
    generateCaptureId:function()
    {

        try{
        // alert('generating.. capture id ');
        var store=this.getCaptureStore();
        var count=store.getCount();

        // this.currentCapturedId=count;

        var today=new Date();
        if(count==0)
        {
            this.currentCapturedId=count+1;

            store.add({primaryId:this.currentCapturedId,captureName:'blah blah',dateStamp:today});  

        }
        else{

            var dateStamp=store.getAt(0).get('dateStamp');

            var date1=Ext.Date.format(today,'Y-m-d');
            var date2=Ext.Date.format(dateStamp,'Y-m-d');
            if(date1!=date2)
            {

                this.currentCapturedId=count+1;

                console.log('today capture reco/rd is not created. creating now..'+this.currentCapturedId);

                store.add({primaryId:this.currentCapturedId,captureName:'blah blah',dateStamp:today});  
            }
        }
        }
        catch(e)
        {
            console.log('Exception '+e.toString());
        }


        // alert('Capture store generated with capture id'+this.currentCapturedId+'count is '+store.getCount());
    },

    

    clearStore:function()
    {
        this.getMediaStore().removeAll();
        this.getCaptureStore().removeAll();


        alert('Stores are cleared media->'+this.getMediaStore().getCount()+' capture-->'+this.getCaptureStore().getCount());
    },

    getStoreVals: function()
    {
        var mediaStore=this.getMediaStore();
        var captureStore=this.getCaptureStore();

        //traverse the media store
        console.log('values in media store');
        mediaStore.each(function(record,id){
            console.info(record);
        });

        console.log('values in capture store');
        captureStore.each(function(record,id){
            console.info(record);
        });

    }
});
