Ext.define('eazyMedia.view.Settings', {
    extend: 'Ext.Panel',

    xtype: 'setttingview',

    config:{
        // layout: 'vbox',
        fullscreen: true,
        // defaultBackButtonText:'Settings',
        items:[
            {
                xtype:'toolbar',
                docked: 'top',
                // title: 'Settings',
                itemId:'settingsBar',
                items: [
                    {
                        xtype:'button',
                        // iconCls: 'arrow_left',
                        ui:'back',
                        text:'Main',
                        id:'SettingsBackbutton',
                        align: 'left'
                    },
                    {
                        xtype:'spacer'
                    }
                ]
            },
            {
                xtype:'list',
                title: 'Settings',
                height: '100%',
                id:'settingslist',
                scrollable: 'vertical',
                onItemDisclosure : false,
                itemTpl: '{title}',
                data: [
                    { title: 'Filters' },
                    { title: 'Setting' },
                    { title: 'Setting' },
                    { title: 'Setting' }
                ]
            },
        ]
    }
 });