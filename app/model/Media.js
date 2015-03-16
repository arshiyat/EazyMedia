// Ext.define('eazyMedia.model.Media', {
//     extend: 'Ext.data.Model',

//     config: {
//         fields: [
//             {name: 'id', type: 'string'},
//             {name: 'imageType', type: 'string'},
//             {name: 'srcUrl', type: 'string'},
//             {name: 'imgUrl', type: 'string'},
//             {name: 'dateCreated', type: 'date'}
//         ],

//         proxy: {
//           type: 'localstorage',
//           id  : 'Media'
//         }
//     }
// });

Ext.define('eazyMedia.model.Media',{
     extend: 'Ext.data.Model',
     alias: 'model.User',
 
       config: {
           fields: [
            {name: 'mediaId', type: 'int'},
            {name: 'imageType', type: 'string'},
            {name: 'srcUrl', type: 'string'},
            {name: 'imgUrl', type: 'string'},
            {name: 'currentUrl', type: 'string'},
            {name: 'dateStamp', type: 'date'}
           ]
     }
});
