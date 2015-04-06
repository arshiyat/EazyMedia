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

        // itemTpl: '<div>{url} is years old</div>',
        // '<div class="tableThumbnail">image...{url}'
            // +'<table style="width: 100%">'
            // +'<tr><tpl if="medias.length == 0">No Media Captured</tpl>{dateStamp}</tr>'
            // +'<tr>'
            // +'<tpl for="medias">'
            // +'<td>'
            //     +'<tpl if="type==\'i\'">'
            //         +'<div class="img"><img src="{url}" height="75" width="75"/> </div>'
            //     +'</tpl>'
            //     +'<tpl if="imageType==\'v\'">'
            //         +'<div class="img"><video src="{appUrl}" controls="controls" webkit-playsinline preload="metadata" height="75" width="150"></video></div>'
            //     +'</tpl>'
            // +'</td>'
            // +'</tpl></tr>'
        // +'</div>',
        itemTpl: [
            '<div class="Capture">',
                '<table style="width: 100%">',
                '<tr>',
                    '<td style="width: 35%"><b>{dateStamp}</b><br></td>',

                    '<td ><tpl if="medias.length == 0">No time logged</tpl><br><tpl for="medias"><div> {url}</div></tpl><br></td>',
                '</tr>',
                
                '</table>',
            '</div>'
        ],
        store: 'Captures',

        scrollable: {
                direction: 'vertical',
                directionLock: true
        }
    },

   prepareData: function(data, index, record) {
        var i;

        console.log(record.get('id'));

        // var mediaStore = Ext.getStore('Media');
        // mediaStore.clearFilter();
        // mediaStore.filter('captureId',record.get('id'));

        var activities = record.getAssociatedRecords('Media');


        var activityArr = [];
        for (var i=0;i<activities.length;i++) {

            activityArr.push(activities[i].getData());
        }
        data.medias = activityArr;

        console.log(data);

        return data;
    }
});