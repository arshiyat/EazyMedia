Ext.define("eazyMedia.model.Media", {
  extend: 'eazyMedia.model.BaseModel',

  config: {
    idProperty: 'id',

    fields: [{
        name: 'mediaId'
      }, {
        name: 'captureId'
      }, {
        name: 'url'
      }, {
        name: 'appUrl'
      }, {
        name: 'type'
      }
    ],

    proxy: {
            type: 'localstorage',
            id  : 'Media'
        },

    belongsTo: [{
        model: 'eazyMedia.model.Capture',
        name: 'Capture',
        primaryKey: 'mediaiId',
        foreignKey: 'captureId',
        foreignStore: 'Capture'
      }
    ]
  }
});
