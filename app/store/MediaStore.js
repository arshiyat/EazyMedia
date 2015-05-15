Ext.define('eazyMedia.store.MediaStore', {
    extend: 'Ext.data.Store',
    alias: 'store.UserStore',

    requires: [
        'eazyMedia.model.Media'
    ],

    config: {
    	autoLoad: true,
        model: 'eazyMedia.model.Media',
        storeId: 'userstore',
        proxy: {
            type: 'localstorage',
            id: 'userstoreproxy'
        },
        grouper: {            
             groupFn: function(record) {               
                   // Send back a formatted string date                
                   return Ext.Date.format(record.get('dateStamp'), 'Y-m-d T');            
             },
            sortProperty:'dateStamp',
            direction: 'DESC',
         }
    }
});
