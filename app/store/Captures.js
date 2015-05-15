Ext.define('eazyMedia.store.Captures', {
    extend: 'eazyMedia.store.BaseStore',

    config: {
        // autoLoad: true,
        model: 'eazyMedia.model.Capture',
        autoLoad:true,

        storeId: 'Captures',
       
        grouper: {            
             groupFn: function(record) {               
                   // Send back a formatted string date                
                   return Ext.Date.format(record.get('dateStamp'), 'Y-m-d T');            
             },
            sortProperty:'dateStamp',
            direction: 'DESC',

         }


        // data: [{
        //     primaryId: 1,
        //     CaptureName:'first ',
        //     dateStamp:'2013-05-23'
        // },
        // {
        //     primaryId: 2,
        //     CaptureName:'second ',
        //     dateStamp:'2013-05-23'

        // },
        // {
        //     primaryId: 3,
        //     CaptureName:'third',
        //     dateStamp:'truethat'

        // },
        // {
        //     primaryId: 4,
        //     CaptureName:'fourth',
        //     dateStamp:'2015-03-31'

        // },
       
        // ]
    }
});