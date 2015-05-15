Ext.define("eazyMedia.model.Capture", {
    extend: 'eazyMedia.model.BaseModel',

    config: {
        idProperty: 'id',

        fields: [{
                name: 'primaryId'
            }, 
            {
                name: 'captureName'
            },
            { name: 'dateStamp', type: 'date', 
        },
        ],

        // data: [{
        //     primaryId: 1,
        //     CaptureName:'first ',
        //     dateStamp:'2012-01-20'
        // },
        // {
        //     primaryId: 2,
        //     CaptureName:'second ',
        //     dateStamp:'2012-01-20'

        // },
        // {
        //     primaryId: 3,
        //     CaptureName:'third',
        //     dateStamp:'2012-01-20'

        // },
        // {
        //     primaryId: 4,
        //     CaptureName:'fourth',
        //     dateStamp:'2012-01-20'

        // },
       
        // ],
        
        proxy: {
            type: 'localstorage',
            id  : 'CaptureData'
        },


        hasMany: [{
                model: 'eazyMedia.model.Media',
                name: 'Media',
                primaryKey: 'primaryId',
                foreignKey: 'captureId',
                foreignStore: 'Medias'
            },
        ]
    }
});