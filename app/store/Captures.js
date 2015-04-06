Ext.define('eazyMedia.store.Captures', {
    extend: 'eazyMedia.store.BaseStore',

    config: {
        // autoLoad: true,
        model: 'eazyMedia.model.Capture',

        storeId: 'Captures',
       
        // grouper: {            
        //      groupFn: function(record) {               
        //            // Send back a formatted string date                
        //            return Ext.Date.format(record.get('dateStamp'), 'Y-m-d T');            
        //      },
        //     sortProperty:'dateStamp'
        //  }


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
    // config: {
    //     model: 'eazyMedia.model.Capture',

    //     data: [{
    //         id: 1,
    //         CaptureName:'first ',
    //         date:'20'
    //     },
    //     {
    //         id: 2,
    //         CaptureName:'second ',
    //         date:'false'

    //     },
    //     {
    //         id: 3,
    //         CaptureName:'third',
    //         date:'truethat'

    //     },
    //     {
    //         id: 4,
    //         CaptureName:'fourth',
    //         date:'falsethat'

    //     },
       
    //     ]
    // }
});