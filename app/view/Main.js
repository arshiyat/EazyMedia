Ext.define('eazyMedia.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
       
    ],

    config: {
        autoDestroy: false,

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
            { 
                xtype: 'container',
                id:'photo',
            },
            {
                xtype:'toolbar'
            }
        ]
    }
});
