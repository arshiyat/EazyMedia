Ext.define('eazyMedia.store.Medias', {
	extend: 'eazyMedia.store.BaseStore',

	requires: [
        'eazyMedia.model.Media'
    ],

	config: {
    	autoLoad: true,
		model: 'eazyMedia.model.Media',

		storeId: 'Medias',
       
	}
});