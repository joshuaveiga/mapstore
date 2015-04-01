/**
 *  Copyright (C) 2007 - 2015 GeoSolutions S.A.S.
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
/**
 * @author Lorenzo Natali
 */

/**
 * -@requires plugins/Tool.js
 */

/** api: (define)
 *  module = gxp.plugins
 *  class = CapacityData
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("gxp.plugins.he");

/** api: constructor
 *  .. class:: CapacityData(config)
 *
 *    Plugin for adding HE Capacity Data Module to a :class:`gxp.Viewer`.
 */
gxp.plugins.he.CapacityData = Ext.extend(gxp.plugins.Tool, {
    /** api: ptype = he_capacity_data */
    ptype: "he_capacity_data",
    /** i18n **/
    titleText: 'Flows & Statistics',
    types: [
        ["", '-All Types-'],
        //["'B'", "Bidirectional"],
        ["'D'", "Delivery"],
        //["'I'", "Injection"],
        ["'R'", "Receipt"],
        ["'T'", "Throughput"],
        ["'U'", "Unknown"]
        //,["'W'", "Withdrawal"]
    ],
    layerName: "gascapacity:test_capacity_point",
    
    /** api: Configuration of the layer to display on the map 
             and to filter with the select FERC 
    **/
    pipelineLayerConfig: {
        title: "Some fancy title",
        name: "GCD_Users_Z0:GCD_INTER_PL",
        layers: "GCD_Users_Z0:GCD_INTER_PL",
        styles: "NG_PIPE" ,
        transparent: true,
        displayInLayerSwitcher: false
    },
    
    /* Status of the results grid panel (if any)*/
    resultsGridStatus: "collapsed",

    /*
     *  :arg config: ``Object``
     */
    addOutput: function (config) {
        var source = this.target.layerSources[this.source];
        var today = new Date();
        var form = {
            xtype: 'form',
            labelAlign: 'top',
            title: this.titleText,
            layout: "form",
            minWidth: 180,
            autoScroll: true,
            frame: true,
            items: [{
                xtype: 'fieldset',
                title: 'Query by:',
                anchor: '100%',
                ref: 'queryBy',
                collapsible: false,
                forceLayout: true, //needed to force to read values from this fieldset
                collapsed: false,
                items: [{
                    xtype: 'radiogroup',
                    anchor: '100%',
                    hideLabel: true,
                    autoHeight: true,
                    checkboxToggle: true,
                    ref: 'outputType',
                    defaultType: 'radio', // each item will be a radio button
                    columns: 1,
                    items: [{
                        boxLabel: 'Pipeline/Storage Facility',
                        name: 'queryby',
                        inputValue: 'pipeline',
                        checked: true
                    }, {
                        boxLabel: 'State/County',
                        name: 'queryby',
                        hidden: true,
                        inputValue: 'state'
                    }, {
                        boxLabel: 'Point Name/Number',
                        name: 'queryby',
                        inputValue: 'point'
                    }, {
                        boxLabel: 'Rextag\'s Map Book Points',
                        name: 'queryby',
                        inputValue: 'book',
                        hidden: true,
                        disabled: true
                    }],
                    listeners: {
                        change: function (c, checked) {
                            var value = c.getValue().inputValue;
                            var refineFieldset = this.refOwner.refOwner.refine;
                            refineFieldset.items.each(function (item) {
                                if (item.filter) {
                                    item.setVisible(value == item.filter);
                                }

                            });

                            var values = this.refOwner.refOwner.getForm().getValues();
                            //show aggregate
                            var showAggregate = value != 'point';
                            //var summarize = this.refOwner.refOwner.summarize;
                            //summarize.separator.setVisible(showAggregate);
                            //summarize.aggregate.setVisible(showAggregate);
                            if(!showAggregate){
                                // value == 'point'
                                this.refOwner.refOwner.buttonsContainer.btnLookup.setDisabled(false);
                                this.refOwner.refOwner.buttonsContainer.show_general_statistics_btn.hide();
                                this.refOwner.refOwner.refine.pointtype.hide();
                            }else{

                                this.refOwner.refOwner.refine.pointtype.show();
                                this.refOwner.refOwner.buttonsContainer.show_general_statistics_btn.show();
                                if(!values.pipeline){
                                    this.refOwner.refOwner.buttonsContainer.btnLookup.setDisabled(true);
                                    this.refOwner.refOwner.buttonsContainer.show_general_statistics_btn.setDisabled(true);
                                }else{
                                    this.refOwner.refOwner.buttonsContainer.show_general_statistics_btn.setDisabled(false);
                                }
                            }
                        }

                    }
                }, {
                    xtype: 'box',
                    hidden: true,
                    autoEl: {
                        tag: 'i',
                        html: 'Query By Book Points Coming Soon',
                        style: 'font-size:9px;font-style:italic;font-family: Tahoma;'
                    }
                }]
            }, {
                xtype: 'fieldset',
                title: 'Refine Query By:',
                anchor: '100%',
                ref: 'refine',
                collapsible: false,
                forceLayout: true, //needed to force to read values from this fieldset
                collapsed: false,

                items: [{
                    //form data
                    filter: 'pipeline',
                    ref: 'pipeline',

                    hiddenName: 'pipeline',

                    //view
                    emptyText: 'Select An Operator Name',
                    fieldLabel: ' Operator Name',
                    anchor: '100%',
                    xtype: 'gxp_searchboxcombo',

                    //behiviour
                    avoidSelectEvent: true,
                    hideTrigger: false,
                    triggerAction: 'all',
                    forceSelected: true,
                    clearOnFocus: false,
                    allowBlank: false,
                    typeAhead: false,

                    //data
                    url: this.geoServerUrl,
                    typeName: this.pipelineNameLayer,
                    mapPanel: this.target.mapPanel,
                    displayField: 'pl_PipelineName',
                    valueField: 'pl_FERC',
                    sortBy: 'pl_PipelineName',
                    queriableAttributes: [
                        "pl_PipelineName"
                    ],
                    tpl: "<tpl for=\".\"><div class=\"search-item\">{pl_PipelineName}</div></tpl>",
                    recordModel: [{
                        name: 'id',
                        mapping: 'id'
                    }, {
                        name: "pl_PipelineName",
                        mapping: "properties.pl_PipelineName"
                    }, {
                        name: "pl_FERC",
                        mapping: "properties.pl_FERC"
                    }],
                    listeners: {
                        scope: this,
                        select: function (combo, record, index) {
                            combo.refOwner.refOwner.buttonsContainer.btnLookup.setDisabled(false);
                            combo.refOwner.refOwner.buttonsContainer.show_general_statistics_btn.setDisabled(false);
                            
                            var cql_filter_string = "FERC = '"+record.get('pl_FERC')+"'";
                                
                            // add or update layer
                            if(!this.pipelineLayer){
                                
                                var layerProps = Ext.apply(this.pipelineLayerConfig, {
                                    vendorParams: {
                                        cql_filter: cql_filter_string
                                    }
                                });

                                // Create and add layer to map
                                var source = this.target.tools.addlayer.checkLayerSource(this.geoServerUrl);
                                var layerRecord = source.createLayerRecord(layerProps);
                                this.pipelineLayer = layerRecord.getLayer();
                                this.target.mapPanel.layers.add([layerRecord]);
                                
                            }else{
                                // merge params to layer
                                this.pipelineLayer.vendorParams = Ext.apply(this.pipelineLayer.vendorParams,{
                                    cql_filter: cql_filter_string
                                });

                                this.pipelineLayer.mergeNewParams({
                                    cql_filter: cql_filter_string
                                });
                            }
                        }
                    }
                }, {
                    //TODO state/country selection (2 columns)
                    layout: 'column',
                    ref: 'state',
                    //allow to hide/show
                    filter: 'state',
                    hidden: true,
                    items: [{
                        columnWidth: .5,
                        layout: 'form',
                        items: [{
                            xtype: 'gxp_searchboxcombo',
                            fieldLabel: 'State',
                            ref: '../state',
                            name: 'state',
                            anchor: '100%',
                            mapPanel: this.target.mapPanel,
                            //behiviour
                            avoidSelectEvent: true,
                            hideTrigger: false,
                            triggerAction: 'all',
                            forceSelected: true,
                            clearOnFocus: false,
                            allowBlank: false,
                            typeAhead: false,

                            //data
                            url: this.geoServerUrl,
                            typeName: this.statesLayer,
                            mapPanel: this.target.mapPanel,
                            displayField: 'st_StateName',
                            valueField: 'st_FIPS',
                            sortBy: 'st_StateName',
                            queriableAttributes: [
                                "st_StateName", "st_StateAbbreviation"
                            ],
                            tpl: "<tpl for=\".\"><div class=\"search-item\">{st_StateName}({st_StateAbbreviation})</div></tpl>",
                            recordModel: [{
                                name: 'id',
                                mapping: 'id'
                            }, {
                                name: "st_StateName",
                                mapping: "properties.st_StateName"
                            }, {
                                name: "st_StateAbbreviation",
                                mapping: "properties.st_StateAbbreviation"
                            }, {
                                name: "st_FIPS",
                                mapping: "properties.st_FIPS"
                            }],

                            listeners: {
                                select: {
                                    fn: function (combo, record) {
                                        var country = this.refOwner.country;
                                        country.clearValue();
                                        country.setDisabled(false);
                                        country.vendorParams = {
                                            //cql_filter: "cnty_StateFIPS = '" + record.get(combo.valueField) + "'"
                                            viewparams : this.createViewParams()
                                        };
                                    },
                                    scope: this
                                }
                            }
                        }]
                    }, {
                        columnWidth: .5,
                        layout: 'form',
                        fieldLabel: 'Country',
                        items: [{
                            xtype: 'gxp_searchboxcombo',
                            ref: '../country',
                            fieldLabel: 'Country',
                            displayField: 'cnty_CountyName',
                            valueField: 'id',
                            disabled: true,
                            mapPanel: this.target.mapPanel,
                            //behiviour
                            avoidSelectEvent: true,
                            hideTrigger: false,
                            triggerAction: 'all',
                            forceSelected: true,
                            clearOnFocus: false,
                            allowBlank: false,
                            typeAhead: false,

                            url: this.geoServerUrl,
                            typeName: this.countryLayer,
                            valueField: 'cnty_FIPS',
                            sortBy: 'cnty_CountyName',
                            queriableAttributes: [
                                "cnty_CountyName", "cnty_FIPS"
                            ],
                            tpl: "<tpl for=\".\"><div class=\"search-item\">{cnty_CountyName}</div></tpl>",
                            recordModel: [{
                                name: "id",
                                mapping: "id"
                            }, {
                                name: "geometry",
                                mapping: "geometry"
                            }, {
                                name: "cnty_CountyName",
                                mapping: "properties.cnty_CountyName"
                            }, {
                                name: "cnty_StateFIPS",
                                mapping: "properties.cnty_StateFIPS"
                            }, {
                                name: "cnty_FIPS",
                                mapping: "properties.cnty_FIPS"
                            }],
                            name: 'country',
                            anchor: '100%'
                        }]
                    }]

                }, {
                    xtype: 'textfield',
                    ref: 'point',
                    filter: 'point',
                    name: 'point',
                    fieldLabel: 'Enter Part of the Point\'s Name or DRN',
                    hidden: true

                }, {
                    layout: 'column',
                    items: [{
                        columnWidth: .5,
                        layout: 'form',
                        items: [{
                            xtype: 'datefield',
                            value: today,
                            fieldLabel: 'From Date',
                            name: 'start',
                            anchor: '100%'
                        }]
                    }, {
                        columnWidth: .5,
                        layout: 'form',
                        items: [{
                            xtype: 'datefield',
                            value: today,
                            fieldLabel: 'To Date',
                            name: 'end',
                            anchor: '100%'
                        }]
                    }]
                }, {
                    xtype: 'combo',
                    ref: 'pointtype',
                    displayField: 'label',
                    fieldLabel: 'Point Type',
                    valueField: 'id',
                    hiddenName:'ptype',
                    anchor: '100%',
                    autoLoad: true,
                    mode: 'local',
                    forceSelected: true,
                    value: "",
                    allowBlank: false,
                    triggerAction: 'all',
                    //TODO load from db and use this to add the -- All types -- record :
                    // http://www.sencha.com/forum/showthread.php?228925-Add-blank-entry-to-combobox&p=850001&viewfull=1#post850001
                    emptyText: 'Select a Type...',
                    selectOnFocus: true,
                    store: {
                        xtype: 'arraystore',
                        fields: ['id', 'label'],
                        data: this.types

                    }
                }]
            }, {
                xtype: 'fieldset',
                title: 'Summarize Results By:',
                anchor: '100%',
                ref: 'summarize',
                collapsible: false,
                forceLayout: true, //needed to force to read values from this fieldset
                collapsed: false,
                items: [{
                    xtype: 'radiogroup',
                    anchor: '100%',
                    hideLabel: true,
                    autoHeight: true,
                    checkboxToggle: true,
                    name: 'outputType',
                    ref: 'outputType',
                    defaultType: 'radio', // each item will be a radio button
                    columns: 1,
                    items: [{
                        boxLabel: 'Totals',
                        name: 'aggregation',
                        inputValue: 'sum',
                        checked: true
                    }, {
                        boxLabel: 'Averages',
                        name: 'aggregation',
                        inputValue: 'avg',
                    }]
                    //SEPARATOR
                }
                /*
                , {
                    xtype: 'box',
                    ref: 'separator',
                    autoEl: {
                        tag: 'hr'

                    }
                }, {
                    xtype: 'checkbox',
                    ref: 'aggregate',
                    boxLabel: 'Also Group Aggregates',
                    name: 'aggregate',
                    inputValue: 3
                }
                */
                ]
            },{
                layout: 'hbox',
                ref: 'buttonsContainer',
                pack: 'end',
                items:[{
                    ref: 'btnLookup',
                    xtype: 'button',
                    text: 'Look Up',
                    iconCls: 'gxp-icon-find',
                    disabled: true,
                    scope: this,
                    handler: this.lookupButtonHandler
                },{
                    xtype:'spacer',
                    flex:1
                },{
                    xtype:'button',
                    ref:'show_general_statistics_btn',
                    text: 'Pipeline Statistics',
                    iconCls:'gxp-icon-csvexport-single',
                    disabled:true,
                    handler: function(){
                        var values = this.refOwner.refOwner.getForm().getValues();
                        var pipelineId = values.pipeline;
                        var combobox = this.refOwner.refOwner.getForm().findField('pipeline');
                        if(!( pipelineId )){
                            Ext.Msg.show({
                               msg: 'Please select a pipeline in the "Refine Query" box',
                               buttons: Ext.Msg.OK,
                               animEl: 'elId',
                               icon: Ext.MessageBox.INFO
                            });
                            return;
                        }
                        var pipelineName = combobox.getRawValue();
                        // record.get("pl_PipelineName");
                        //var record = combobox.findRecord(combobox.valueField, pipelineId);
                        
                        new Ext.Window({
                            title: pipelineName +' - Pipeline Statistics',
                            layout: 'border',
                            autoScroll: false,
                            border:false,
                            height: Math.min(Ext.getBody().getViewSize().height,785),
                            maximizable:true,
                            width: 900,
                            items:[{
                                xtype: 'he_pipeline_statistics',
                                region:'center',
                                ferc:pipelineId,
                                border:false
                            }]
                        }).show();

                    }
                }]
            }],
            buttons: []
        };
        config = Ext.apply(form, config || {});
        

        this.output = gxp.plugins.he.CapacityData.superclass.addOutput.call(this, config);
        
        // Event handlers to react to tab changes
        this.output.on('tabhide', function(){
            if(this.pipelineLayer){
                this.pipelineLayer.setVisibility(false);
            }
        }, this);
        
        this.output.on('tabshow', function(){
            if(this.pipelineLayer){
                this.pipelineLayer.setVisibility(true);
            }
            // Restore the ResultsGrid panel status
            var container = this.featureGridContainer ? Ext.getCmp(this.featureGridContainer) : null;
            if(container && this.resultsGridStatus){
                if(this.resultsGridStatus == "collapsed"){
                    container.collapse();
                }else if(this.resultsGridStatus == "expanded"){
                    container.expand();
                }
            }
        }, this);
        
        var container = this.featureGridContainer ? Ext.getCmp(this.featureGridContainer) : null;
        if(container){
            
            container.on({
                'collapse' : {
                    fn: this.resultsGridCollapseHandler,
                    scope: this
                },
                'expand' : {
                    fn: this.resultsGridExpandHandler,
                    scope: this
                }
            });
        }

        return this.output;
    },
    
    lookupButtonHandler: function () {      
        var values = this.output.getForm().getValues();
        if(values.queryby == 'pipeline'){
            if( !values.pipeline ){
                Ext.Msg.show({
                   
                   msg: 'Please select a pipeline in the "Refine Query" box',
                   buttons: Ext.Msg.OK,
                   animEl: 'elId',
                   icon: Ext.MessageBox.INFO
                });
                return 
            }
            
            this.layerName = this.bypipelineLayerName;
        }
        
        if(values.queryby == 'point'){
            if (!values.point){
                Ext.Msg.show({
                   
                   msg: 'Please enter part of the Point\'s Name or DRN',
                   buttons: Ext.Msg.OK,
                   animEl: 'elId',
                   icon: Ext.MessageBox.INFO
                });
                return
            }
            
            this.layerName = this.bypointLayerName;
        }
        
        var viewParams=this.createViewParams();
        var layerProps = {
            title: "Query Result",
            name: this.layerName,
            layers: this.layerName,
            //styles: style ,
            transparent: "true",
            displayInLayerSwitcher: false,
            vendorParams: {
                //cql_filter: cql_filter
                viewparams: viewParams
                //TODO env: parameters for style if needed
            }
        };

        if (!this.layerRecord || this.layerRecord.getLayer().name != this.layerName) {
            
            if(this.layerRecord){
                this.target.mapPanel.layers.remove([this.layerRecord]);
            }
            
            var source = this.target.tools.addlayer.checkLayerSource(this.geoServerUrl);
            var record = source.createLayerRecord(layerProps);
            var wms = record.getLayer();

            var data = {
                title: "Query Results",
                source: this.source,
                name: this.layerName,
                group: "data",
                layer: wms,
                queryable: true,
                selected: true

            };
            var fields = [{
                name: "name",
                type: "string"
            }, {
                name: "group",
                type: "string"
            }, {
                name: "title",
                type: "string"
            }, {
                name: "selected",
                type: "boolean"
            }, {
                name: "querible",
                type: "boolean"
            }];
            var Record = GeoExt.data.LayerRecord.create(fields);
            this.layerRecord = new Record(data);
            this.target.mapPanel.layers.add([this.layerRecord]);
        } else {
            var layer =this.layerRecord.getLayer();
            layer.mergeNewParams({
                //cql_filter: filter.toString()
                viewparams: viewParams
            });
            
        }
        
        var layer =this.layerRecord.getLayer();
        //target.mapPanel.map.addLayers([wms]);
        layer.vendorParams = Ext.apply(layer.vendorParams,{
                //cql_filter: filter.toString()
                viewparams: viewParams
            });
        // target.mapPanel.map.addControl(control);
        //add to list of layers and controls 

        
        var featureManager = this.target.tools[this.featureManager];
        featureManager.clearFeatureStore();
        featureManager.layerRecord = undefined;
        featureManager.setLayer(this.layerRecord);
        featureManager.loadFeatures();
        var container = this.featureGridContainer ? Ext.getCmp(this.featureGridContainer) : null;
        if(container){
            container.expand();
            this.resultsGridStatus = "expanded";
        }

    },
    
    createFilter: function (values) {
        if (values.queryby == 'pipeline') {
            return new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: "pntFERC",
                value: values.pipeline
            });
        }

    },
    createViewParams: function(){
        var values = this.output.getForm().getValues();
        var fieldValues = this.output.getForm().getFieldValues();
        
        var startDate = "START_DATE:" + fieldValues.start.format('Y-m-d');
        var endDate = "END_DATE:" + fieldValues.end.format('Y-m-d');;
        var aggregation = "AGGREGATION:" + values.aggregation;
        var viewParams = [startDate,endDate,aggregation];
        
        if(values.pipeline && values.pipeline != ''){
            var ferc = "FERC:" + values.pipeline;
            viewParams.push(ferc);
        }
        
        if(values.ptype && values.ptype != ''){
            var ptype = "PTYPE:" + values.ptype;
            viewParams.push(ptype);
        }
        
        if(values.point && values.point != ''){
            var pnt_query = "PNT_QRY:" + values.point;
            viewParams.push(pnt_query);
        }
        
        return viewParams.join(";");
    },
    resultsGridCollapseHandler: function(cpanel){
        if(this.output.ownerCt.getActiveTab() == this.output){
            this.resultsGridStatus = "collapsed";
        }
    },
    resultsGridExpandHandler: function(cpanel){
        if(this.output.ownerCt.getActiveTab() == this.output){
            this.resultsGridStatus = "expanded";
        }
    }

});
Ext.preg(gxp.plugins.he.CapacityData.prototype.ptype, gxp.plugins.he.CapacityData);