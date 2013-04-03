/**
 * @requires plugins/Tool.js
 */

/** api: (define)
 *  module = gxp.plugins
 *  class = StandardProcessing
 *    This module implements a panel to insert parameters for Standard Processing evaluation.
 *    This includes: type of processing and formula selection, area of interest, type of targets involved, types of accident involved
 */

/** api: (extends)
 *  plugins/Tool.js
 */
Ext.namespace("gxp.plugins");

/** api: constructor
 *  .. class:: StandardProcessing(config)
 *
 */   
gxp.plugins.StandardProcessing = Ext.extend(gxp.plugins.Tool, {
    
    /** api: ptype = gxp_layertree */
    ptype: "gxp_stdproc",

    // Begin i18n.
    title: "Elaborazione",
    elaborazioneLabel: "Tipo elaborazione",
    formulaLabel: "Formula",                
    northLabel:"Nord",
    westLabel:"Ovest",
    eastLabel:"Est",
    southLabel:"Sud",
    aoiFieldSetTitle: "Ambito Territoriale",
    setAoiText: "Seleziona Area",        
    setAoiTooltip: "Abilita la selezione della regione di interesse sulla mappa",
	notAvailableProcessing: "Tipo di elaborazione non ancora disponibile",
	targetLabel: "Bersaglio",
	macroTargetLabel: "Categoria",
	targetSetLabel: "Tipo bersaglio",
	adrLabel: "Classe ADR",
	sostanzeLabel: "Sostanza",
	accidentLabel: "Incidente",
	seriousnessLabel: "Entità",
	resetButton: "Reimposta",
        cancelButton: "Annulla",
	viewMapButton: "Visualizza Mappa",
	formLabel: "Impostazioni di Elaborazione",
	bboxValidationTitle: "Selezione Area di Interesse",
	invalidAOI: "Le coordinate dell'area di interesse non sono valide.",
	bboxTooBig: "L'area selezionata e' troppo grande e il server potrebbe impiegare molto tempo a rispondere. Se si desidera continuare ugualmente premere OK.",
        
    // End i18n.
        
    // TODO: bbox piemonte    
    spatialFilterOptions: {
        lonMax: 20037508.34,   
        lonMin: -20037508.34,
        latMax: 20037508.34,   
        latMin: -20037508.34  
    },           
    
    toggleGroup: "toolGroup",
        
    outputTarget: null,
    
    aoi: null,
    
    syntheticView: "syntheticview",
    
    appTarget: null,
    
    geometryName: "the_geom",
    accidentTipologyName: "tipology",
    
    selectionLayerName: "geosolutions:aggregated_data_selection",
    selectionLayerTitle: "ElaborazioneStd", 
    selectionLayerBaseURL: "http://localhost:8080/geoserver/wms",
    selectionLayerProjection: "EPSG:32632",    
    
    maxROIArea: null,
    
    urlEPSG: null,
    epsgWinHeight: null,
    epsgWinWidth: null,  

    aoiFieldset: null,
    /*
    holdValues: {
        "L": 8,
        "G": 25 
    },
 
    
    // -1 HOLD Values, null not defined value
    radiusData : {
                 "1":{
                    "E" : {
                        "L": { "humans": [15,32,51,75],        "notHumans": [15,-1,-1,-1,null,null]},
                        "G": { "humans": [75,90,110,130],      "notHumans": [75,-1,-1,-1,null,null]}
                    }
                 },
                 "2":{
                    "G" : {
                        "L": { "humans": [25,-1,81,-1],    "notHumans": [null,-1,-1,-1,null,null]},
                        "G": { "humans": [45,-1,90,-1],    "notHumans": [null,-1,-1,-1,null,null]}
                    }
                },
                "3":{
                    "D" : {
                        "L": { "humans": [35,70,-1,-1],    "notHumans": [null,-1,-1,null,null,null]},
                        "G": { "humans": [65,132,-1,-1],   "notHumans": [null,-1,-1,null,null,null]}
                    },
                    "F" : {
                        "L": { "humans": [60,95,110,140],      "notHumans": [60,-1,-1,null,null,null]},
                        "G": { "humans": [180,230,420,500],    "notHumans": [180,-1,-1,null,null,null]}
                    }
                },
                "4":{
                    "E" : {
                        "L": { "humans": [30,65,-1,-1],    "notHumans": [null,-1,-1,null,null,null]},
                        "G": { "humans": [60,148,-1,-1],   "notHumans": [null,-1,-1,null,null,null]}
                    },
                    "F" : {
                        "L": { "humans": [55,93,100,131],      "notHumans": [55,-1,-1,null,null,null]},
                        "G": { "humans": [112,210,339,467],    "notHumans": [112,-1,-1,null,null,null]}
                    },
                    "M" : {
                        "L": { "humans": [60,-1,110,-1],   "notHumans": [null,-1,-1,-1,null,null]},
                        "G": { "humans": [110,-1,230,-1],  "notHumans": [null,-1,-1,-1,null,null]}
                    }
                },
                "5":{
                    "B" : {
                        "L": { "humans": [45,96,-1,-1],    "notHumans": [null,-1,-1,null,null,null]},
                        "G": { "humans": [110,150,-1,-1],  "notHumans": [null,-1,-1,null,null,null]}
                    },
                    "L" : {
                        "L": { "humans": [130,-1,567,-1],  "notHumans": [null,-1,-1,-1,null,null]},
                        "G": { "humans": [250,-1,780,-1],  "notHumans": [null,-1,-1,-1,null,null]}
                    }
                },
                "6":{
                    "G" : {
                        "L": { "humans": [25,-1,81,-1],    "notHumans": [null,-1,-1,-1,null,null]},
                        "G": { "humans": [45,-1,90,-1],    "notHumans": [null,-1,-1,-1,null,null]}
                    }
                },
                "7":{
                    "H" : {
                        "L": { "humans": [null,null,null,null],"notHumans": [null,null,null,8,8,8]},
                        "G": { "humans": [null,null,null,null],"notHumans": [null,null,null,25,25,25]}
                    }
                },
                "8":{
                    "C" : {
                        "L": { "humans": [35,45,52,60],        "notHumans": [35,-1,-1,-1,null,null]},
                        "G": { "humans": [80,110,130,145],     "notHumans": [80,-1,-1,-1,null,null]}
                    },
                    "D" : {
                        "L": { "humans": [45,90,-1,-1],    "notHumans": [null,-1,-1,null,null,null]},
                        "G": { "humans": [127,250,-1,-1],  "notHumans": [null,-1,-1,null,null,null]}
                    },
                    "H" : {
                        "L": { "humans": [null,null,null,null],"notHumans": [null,null,null,8,8,8]},
                        "G": { "humans": [null,null,null,null],"notHumans": [null,null,null,25,25,25]}
                    }
                },
                "9":{
                    "A" : {
                        "L": { "humans": [30,42,48,58],        "notHumans": [30,-1,-1,null,null,null]},
                        "G": { "humans": [75,109,125,138],     "notHumans": [75,-1,-1,null,null,null]}
                    },
                    "B" : {
                        "L": { "humans": [40,88,-1,-1],    "notHumans": [-1,-1,null,null,null,null]},
                        "G": { "humans": [70,150,-1,-1],   "notHumans": [-1,-1,null,null,null,null]}
                    },
                    "I" : {
                        "L": { "humans": [30,-1,60,-1],    "notHumans": [-1,-1,-1,-1,null,null]},
                        "G": { "humans": [80,-1,160,-1],   "notHumans": [-1,-1,-1,-1,null,null]}
                    }
                },
                 "10":{
                    "H" : {
                        "L": { "humans": [null,null,null,null],"notHumans": [null,null,null,8,8,8]},
                        "G": { "humans": [null,null,null,null],"notHumans": [null,null,null,25,25,25]}
                    }
                }
        },*/

    /** private: method[constructor]
     *  :arg config: ``Object``
     */
    constructor: function(config) {
      /* this.epsgWinHeight= Ext.getBody().getHeight()*.7;
       this.epsgWinWidth= Ext.getBody().getWidth()*.8;*/
       gxp.plugins.StandardProcessing.superclass.constructor.apply(this, arguments);
    },
    
    
    /** public: method[show]
     *  :arg appTarget: ``Object``
     */
    show: function(appTarget) {
       
        if(!this.appTarget)
            this.appTarget = appTarget;
            
        var map = this.appTarget.mapPanel.map;    
        
        this.aoiFieldset=this.appTarget.tools[this.aoi].getAOI();   
        
    
        
       /* this.mapProjection = new OpenLayers.Projection(map.getProjection());
        this.wgs84Projection = new OpenLayers.Projection("EPSG:4326")*/
    
        var processing = this.buildForm(map);
     
        map.enebaleMapEvent = true;
        return processing;
    },
    
	/** private: method[resetForm]
	 *     resets the form with initial values
     */
	resetForm: function(){
                
		this.panel.getForm().reset();
		this.aoiFieldset.removeAOILayer();
		/*this.selectAOI.deactivate();
		this.aoiButton.toggle(false, true);*/		
		this.resetBBOX(true);
	},
	
	/** private: method[buildElaborazioneForm]
	 *    builds the form for processing and formula choosing
     */
	buildElaborazioneForm: function() {		
        //
        // Tipo Elaborazione
        //        
        var elaborazioneStore = new Ext.data.ArrayStore({
            fields: ['name', 'available'],
            data :  [
                ['Elaborazione Standard', true],
                ['Personalizzazione', false],
                ['Simulazione', false],
                ['Danno', false]
            ]
        });
        
        this.elaborazione = new Ext.form.ComboBox({
            fieldLabel: this.elaborazioneLabel,
            id: "elabcb",
            width: 150,
            hideLabel : false,
            store: elaborazioneStore,    
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,    
            value: "Elaborazione Standard",
            listeners: {
                beforeselect: function(cb, record, index){
                    var available = record.get('available');  
                    
                    if(!available){
                        Ext.Msg.show({
                            title: this.title,
                            msg: this.notAvailableProcessing,
                            icon: Ext.MessageBox.WARNING
                        });
                        
                        return false;
                    }
                },
                select: function(cb, record, index) {
                    //var value = record.get('name');             
                },
				scope: this
            }              
        });
        
		//
        // Formula
        //        
        var formulaStore = new Ext.data.ArrayStore({
            fields: ['name'],
            data :  [
                ['Rischio Totale']
            ]
        });
        
        this.formula = new Ext.form.ComboBox({
            fieldLabel: this.formulaLabel,
            id: "elabfr",
            width: 150,
            hideLabel : false,
            store: formulaStore,    
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,    
            value: "Rischio Totale",
            listeners: {
                select: function(cb, record, index) {
                    //var value = record.get('name');             
                }
            }              
        });
       
        this.elabSet = new Ext.form.FieldSet({
            title: this.title,
            id: 'elabfset',
            autoHeight: true,
            defaults: {
                // applied to each contained panel
                bodyStyle:'padding:5px;'
            },
            items: [
                 this.elaborazione,
                 this.formula
            ]
        });
		
		return this.elabSet;
	},
	
	/** private: method[buildAOIForm]
	 *  :arg map: ``Object``
	 *    builds the form for AOI (Area of interest) choosing
     */
	/*buildAOIForm: function(map) {		
        //
        // Ambito Territoriale
        //        
        this.northField = new Ext.form.NumberField({
              fieldLabel: this.northLabel,
              id: "NorthBBOX",
              width: 100,
              allowBlank: false,
              minValue: this.spatialFilterOptions.lonMin,
              maxValue: this.spatialFilterOptions.lonMax,
              decimalPrecision: 5,
              allowDecimals: true,
              hideLabel : false                    
        });
        
        this.westField = new Ext.form.NumberField({
              fieldLabel: this.westLabel,
              id: "WestBBOX",
              width: 100,
              allowBlank: false,
              minValue: this.spatialFilterOptions.latMin,
              maxValue: this.spatialFilterOptions.latMax,
              decimalPrecision: 5,
              allowDecimals: true,
              hideLabel : false                    
        });
        
        this.eastField = new Ext.form.NumberField({
              fieldLabel: this.eastLabel,
              id: "EastBBOX",
              width: 100,
              allowBlank: false,
              minValue: this.spatialFilterOptions.latMin,
              maxValue: this.spatialFilterOptions.latMax,
              decimalPrecision: 5,
              allowDecimals: true,
              hideLabel : false                    
        });
              
        this.southField = new Ext.form.NumberField({
              fieldLabel: this.southLabel,
              id: "SouthBBOX",
              width: 100,
              allowBlank: false,
              minValue: this.spatialFilterOptions.lonMin,
              maxValue: this.spatialFilterOptions.lonMax,
              decimalPrecision: 5,
              allowDecimals: true,
              hideLabel : false                    
        });

        //
        // Geographical Filter Field Set
        //  
		var me = this;
        this.selectAOI = new OpenLayers.Control.SetBox({      
            map: map,            
            onChangeAOI: function(){                               
                me.setAOI(new OpenLayers.Bounds.fromString(this.currentAOI));             
            } 
        }); 
        
        map.addControl(this.selectAOI);
        
        this.aoiButton = new Ext.Button({
              text: this.setAoiText,
              tooltip: this.setAoiTooltip,
              enableToggle: true,
              toggleGroup: this.toggleGroup,
              iconCls: 'aoi-button',
              height: 50,
              width: 50,
              listeners: {
                  scope: this, 
                  toggle: function(button, pressed) {
                     if(pressed){                     
                          //
                          // Reset the previous control
                          //
                          this.removeAOILayer(map);
                          
                          if(this.northField.isDirty() && this.southField.isDirty() && 
                              this.eastField.isDirty() && this.westField.isDirty()){
                              this.northField.reset();
                              this.southField.reset();
                              this.eastField.reset();
                              this.westField.reset();
                          }

                          //
                          // Activating the new control
                          //                          
                          this.selectAOI.activate();
                      }else{
                          this.selectAOI.deactivate();
                      }
                  }
              }
        });                       
        
      
        this.spatialFieldSet = new Ext.form.FieldSet({
            title:  this.aoiFieldSetTitle+" <a href='#' id='bboxAOI-set-EPSG'>["+this.wgs84Projection.getCode()+"]</a>",
            id: 'bboxAOI-set',
            autoHeight: true,
            layout: 'table',
            layoutConfig: {
                columns: 3
            },
            defaults: {
                // applied to each contained panel
                bodyStyle:'padding:5px;'
            },
            bodyCssClass: 'aoi-fields',
            items: [                     
                {
                    layout: "form",
                    cellCls: 'spatial-cell',
                    labelAlign: "top",
                    border: false,
                    colspan: 3,
                    items: [
                        this.northField
                    ]
                },{
                    layout: "form",
                    cellCls: 'spatial-cell',
                    labelAlign: "top",
                    border: false,
                    items: [
                        this.westField
                    ]
                },{
                    layout: "form",
                    cellCls: 'spatial-cell',
                    border: false,
                    items: [
                        this.aoiButton
                    ]                
                },{
                    layout: "form",
                    cellCls: 'spatial-cell',
                    labelAlign: "top",
                    border: false,
                    items: [
                       this.eastField
                    ]
                },{
                    layout: "form",
                    cellCls: 'spatial-cell',
                    labelAlign: "top",
                    border: false,
                    colspan: 3,
                    items: [
                        this.southField
                    ]
                }
            ]
        });
		
		// updates the AOI on map pan / zoom
        this.aoiUpdater = function() {			
			var extent=map.getExtent().clone();
			this.setAOI(extent);                    
			this.removeAOILayer(map);			
        };
        map.events.register("move", this, this.aoiUpdater);
        
		return this.spatialFieldSet;
	},*/
	
	/** private: method[buildTargetForm]
     *    builds the form for target type choosing
     */
	buildTargetForm: function() {
		//
        // Bersaglio
        //        
        var targetStore = new Ext.data.ArrayStore({
            fields: ['layer','name', 'property', 'humans', 'code', 'type', 'macro', 'id'],			
            data :  [
              //  ['Tutti i Bersagli', 'calc_formula_tot', ''],
                ['popolazione_residente','Popolazione residente', 'calc_formula_tot', true, '-1', 'umano', false, [1]],
                //['popolazione_turistica','Popolazione fluttuante turistica (medio)', 'calc_formula_tot', true, '-1', 'umano'],
                ['popolazione_turistica','Popolazione fluttuante turistica', 'calc_formula_tot', true, '-1', 'umano', false, [2]],
                ['industria_servizi','Addetti industria e servizi', 'calc_formula_tot', true, '-1', 'umano', false, [4]],
                ['strutture_sanitarie','Addetti/utenti strutture sanitarie', 'calc_formula_tot', true, '-1', 'umano', false, [5]],
                ['strutture_scolastiche','Addetti/utenti strutture scolastiche', 'calc_formula_tot', true, '-1', 'umano', false, [6]],
                ['centri_commerciali','Addetti/utenti centri commerciali', 'calc_formula_tot', true, '-1', 'umano', false, [7]],
                //['xx','Utenti della strada coinvolti', 'calc_formula_tot', true, '-1', 'umano'],
                //['yy','Utenti della strada territoriali', 'calc_formula_tot', true, '-1', 'umano'],
                ['zone_urbanizzate','Zone urbanizzate', 'calc_formula_tot', false, '0', 'ambientale', false, [10]],
                ['aree_boscate','Aree boscate', 'calc_formula_tot', false, '1', 'ambientale', false, [11]],
                ['aree_protette','Aree protette', 'calc_formula_tot', false, '2', 'ambientale', false, [12]],
                ['aree_agricole','Aree agricole', 'calc_formula_tot', false, '3', 'ambientale', false, [13]],
                ['acque_sotterranee','Acque sotterranee', 'calc_formula_tot', false, '4', 'ambientale', false, [14]],
                ['acque_superficiali','Acque superficiali', 'calc_formula_tot', false, '5', 'ambientale', false, [15]],
                ['beni_culturali','Beni culturali', 'calc_formula_tot', false, '6', 'ambientale', false, [16]]

            ]
        });			
        
        var targetMacroStore = new Ext.data.ArrayStore({
            fields: ['layer', 'name', 'property', 'humans', 'code', 'type', 'macro', 'id'],
            data :  [
                ['bersagli_all', 'Tutti i Bersagli', 'calc_formula_tot', false, '-2', 'mixed', true, [1,2,4,5,6,7,10,11,12,13,14,15,16]],
                ['bersagli_umani', 'Tutti i Bersagli Umani', 'calc_formula_tot', true, '-1', 'umano', true, [1,2,4,5,6,7]],
                ['bersagli_ambientali', 'Tutti i Bersagli Ambientali', 'calc_formula_tot', false, '-2', 'ambientale', true, [10,11,12,13,14,15,16]]
            ]
        });
        
        
        
        this.macrobers = new Ext.form.ComboBox({
            fieldLabel: this.macroTargetLabel,
            id: "macrobers",
            width: 150,
            hideLabel : false,
            store: targetMacroStore,    
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,    
            value: "Tutti i Bersagli",
            listeners: {
                scope: this,
                select: function(cb, record, index) {				    					
					var type = record.get('type');					
					
                    var store=this.bers.getStore();                    					
					
					if(type !== 'mixed') {
						store.filter('type', type);
					} else {
						store.clearFilter();
					}					                        
                    
                    this.bers.setValue(null);
                }
            }              
        });
       

        this.bers = new Ext.form.ComboBox({
            fieldLabel: this.targetLabel,
            id: "bers",
            width: 150,
            hideLabel : false,
            store: targetStore,	
			clearFilterOnReset: false,
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
			lastQuery: '',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true
        });
        
        this.bersSet = new Ext.form.FieldSet({
            title: this.targetSetLabel,
            id: 'bersfset',
            autoHeight: true,
            defaults: {
                // applied to each contained panel
                bodyStyle:'padding:5px;'
            },
            items: [
                this.macrobers,
                 this.bers
            ]
        });
		
		return this.bersSet;
	},
	
	/** private: method[buildAccidentForm]
	 *    builds the form for accidents choosing (with 4 cascading combos)
     */
    buildAccidentForm: function(map){
		//
        // Classi ADR
        //
        var classiADRStore = new Ext.data.ArrayStore({
            fields: ['name','value', 'sostanze'],
            data :  [
                ['Tutte le classi', '0', ['1','2','3','4','5','6','7','8','9','10']],
             //   ['MATERIE E OGGETTI ESPLOSIVI', '1', []],
                ['GAS COMPRESSI, LIQUEFATTI O DISCIOLTI IN PRESSIONE', '2', ['1','2','3','4','5','6']],
                ['MATERIE LIQUIDE INFIAMMABILI', '3', ['7','8','9']],
             //   ['MATERIE SOLIDE INFIAMMABILI', '4.1', []],
             //   ['MATERIE SOGGETTE AD ACCENSIONE SPONTANEA', '4.2', []],
             //   ['MATERIE CHE A CONTATTO CON L?ACQUA SVILUPPANO GAS INFIAMMABILI', '4.3', []],
             //   ['MATERIE COMBURENTI', '5.1', []],
             //   ['PEROSSIDI ORGANICI', '5.2', []],
                ['MATERIE TOSSICHE', '6.1', ['10']],
             //   ['MATERIE INFETTANTI', '6.2', []],
             //   ['MATERIE RADIOATTIVE', '7', []],
             //   ['MATERIE CORROSIVE', '8', []],
             //   ['MATERIE E OGGETTI PERICOLOSE DI ALTRA NATURA', '9', []]
            ]
        });
		
		this.classi = new Ext.form.ComboBox({
            fieldLabel: this.adrLabel,
            id: "classicb",
            width: 150,
            hideLabel : false,
            store: classiADRStore,    
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,
            value: "Tutte le classi",
			lazyInit: false,
            listeners: {
                "expand": function(combo) {
                    combo.list.setWidth( 'auto' );
                    combo.innerList.setWidth( 'auto' );
                },                
                select: function(cb, record, index) {					
					// filtra solo la combo delle sostanze in base alla classe scelta, resetta gli altri filtri
					var sostanze = record.get('sostanze'); 
					this.filterCombos([{
						combo: this.sostanze,
						filter: function(record) {							
							var value=record.get('value'); 
							return (sostanze.indexOf(value) != -1 || value == '0');
						}
					 },{
						combo: this.accident,
						filter: null
					 }]);
					 
					 // resetta il valore selezionato sulle combo in cascata
					 this.resetCombos([this.sostanze, this.accident, this.seriousness]);                    
                },
				scope: this
            }              
        });			
        
		//
        // Sostanze
        //
        var sostanzeStore = new Ext.data.ArrayStore({
            fields: ['name', 'value', 'accidents', 'id'],
            data :  [
                ['Tutte le sostanze', '0', ['A','B','C','D','E','F','G','H','I','L','M'], [1,2,3,4,5,6,7,8,9,10]],
                ['IDROGENO COMPRESSO', '1', ['E'], [1]],
                ['OSSIGENO COMPRESSO', '2', ['G'], [2]],
                ['GAS DI PETROLIO LIQUEFATTO', '3', ['D', 'F'], [3]],
                ['OSSIDO DI ETILENE (+AZOTO)', '4', ['D', 'F', 'M'], [4]],
                ['AMMONIACA ANIDRA', '5', ['B', 'L'], [5]],
                ['OSSIGENO LIQUIDO REFRIGERATO', '6', ['G'], [6]],
                ['GASOLIO', '7', ['H'], [7]],
                ['BENZINA', '8', ['C', 'D', 'H'], [8]],
                ['METANOLO', '9', ['A', 'B', 'I'], [9]],
                ['EPICLORIDRINA', '10', ['H'], [10]]
            ]
        });
		
		this.sostanze = new Ext.form.ComboBox({
            fieldLabel: this.sostanzeLabel,
            id: "sostanzecb",
            width: 150,
            hideLabel : false,
            store: sostanzeStore, 
            lastQuery:'',
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,	
			lazyInit: false,			
            value: "Tutte le sostanze",
            listeners: {
                "expand": function(combo) {
                    combo.list.setWidth( 'auto' );
                    combo.innerList.setWidth( 'auto' );
                },
                
                select: function(cb, record, index) {
					// filtra la combo degli incidenti
					var accidents = record.get('accidents'); 
					this.filterCombos([{
						combo: this.accident,
						filter: function(record) {							
							var value=record.get('value'); 
							return (accidents.indexOf(value)!= -1 || value == '0');
						}
					}]);                    
                    
                    // resetta il valore selezionato sulle combo in cascata
					this.resetCombos([this.accident, this.seriousness]); 
					
                },
				scope: this
            }              
        });
               
        //
        // Incidenti / Scenari
        //
        var accidentStore = new Ext.data.ArrayStore({
            fields: ['name', 'value', 'id'],
            data :  [
                ['Tutti gli Incidenti', '0', [1,2,3,4,5,6,7,8,9,10,11]],
                ['POOL FIRE DA LIQUIDO INFIAMMABILE', 'A', [1]],
                ['FLASH FIRE DA VAPORI LIQUIDO INFIAMMABILE', 'B', [2]],
                ['POOL FIRE DA LIQUIDO ESTREMAMENTE INFIAMMABILE', 'C', [3]],
                ['FLASH FIRE DA VAPORI LIQUIDO ESTREMAMENTE INFIAMMABILE', 'D', [4]],
                ['JET FIRE DI GAS ESTREMAMENTE INFIAMMABILE', 'E', [5]],
                ['FIRE BALL', 'F', [6]],
                ['DISPERSIONE COMBURENTE', 'G', [7]],
                ['RILASCIO SUL SUOLO E NELLE ACQUE', 'H', [8]],
                ['DISPERSIONE VAPORI DA LIQUIDO TOSSICO', 'I', [9]],
                ['DISPERSIONE VAPORI DA LIQUIDO REFRIGERATO TOSSICO', 'L', [10]],
                ['DISPERSIONE GAS DA GAS LIQUEFATTO TOSSICO', 'M', [11]]
            ]
        });
		
		this.accident = new Ext.form.ComboBox({
            fieldLabel: this.accidentLabel,
            id: "accidentcb",
            width: 150,
            hideLabel : false,
            store:  accidentStore,   
            lastQuery:'',
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,
			lazyInit: false,
            value: "Tutti gli Incidenti",
            listeners: {
                "expand": function(combo) {
                    combo.list.setWidth( 'auto' );
                    combo.innerList.setWidth( 'auto' );
                },
                select: function(cb, record, index) {
                   this.resetCombos([this.seriousness]);                           
                },
				scope: this
            }              
        });
        
		//
        // Entità
        //
        var seriousnessStore = new Ext.data.ArrayStore({
            fields: ['name', 'value', 'id'],
            data :  [
                ['Tutte le entità', '0', [0,1]],
                ['Lieve', 'L', [0]],
                ['Grave', 'G', [1]]
            ]
        });
        
        this.seriousness = new Ext.form.ComboBox({
            fieldLabel: this.seriousnessLabel,
            id: "seriousnesscb",
            width: 150,
            hideLabel : false,
            store: seriousnessStore,    
            displayField: 'name',    
            typeAhead: true,
            mode: 'local',
            forceSelection: true,
            triggerAction: 'all',
            selectOnFocus:true,
            editable: true,
            resizable: true,
            value: "Tutte le entità",
			lazyInit: false          
        });
        
        this.accidentSet = new Ext.form.FieldSet({
            title: "Tipo Incidente",
            id: 'accidentfset',
            autoHeight: true,
            defaults: {
                // applied to each contained panel
                bodyStyle:'padding:5px;'
            },
            items: [
                this.classi,
                this.sostanze,
                this.accident,
                this.seriousness
            ]
        });
		
		return this.accidentSet;
	},
	
    /** private: method[buildForm]
     *  :arg map: ``Object``
	 *    builds the standard processing main (all including) form
     */
    buildForm: function(map){		
		// disable synthetic view tab: why do we have tabs if we can't switch from one tab to the other?
        var syntView = this.appTarget.tools[this.syntheticView];
        var me= this;
      
        // updates the AOI on map pan / zoom
        this.aoiUpdater = function() {			
			var extent=map.getExtent().clone();
			me.aoiFieldset.setAOI(extent);                    
			me.aoiFieldset.removeAOILayer(map);			
        };
        map.events.register("move", this, this.aoiUpdater);
        
        syntView.getControlPanel().disable();
		
		var containerTab = Ext.getCmp(this.outputTarget);
		this.temaSlider = new gxp.form.SliderRangesFieldSet({
			title: "Intervalli di tematizzazione",
			numericFields: false,
			multiSliderConf:{
				vertical : false,
				ranges: [
					{maxValue: 100, name:"Rischio Basso", id:"range_low"},
					{maxValue: 500, name:"Rischio Medio", id:"range_medium"}
				],                                        
				width   : 350,
				minValue: 0,
				maxValue: 1000
			}
		});
		this.panel = new Ext.FormPanel({
            border: false,
            layout: "fit",
            title: this.formLabel,
            autoScroll: true,
            items:[
				this.buildElaborazioneForm(),
				//this.buildAOIForm(map),
                this.aoiFieldset, 
                this.temaSlider,
				this.buildTargetForm(),
				this.buildAccidentForm()
            ],
            buttons: [{
                text: this.cancelButton,
                iconCls: 'cancel-button',
                scope: this,
                handler: this.switchToSyntheticView
            },{
                text: this.resetButton,
                iconCls: 'reset-button',
                scope: this,
                handler: this.resetForm
            }, {
                text: this.viewMapButton,
                iconCls: 'visualizzation-button',
                scope: this,
                handler: function(){                    
                    var params = this.viewMap();
                }
            }]
        });
        
        containerTab.add(this.panel);
        containerTab.setActiveTab(this.panel);
        
        //Ext.get("bboxAOI-set-EPSG").addListener("click", this.openEpsgWin, this);
        
        if(!this.status){
            this.resetBBOX();
        }	
    },
    
	/** private: method[openEpsgWin]
	 *    Opens a popup with current AOI CRS description (EPSG:4326)
     */
	/*openEpsgWin: function() {
         var win= new Ext.Window({
                layout:'fit',
                
                width:this.epsgWinWidth,
                height:this.epsgWinHeight,
                closeAction:'destroy',
                html: '<div id="loaderIframe"><iframe id="epsgIframe" src="'+ (this.urlEPSG ? this.urlEPSG : "http://spatialreference.org/ref/epsg/"+this.wgs84Projection.getCode().split(":")[1]+"/") +'" width="99%" height="99%"></iframe></div>',
                listeners: {
                    afterrender: function(el, eOpts) {
                        var ml=new Ext.LoadMask(document.getElementById('loaderIframe'), 
                            { msg:"Prego Attendere...",removeMask: true});
                        ml.show();   
                        function rml(){
                            ml.hide();
                        }
                        var iframe = document.getElementById('epsgIframe');
                        if (iframe.attachEvent) {
                            iframe.attachEvent("onload", rml);
                        } else if (iframe.addEventListener) {
                            iframe.addEventListener("load", rml, false);
                        } 
                 }   
               }
           });
           
           win.show();
	},*/
	
	/** private: method[resetCombos]
     *  :arg combos: ``Array``
	 *    resets the given combos to their initial value ("all values")
     */
	resetCombos: function(combos) {
		Ext.each(combos, function(combo) {
			var record = combo.store.getAt(0);
			combo.setValue(record.get('name'));
			combo.fireEvent('select', combo, record, 0);
		});
	},
	
	/** private: method[filterCombos]
     *  :arg combos: ``Array``
	 *    sets the filter options on the given combos; each element
	 *    of the array is an object with 2 properties, combo and filter,
	 *    the filter is the function to filter the combo via filterBy.
     */
	filterCombos: function(combos) {
		Ext.each(combos, function(comboInfo) {
			var store=comboInfo.combo.getStore(); 
			store.clearFilter();
			if(comboInfo.filter) {
				store.filterBy(comboInfo.filter);				
			}
		});
	},
	
	/** private: method[setAOI]
     *  :arg bounds: ``Object``
	 *  :arg wgs84: ``Boolean``
	 *     change the current AOI, to the given bounds, converting it to wgs84 if needed
     */
    /*setAOI: function(bounds, wgs84) {
        var wgs84Bounds = wgs84 ? bounds : bounds.transform(this.mapProjection,this.wgs84Projection);
        this.northField.setValue(wgs84Bounds.top);
        this.southField.setValue(wgs84Bounds.bottom);
        this.westField.setValue(wgs84Bounds.left);
        this.eastField.setValue(wgs84Bounds.right);  
    },*/
    
	/** private: method[doProcess]
     *  :arg params: ``Object``	 
	 *     executes the processing using given parameters
     */
    doProcess: function(params){
        if(params){
          //  this.showLayer(params);
            
            if(params.roi)
                this.appTarget.mapPanel.map.zoomToExtent(params.roi);

            var status = this.getStatus(this.panel.getForm());                
            
            //
            // Remove the AOI box
            //
            this.aoiFieldset.removeAOILayer();
           // this.selectAOI.deactivate();
            
            /*var containerTab = Ext.getCmp(this.outputTarget);
            var active = containerTab.getActiveTab();
            active.disable();
            
            containerTab.setActiveTab(0);
            active = containerTab.getActiveTab();
            active.enable();*/
            
            this.switchToSyntheticView();
            var syntView = this.appTarget.tools[this.syntheticView];
            
          //  syntView.getControlPanel().enable();
            
            syntView.setStatus(status);
			syntView.doProcess();
			this.appTarget.mapPanel.map.events.unregister("move", this, this.aoiUpdater);
        }
    },
    
    switchToSyntheticView: function(){
       var containerTab = Ext.getCmp(this.outputTarget);
       var active = containerTab.getActiveTab();
       active.disable();
            
       containerTab.setActiveTab(0);
       active = containerTab.getActiveTab();
       active.enable(); 
    },
    
	/** private: method[removeAOILayer]
     *  :arg map: ``Object``	 
	 *     remove the AOI selection layer from the map
     */
   /* removeAOILayer: function(map){
        var aoiLayer = map.getLayersByName("AOI")[0];
      
        if(aoiLayer)
            map.removeLayer(aoiLayer);    
    },*/
    
	/** private: method[resetBBOX]
     *  :arg extent: ``Boolean``	 
	 *     reset bbox to current extent (if asked esplicitly or no status is defined) or saved status
     */
    resetBBOX: function(extent){    
   
		if(this.status && !extent){
			this.aoiFieldset.setAOI(this.status.roi.bbox/*, true*/);
		}else{
			this.aoiFieldset.setAOI(this.appTarget.mapPanel.map.getExtent());
		}              
    },
    
	/** private: method[makeParams]
     *  :arg form: ``Object``	 
     *  :arg roi: ``Object``	 
	 *     builds processing params with form values and selected roi
     */
    makeParams: function(form, roi){
        var map = this.appTarget.mapPanel.map;
        var params = {};
        var filters = [];
        
        //
        // Spatial filter
        //       
        if(!roi){
            return null;
        }
        
        params.roi = new OpenLayers.Bounds.fromString(roi.toBBOX());
        
        //
        // Check about the projection (this could needs Proj4JS definitions inside the mapstore config)
        //
        var mapPrj = map.getProjectionObject();
        var selectionPrj = new OpenLayers.Projection(this.selectionLayerProjection);
        if(!mapPrj.equals(selectionPrj)){
            roi = roi.transform(
                mapPrj,    
                selectionPrj
            );
        }
        
      
    
        filters.push(new OpenLayers.Filter.Spatial({
           type: OpenLayers.Filter.Spatial.BBOX,
           property: this.geometryName,
           value: roi
        }));
    
        //
        // Accident Scenarios filter
        //
        var accidentValue = this.accident.getValue();
        if(accidentValue != "Tutti gli Incidenti"){
            filters.push(new OpenLayers.Filter.Comparison({
               type: OpenLayers.Filter.Comparison.EQUAL_TO,
               property: this.accidentTipologyName,
               value: 'POOL FIRE DA LIQUIDO INFIAMMABILE' //this.accident.getValue()
            }));
        }
        
        //
        // Target filter OpenLayers.Filter.Logical.NOT
        //		
		var targetRecord = this.getSelectedTarget();
        if(targetRecord){
            filters.push(new OpenLayers.Filter.Logical({
                type: OpenLayers.Filter.Logical.NOT,
                filters: [new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.IS_NULL,
                    property: targetRecord.get('property')
                })]
            }));
        }
        
        params.filters = filters;
        
        this.doProcess(params);
    },
    
	/** private: method[getSelectedTarget]    
	 *     gets the currently selected target (or macro target) record
     */
	getSelectedTarget: function() {
		var combo = this.bers.getValue() ? this.bers : this.macrobers;
		return combo.store.getAt(combo.store.find('name', combo.getValue()));		
	},
	
	getComboRecord: function(combo) {	
		return combo.store.getAt(combo.store.find('name', combo.getValue()));
	},
	
	/** private: method[viewMap]    
	 *     handler of the "View Map" button, checks input data and proceed to process
	 *     if everything is ok
     */
    viewMap: function(){
      
        if(! this.aoiFieldset.isValid()){
       /* if(!this.westField.isValid() || 
            !this.southField.isValid() || 
                !this.eastField.isValid() || 
                    !this.northField.isValid()){*/
            Ext.Msg.show({
                title: this.bboxValidationTitle,
                buttons: Ext.Msg.OK,
                msg: this.invalidAOI,
                icon: Ext.MessageBox.WARNING
            });        
                        
            this.makeParams(this.panel.getForm(), null);
        }else{
            var selbbox =  this.aoiFieldset.getAOIMapBounds();/*new OpenLayers.Bounds(
                this.westField.getValue(), 
                this.southField.getValue(), 
                this.eastField.getValue(), 
                this.northField.getValue()
            ).transform(this.wgs84Projection,this.mapProjection);*/
      
            if(this.maxROIArea ? selbbox.toGeometry().getArea() > this.maxROIArea : false){
                
                var useROI = function(buttonId, text, opt){
					this.makeParams(this.panel.getForm(), buttonId === 'ok' ? selbbox : null);
                };
                
                Ext.Msg.show({
                    title: this.bboxValidationTitle,
                    buttons: Ext.Msg.OKCANCEL,
                    fn: useROI,
                    msg: this.bboxTooBig,
                    icon: Ext.MessageBox.WARNING,
                    scope: this
                });                
            }else{     
            
                this.makeParams(this.panel.getForm(), selbbox);
            }
        }
    },
    
	/** private: method[viewMap]   
     *  :arg params: ``Object``		
	 *     updates the risk thema on the map with the given processing parameters
     */
    showLayer: function(params){
       
        var map = this.appTarget.mapPanel.map;
        
        var filter = new OpenLayers.Filter.Logical({
            type: OpenLayers.Filter.Logical.AND,
            filters: params.filters
        });
        
        var filterFormat = new OpenLayers.Format.Filter();
        var ogcFilterString = filterFormat.write(filter);  
        
        var xmlFormat = new OpenLayers.Format.XML();                  
        ogcFilterString = xmlFormat.write(ogcFilterString);
           
        //
        // Check if the selection layer already exists
        //
        var stdElabLayer = map.getLayersByName(this.selectionLayerTitle)[0];
     
        if(!stdElabLayer){
            /*stdElabLayer = new OpenLayers.Layer.WMS(
                this.selectionLayerTitle,         
                this.selectionLayerBaseURL,
                {
                    layers: this.selectionLayerName, 
                    transparent: true, 
                    format: this.selectionLayerFormat,
                    filter: ogcFilterString
                },
                {
                    isBaseLayer: false,
                    singleTile: true,
                    displayInLayerSwitcher: false
                }
            );
                    
            map.addLayer(stdElabLayer);*/
        }else{                        
            stdElabLayer.mergeNewParams({
                filter: ogcFilterString 
            });
            
            if(params.roi){
                map.zoomToExtent(params.roi);
            }            
        }
    },
    
	/** private: method[setStatus]   
     *  :arg status: ``Object``		
	 *     set current processing parameter when the form is open
     */
    setStatus: function(status){		
        var store;
        
        this.status = status;
        this.elaborazione.setValue(this.status.processing);
        this.formula.setValue(this.status.formula);
        this.aoiFieldset.setAOI(this.status.roi.bbox);
        		
		store=this.macrobers.getStore(); 
        this.macrobers.setValue(this.status.macroTarget);
		this.macrobers.fireEvent('select',this.macrobers, store.getAt(store.find("name", this.status.macroTarget)));
		
		store=this.bers.getStore(); 
		if(this.status.target['macro']) {
			this.bers.setValue(null);
		} else {
			var value = this.status.target['name'];
			this.bers.setValue(value);
			this.bers.fireEvent('select',this.bers, store.getAt(store.find("name", value)));
		}
        
		this.setComboStatus(this.classi, 'classe');
		this.setComboStatus(this.sostanze, 'sostanza');
		this.setComboStatus(this.accident, 'accident');
		this.setComboStatus(this.seriousness, 'seriousness');          
    },    	
	
	/** private: method[setComboStatus]   
     *  :arg combo: ``Object``		
     *  :arg statusName: ``String``		
	 *     Updates the given combo value from the status object
     */
	setComboStatus: function(combo, statusName) {
		var store = combo.getStore();      
		var value = this.status[statusName].name;
		combo.setValue(value);
		combo.fireEvent('select',combo, store.getAt(store.find("name", value)));
	},
	
	/** private: method[getStatus]   
     *  :arg form: ``Object``		
	 *     extract processing parameters (status) from the compiled form
     */
    getStatus: function(form){
        var obj = {};
    
        obj.processing = this.elaborazione.getValue();
        obj.formula = this.formula.getValue();
        
        /*if(this.westField.isDirty() && 
            this.southField.isDirty() && 
                this.eastField.isDirty() && 
                    this.northField.isDirty()){*/
         if(this.aoiFieldset.isDirty()){
            obj.roi = {
                label: "Area Selezionata", 
                bbox : this.aoiFieldset.getAOIMapBounds()/*new OpenLayers.Bounds(
                    this.westField.getValue(), 
                    this.southField.getValue(), 
                    this.eastField.getValue(), 
                    this.northField.getValue()
                ).transform(this.wgs84Projection,this.mapProjection)*/
            };    
        }else{
            obj.roi = {
                label: "Regione Piemonte", 
                bbox : this.aoiFieldset.getAOIMapBounds()
                   /* new OpenLayers.Bounds(
                        this.westField.getValue(), 
                        this.southField.getValue(), 
                        this.eastField.getValue(), 
                        this.northField.getValue()
                    ).transform(this.wgs84Projection,this.mapProjection)*/
            }
        }
		
        obj.target = this.getSelectedTarget().data; 
		obj.macroTarget = this.macrobers.getValue();
        obj.classe = this.getComboRecord(this.classi).data; //this.classi.getValue();
        obj.sostanza = this.getComboRecord(this.sostanze).data; //this.sostanze.getValue();
        obj.accident = this.getComboRecord(this.accident).data; //this.accident.getValue();
        obj.seriousness = this.getComboRecord(this.seriousness).data; //this.seriousness.getValue();

        return obj;
    }

    
});

Ext.preg(gxp.plugins.StandardProcessing.prototype.ptype, gxp.plugins.StandardProcessing);
