Ext.define('eazyMedia.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'main',
    requires: [
    ],
    config: {
        navigationBar: {
           
            // ui:  'sencha',
            style: 'background:black',
            items: [
               
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Sort',
                    align: 'right',
                    hidden: false,
                    style: 'background:green',
                }
            ]
        },
         
        items:[
            {
                xtype:'toolbar'    
            }

        ]
        
    }
});
