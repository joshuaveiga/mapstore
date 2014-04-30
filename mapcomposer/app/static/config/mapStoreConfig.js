{
   "header": {
	   "html": "<div class='topbanner'><div id='left-banner'><img src='theme/app/img/banner/banner_left.png'   height='86' border='0' /> </div><div id='right-banner'><img src='theme/app/img/banner/banner_right.png'  style='float:right'  border='0' /></div></div>",
	   "css": "<style type='text/css'>div.topbanner{background-image: none;background-color:black;background-position:center top;height:100%;}</style>",
	   "container": {
			"border": false,
			"header": false,
			"collapsible": true,
			"collapseMode":  "mini",
			"hideCollapseTool": true,
			"split": true,
			"animCollapse": false,
			"minHeight": 86,
			"maxHeight": 86,
			"height": 86
	   }
   },
   
   "footer": {
		"html": "<div id=\"footer\"><img src=\"theme/app/img/banner/logo_footer.png\" > © Hart Energy 2014 &nbsp;</div>",
		"css": "<style type='text/css'>#footer{background-color:black;height:100%;text-align:right;color:white;line-height:30px} #footer img{text-align:left; float:left; margin:5px;}</style>",
		"container": {
			"border": false,
			"header": false,
			"split": false,
            "resizable":false,
			"minHeight": 30,
			"maxHeight": 30,
			"height": 30
		}
   },
   
   "scaleOverlayMode": "basic",
   "gsSources":{ 
		"gs": {
			"ptype": "gxp_wmssource",
			"title": "GeoWebPortal Hart Energy", 
            "version":"1.1.1",
			"projection":"EPSG:900913",
			"url": "http://84.33.2.29/geoserver/ows",
			"layersCachedExtent":[-2.003750834E7,-2.003750834E7,2.003750834E7,2.003750834E7],
			"layerBaseParams": {
					"TILED": true,
                    "FORMAT":"image/png8",
					"TILESORIGIN": "-20037508.34, -20037508.34"
            }
		},
        "mapquest": {
			"ptype": "gxp_mapquestsource"
		}, 
		"osm": { 
			"ptype": "gxp_osmsource"
		},
		"google": {
			"ptype": "gxp_googlesource" 
		},
		"bing": {
			"ptype": "gxp_bingsource" 
		}, 
		"ol": { 
			"ptype": "gxp_olsource" 
		}
	},
    "tab":true,
    
	"map": {
		"projection": "EPSG:900913",
		"units": "m",
		"center":[
         -10485835.573159,
         4435633.7663721
          ],
          "zoom":4,
          "maxExtent":[
             -20037508.34,
             -20037508.34,
             20037508.34,
             20037508.34
          ],
		"layers": [
			{
				"source": "mapquest",
				"title": "MapQuest OpenStreetMap",
				"name": "osm",
				"group": "background",
                "visibility": true
			},{
				"source": "osm",
				"title": "Open Street Map",
				"name": "mapnik",
				"group": "background",
                "visibility": false
			},{
				"source": "bing",
				"title": "Bing Aerial",
				"name": "Aerial",
				"group": "background",
                "visibility": false
			},{
				"source": "bing",
				"title": "Bing Aerial With Labels",
				"name": "AerialWithLabels",
				"group": "background",
                "visibility": false
			},{
				"source": "google",
				"title": "Google Terrain",
				"name": "TERRAIN",
				"group": "background",
                "visibility": false
			},{
				"source": "google",
				"title": "Google Hybrid",
				"name": "HYBRID",
				"group": "background",
                "visibility": false
			},{
				"source": "google",
				"title": "Google Roadmap",
				"name": "ROADMAP",
				"group": "background",
                "visibility": false
			},{
				"source": "gs",
                "group": "Natural Gas",
				"title": "LNG Terminals",
				"name": "Natural_Gas:NG_LNG",
                "visibility": false
			},{
				"source": "gs",
                "group": "Natural Gas",
				"title": "Natural Gas Compressors",
				"name": "Natural_Gas:NG_COMPR",
                "visibility": false
			},{
				"source": "gs",
                "group": "Natural Gas",
				"title": "Natural Gas Meter Points",
				"name": "Natural_Gas:NG_METER_POINTS",
                "visibility": false
			},{
				"source": "gs",
                "group": "Natural Gas",
				"title": "Natural Gas Pipelines",
				"name": "Natural_Gas:NG_PIPE",
                "visibility": false
			},{
				"source": "gs",
                "group": "Natural Gas",
				"title":"Natural Gas Processing Plant",
				"name": "Natural_Gas:NG_PRPLANT",
                "visibility": false
			},{
				"source": "gs",
                "group": "Natural Gas",
				"title":"Natural Gas Storage",
				"name": "Natural_Gas:NG_STORAGE",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title":"Offshore Blocks",
				"name": "Common_Interest:OFFSH_BLOCKS",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title":"Offshore Groups",
				"name": "Common_Interest:OFFSH_GROUPS",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title": "Offshore Platforms",
				"name": "Common_Interest:OFFSH_PLATF",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title":" Oil & Gas Basins",
				"name": "Common_Interest:BASINS",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title": "Oil Gas Fields",
				"name": "Common_Interest:OIL_GAS_FIELDS",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title": "PLSS Section",
				"name": "Z0_PLSS_1004:PLSS_SEC",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title": "PLSS Township",
				"name": "Z0_PLSS_1004:PLSS_TWN",
                "visibility": false
			},{
				"source": "gs",
                "group": "Common Interest",
				"title": "Top Fields",
				"name": "Common_Interest:TOP_FIELDS",
                "visibility": false
			}
		]
	},
    "loginConfig":{
        "authSource":"gs",
        "authParam":"authkey"
    },
    "removeTools":["googleearth_plugin", "googleearth_separator"],
	"customTools":[
		{
			"ptype": "gxp_embedmapdialog",
			"actionTarget": {"target": "paneltbar", "index": 2},
			"embeddedTemplateName": "viewer",
			"showDirectURL": true
		}, {
		   "ptype": "gxp_mouseposition",
		   "displayProjectionCode":"EPSG:4326",
		   "customCss": "font-weight: bold; text-shadow: 1px 0px 0px #FAFAFA, 1px 1px 0px #FAFAFA, 0px 1px 0px #FAFAFA,-1px 1px 0px #FAFAFA, -1px 0px 0px #FAFAFA, -1px -1px 0px #FAFAFA, 0px -1px 0px #FAFAFA, 1px -1px 0px #FAFAFA, 1px 4px 5px #aeaeae;color:#050505 "
		}, {
			"ptype": "gxp_addlayer",
			"showCapabilitiesGrid": true,
			"useEvents": false,
			"showReport": false,
			"directAddLayer": false,
			"id": "addlayer"
		}, {
			"actions": ["-"], 
			"actionTarget": "paneltbar"
		}, {
			"ptype": "gxp_geolocationmenu",
			"actionTarget": {"target": "paneltbar", "index": 23},
			"toggleGroup": "toolGroup"
		}, {
			"actions": ["->"], 
			"actionTarget": "paneltbar"
		},{
             "ptype": "gxp_wmsgetfeatureinfo_menu",
             "toggleGroup": "toolGroup",
             "regex":"<table[^>]*>([\\s\\S]*)<\\/table>",
             "useTabPanel": true,
             "actionTarget": {"target": "paneltbar", "index": 20},
              "vendorParams":{"buffer":10}
         }, {
          "ptype":"gxp_printsnapshot",
          "service": "http://84.33.2.29/servicebox/",
          "customParams":{
            "outputFilename":"mapstore-print"
          },
          "actionTarget":{
            "target":"paneltbar",
            "index":5
          }
      },{
			"ptype": "gxp_help",
			"actionTarget": "paneltbar",
			"text": "Help",
			"tooltip":"MapStore Guide",
			"index": 24,
			"showOnStartup": false,
			"fileDocURL": "MapStore-Help.pdf"
        }, {
			"ptype": "gxp_about",
			"poweredbyURL": "http://www.geo-solutions.it/about/contacts/",
			"actionTarget": {"target": "panelbbar", "index": 1}
		}, {
			"ptype": "gxp_languageselector",
			"actionTarget": {"target": "panelbbar", "index": 3}
		}
	]
}
