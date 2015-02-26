Ext.define('eazyMedia.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
       
    ],

    config: {
        autoDestroy: false,
        // layout:'card',
        // cls:'ks-basic',

        navigationBar: {
            // splitNavigation: (Ext.theme.name == "Blackberry") ? {
            //     xtype: 'toolbar',
            //     items: [{
            //         docked: 'right',
            //         xtype: 'button',
            //         iconCls: 'pencil',
            //         id: 'editButton',
            //         hidden: true
            //     },{
            //         docked: 'right',
            //         xtype: 'button',
            //         iconCls: 'check',
            //         id: 'saveButton',
            //         hidden: true
            //     }]
            // } : false,
            ui: (Ext.theme.name == "Blackberry") ? 'light' : 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'sortButton',
                    text: 'Sort',
                    align: 'right',
                    // hidden: false,
                    // hideAnimation: Ext.os.is.Android ? false : {
                    //     type: 'fadeOut',
                    //     duration: 200
                    // },
                    // showAnimation: Ext.os.is.Android ? false : {
                    //     type: 'fadeIn',
                    //     duration: 200
                    // }
                },
                {
                    xtype: 'button',
                    id: 'deleteButton',
                    // text: 'Delete',
                    iconCls:'trash',
                    iconMask:true,
                    align: 'right',
                    hidden: true,
                    // hideAnimation: Ext.os.is.Android ? false : {
                    //     type: 'fadeOut',
                    //     duration: 200
                    // },
                    // showAnimation: Ext.os.is.Android ? false : {
                    //     type: 'fadeIn',
                    //     duration: 200
                    // }
                }
               
            ]
        },

        items: [
            // { 
            //     xtype:'dataview',
            //     scrollable:'horizontal',
            //     cls:'dataview-horizontal',
            //     inline:{
            //         wrap:false
            //     },

            //     itemTpl: '<div class="myContent">'+ 
            //         '<div>Image Type: <b>{imageType}</b></div>' +
            //         '<div>Date created: <b>{dateCreated}</b></div>',
            //     store:'MediaStore'
                    
            // } ,
            // {
            //     xtype:'image',
            //     id:'img'
            // },
            {
                xtype:'panel',
                html:null,
                id:'showPanel'
            },
              
            {
                xtype:'toolbar'
            }
        ]
    }
});
