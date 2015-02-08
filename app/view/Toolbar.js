//Toolbar holding all the featured buttons
Ext.define('eazyMedia.view.Toolbar', {
	extend: 'Ext.Toolbar',
    xtype: 'toolbar',
    
    config: {
        docked:'bottom',
        style: 'background:black',
        
    	items:[
    	{
    		xtype:'button',
    		text:'Photo',
            flex:1,
            // style: 'background:coral',
            id:'photo'
    	},
    	{
    		xtype:'button',
    		text:'Video',
            flex:1,
            // style: 'background:gold',
            id:'video'
    	},
    	{
    		xtype:'button',
    		text:'Audio',
            flex:1,
            // style: 'background:hotpink',
            id:'audio'
    	},
    	{
    		xtype:'button',
    		text:'Note',
            flex:1,
            // style: 'background:royalblue',
            id:'note'
    	},
    	{
    		xtype:'button',
    		// text:'Settings',
            flex:1,
            iconCls:'settings',
            // style: 'background:green',
            id:'settings'

    	}
    		
    	]

    }
});