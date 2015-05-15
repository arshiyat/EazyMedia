/**
 * @class eazyMedia.view.DataView
 * @extends DataView
 * Description
 */
Ext.define('eazyMedia.view.CaptureDataView', {
    extend: 'Ext.dataview.DataView',
    xtype:'captureDataView',
    requires: [
        'eazyMedia.store.Captures'
    ],

    config: {

        scrollable:'horizontal',
        cls:'dataview-horizontal',
        // style: 'background:#D8D8D8',
        inline:{
            wrap:true
        },
        itemId:'grid',

        //  plugins: [
        // {
        //     xclass: "Ext.plugin.ListPaging",
        //     autoPaging: true
        // }
        // ],

        
            //         +'<div class="img"><video src="{appUrl}" controls="controls" webkit-playsinline preload="metadata" height="75" width="150"></video></div>'
        emptyText: 'No Moments Captured yet!',
        itemTpl: Ext.create('Ext.XTemplate',
            '<div class="Capture">',
                '{dateStamp:date("F j, Y")}<p></p>',
                // '<tpl if="medias.length == 0">No Moments Captured</tpl>',
                '<tpl for="medias">',
                    // '<p>{#}: </p>', 
                    '<tpl if="type == \'i\'"><img src="{url}" width="100" height="100"/></tpl>',
                    '<tpl if="type == \'v\'"><video src="{appUrl}"  height="100" width="100">cannot play</video></tpl>',

                    // '<tpl if="type == \'v\'">-<video src="{appUrl}"  height="100" width="100"/></tpl>',
                    
                   '<tpl if="type == \'a\'">',
                   '<div class="audio">',
                   '<a id="{appUrl}" type="audio">Visit</a>',
                        // '<tpl if="this.shorten(appUrl)">',
                        //     '<p>{appUrl} is a baby!</p>',
                        // '</tpl>',

                    '</div>',
                   
                    '</tpl>',

                '</tpl>',
                
            '</div>',
            {
                shorten:function()
                {
                    console.log('appUrl'+this);
                    return true;
                     // this.fireEvent('fireFormEvent',this,formValues);
                     // var media=new Media(appUrl, function(){console.log('success');}, function(e){console.log('Cannot play the audio '+e.message)});
                }
            }
        ),
        store: 'Captures',

        scrollable: {
                direction: 'vertical',
                directionLock: true
        },
         listeners: {
           // itemtap: function(dataview, index, target, record, e, eOpts) {
           //      var vals = [];
           //      alert('item tap');
           //      console.log(e.target);
           //      console.log(e.target.id);//give the url to the audio file
           //      console.log(e.target.type);//give "audio" as the type
           //      // console.log(record);
           //      // console.log(index);
           //      // console.log(target);
           //      // var strTarget=e.target;
           //      // console.log(strTarget.length);
           //      if(e.target.type=="audio")
           //      {
           //          vals[0]="a";
           //          vals[1]=e.target.id;
           //      }
           //     // console.log(eOpts);
               
           //     this.fireEvent('tapped',this,vals);
           // },
           select:function( dataview, record, eOpts)
           {
                console.log('selected');
           },
           itemtaphold: function(dataview, index, target, record, e, eOpts )
           {
            console.log('item tap hold');
           }
    }
    },

   prepareData: function(data, index, record) {
        var i;

        // console.log(record.get('id'));

        // var mediaStore = Ext.getStore('Media');
        // mediaStore.clearFilter();
        // mediaStore.filter('captureId',record.get('id'));
        // console.log('preparing the data');

        var activities = record.getAssociatedRecords('Media');


        var activityArr = [];
        for (var i=0;i<activities.length;i++) {

            activityArr.push(activities[i].getData());
        }
        data.medias = activityArr;

        // console.log(data);

        return data;
    }
});