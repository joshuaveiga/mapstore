/*
 *  Copyright (C) 2007 - 2014 GeoSolutions S.A.S.
 *  http://www.geo-solutions.it
 *
 *  GPLv3 + Classpath exception
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 
/** api: (define)
 *  module = mxp.plugins
 *  class = Tool
 *  base_link = `Ext.util.Observable <http://extjs.com/deploy/dev/docs/?class=Ext.util.Observable>`_
 */
Ext.ns("mxp.plugins");

/** api: constructor
 *  .. class:: Updater(config)
 *
 *    Open a file browser that can update layers
 */
mxp.plugins.Updater = Ext.extend(mxp.plugins.Tool, {
    
    /** api: ptype = mxp_servicemanager */
    ptype: "mxp_updater",

    buttonText: "Updater",

    loginManager: null,    
    setActiveOnOutput: true,
    actionURL: null,

    /** api: method[addActions]
     */
    addActions: function() {
        
        var thisButton = new Ext.Button({
            iconCls:'update_manager_ic', 
            text: this.buttonText,
            tooltip: this.tooltipText,
            handler: function() { 
                this.addOutput(); 

               
            },
            scope: this
        });

        var actions = [thisButton];

        return mxp.plugins.Updater.superclass.addActions.apply(this, [actions]);
    },
    
    /** api: method[addOutput]
     *  :arg config: ``Object`` configuration for the ``Ext.Component`` to be
     *      added to the ``outputTarget``. Properties of this configuration
     *      will be overridden by the applications ``outputConfig`` for the
     *      tool instance.
     *  :return: ``Ext.Component`` The component added to the ``outputTarget``. 
     *
     *  Adds output to the tool's ``outputTarget``. This method is meant to be
     *  called and/or overridden by subclasses.
     */
    addOutput: function(config) {

        var login = this.target.login ? this.target.login: 
                this.loginManager && this.target.currentTools[this.loginManager] 
                ? this.target.currentTools[this.loginManager] : null;
        this.auth = this.target.auth;
        
        this.outputConfig = this.outputConfig || {};

        var uploadUrl = this.uploadUrl ? this.uploadUrl : // the upload URL is configured in th plugin
            this.target.adminUrl ? this.target.adminUrl + "mvc/fileManager/upload" : // use relative path from adminUrl
            "/opensdi2-manager/mvc/fileManager/upload"; // by default search on root opensdi-manager2
            
        var me = this;
        var pluploadPanel = {
            xtype:'pluploadpanel',
            region:'west',
            autoScroll:true,
            width:400,
            ref:'uploader',
            collapsible:true,   
            url: proxy + uploadUrl,
            multipart: true,
            auth: this.auth,
            listeners:{
                beforestart:function() {
                    var multipart_params =  pluploadPanel.multipart_params || {};
                    //TODO add multipart_params
                    pluploadPanel.multipart_params = multipart_params;
                },
                fileUploaded:function(file) {
                    var pan =this;
                    setTimeout(function(){pan.refOwner.grid.store.load()},5000);
                },
                uploadcomplete:function() {
                    var pan =this;
                    setTimeout(function(){pan.refOwner.grid.store.load()},5000);
                }
            }
        }
        Ext.apply(this.outputConfig,{   
            layout: 'border',
            xtype:'panel',
            closable: true,
            closeAction: 'close',
            iconCls: "update_manager_ic",  
            header: false,
            deferredReneder:false,
            viewConfig: {
                forceFit: true
            },
            title: this.buttonText,
            items:[
                {
                    xtype:'mxp_geobatch_consumer_grid',
                    layout:'fit',
                    autoScroll:true,
                    auth: this.auth,
                    autoWidth:true,
                    region:'center',
                    ref:'grid'
                },  
                pluploadPanel
            ]
        });

        return mxp.plugins.Updater.superclass.addOutput.apply(this, arguments);
    }
});

Ext.preg(mxp.plugins.Updater.prototype.ptype, mxp.plugins.Updater);