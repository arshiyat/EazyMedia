// Ext.define("eazyMedia.store.MediaStore", {
// 	extend: "Ext.data.Store",
// 	config:{
// 		model: "eazyMedia.model.Media",
// 		autoLoad: true,
// 		data:[
// 			{ id:'1',imageType:'I',srcUrl:'url',ImageUrl:'imgUrl',dateCreated:'date1'},
// 			{ id:'2',imageType:'I',srcUrl:'url',ImageUrl:'imgUrl',dateCreated:'date2'},
// 			{ id:'3',imageType:'V',srcUrl:'url',ImageUrl:'imgUrl',dateCreated:'date3'},
// 		],
// 		sorters: [{ property: 'dateCreated', direction:'DESC'}]
// 	}

// });

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
            sortProperty:'dateStamp'
         }
    }
});
