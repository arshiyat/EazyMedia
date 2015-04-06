Ext.define('eazyMedia.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
       
    ],

    config: {
        autoDestroy: false,

        navigationBar: {
            ui: (Ext.theme.name == "Blackberry") ? 'light' : 'sencha',
            style: 'background:#1C1C1C',

            items: [
                {
                    xtype: 'button',
                    id: 'sortButton',
                    text: 'Sort',
                    align: 'right',
                },
                {
                    xtype: 'button',
                    id: 'deleteButton',
                    iconCls:'trash',
                    iconMask:true,
                    align: 'right',
                    hidden: true,
                }
            ]
        },

        items: [
        
            { 
                xtype:'captureDataView',
                // xtype:'panel',
                // html:'fcuk'

                // scrollable:'horizontal',
                // cls:'dataview-horizontal',
                // style: 'background:#D8D8D8',
                // inline:{
                //     wrap:true
                // },

                // itemTpl: 
                // '<div class="tableThumbnail">'
                //     +'<tpl if="imageType==\'i\'">'
                //         +'<div class="img"><img src="{imgUrl}" height="75" width="75"/> </div>'
                //     +'</tpl>'
                //     +'<tpl if="imageType==\'v\'">'
                //     +'<div class="img"><video src="{currentUrl}" controls="controls" webkit-playsinline preload="metadata" height="75" width="150"></video></div>'
                //     +'</tpl>'
                // +'</div>',
                // store: 'userstore',
                // scrollable: {
                //         direction: 'vertical',
                //         directionLock: true
                // }
                    
            } ,
            // {
            //     xtype:'image',
            //     id:'img'
            // },
            // {
            //     xtype:'panel',
            //     html:'null',
            //     id:'showPanel'
            // },
              
            {
                xtype:'toolbar'
            }
        ]
    }
});
