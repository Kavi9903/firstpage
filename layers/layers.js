var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_climaticzones_1 = new ol.format.GeoJSON();
var features_climaticzones_1 = format_climaticzones_1.readFeatures(json_climaticzones_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_climaticzones_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_climaticzones_1.addFeatures(features_climaticzones_1);
var lyr_climaticzones_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_climaticzones_1, 
                style: style_climaticzones_1,
                popuplayertitle: "climatic zones",
                interactive: true,
    title: 'climatic zones<br />\
    <img src="styles/legend/climaticzones_1_0.png" /> 1.0000 - 10.4000<br />\
    <img src="styles/legend/climaticzones_1_1.png" /> 10.4000 - 19.8000<br />\
    <img src="styles/legend/climaticzones_1_2.png" /> 19.8000 - 29.2000<br />\
    <img src="styles/legend/climaticzones_1_3.png" /> 29.2000 - 38.6000<br />\
    <img src="styles/legend/climaticzones_1_4.png" /> 38.6000 - 48.0000<br />'
        });
var format_Export_Output_2 = new ol.format.GeoJSON();
var features_Export_Output_2 = format_Export_Output_2.readFeatures(json_Export_Output_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Export_Output_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2.addFeatures(features_Export_Output_2);
var lyr_Export_Output_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Export_Output_2, 
                style: style_Export_Output_2,
                popuplayertitle: "Export_Output",
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2.png" /> Export_Output'
            });
var format_lka_rlwl_250k_sdlka_3 = new ol.format.GeoJSON();
var features_lka_rlwl_250k_sdlka_3 = format_lka_rlwl_250k_sdlka_3.readFeatures(json_lka_rlwl_250k_sdlka_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lka_rlwl_250k_sdlka_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lka_rlwl_250k_sdlka_3.addFeatures(features_lka_rlwl_250k_sdlka_3);
var lyr_lka_rlwl_250k_sdlka_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lka_rlwl_250k_sdlka_3, 
                style: style_lka_rlwl_250k_sdlka_3,
                popuplayertitle: "lka_rlwl_250k_sdlka",
                interactive: true,
                title: '<img src="styles/legend/lka_rlwl_250k_sdlka_3.png" /> lka_rlwl_250k_sdlka'
            });

lyr_OSMStandard_0.setVisible(true);lyr_climaticzones_1.setVisible(true);lyr_Export_Output_2.setVisible(true);lyr_lka_rlwl_250k_sdlka_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_climaticzones_1,lyr_Export_Output_2,lyr_lka_rlwl_250k_sdlka_3];
lyr_climaticzones_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ECO_ZONE_': 'ECO_ZONE_', 'ECO_ZONE_I': 'ECO_ZONE_I', 'ZONE': 'ZONE', });
lyr_Export_Output_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HF_TYPE': 'HF_TYPE', 'HF_OWNERSH': 'HF_OWNERSH', 'HF_NAME': 'HF_NAME', 'HF_ADDRESS': 'HF_ADDRESS', 'HF_POSTAL_': 'HF_POSTAL_', 'HFF_WARD_N': 'HFF_WARD_N', 'HF_TELEPHO': 'HF_TELEPHO', 'HF_OFFICER': 'HF_OFFICER', });
lyr_lka_rlwl_250k_sdlka_3.set('fieldAliases', {'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'RAILWAY_': 'RAILWAY_', 'RAILWAY_ID': 'RAILWAY_ID', });
lyr_climaticzones_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ECO_ZONE_': 'TextEdit', 'ECO_ZONE_I': 'TextEdit', 'ZONE': 'TextEdit', });
lyr_Export_Output_2.set('fieldImages', {'OBJECTID': '', 'HF_TYPE': '', 'HF_OWNERSH': '', 'HF_NAME': '', 'HF_ADDRESS': '', 'HF_POSTAL_': '', 'HFF_WARD_N': '', 'HF_TELEPHO': '', 'HF_OFFICER': '', });
lyr_lka_rlwl_250k_sdlka_3.set('fieldImages', {'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'RAILWAY_': 'TextEdit', 'RAILWAY_ID': 'TextEdit', });
lyr_climaticzones_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'ECO_ZONE_': 'no label', 'ECO_ZONE_I': 'no label', 'ZONE': 'no label', });
lyr_Export_Output_2.set('fieldLabels', {'OBJECTID': 'no label', 'HF_TYPE': 'no label', 'HF_OWNERSH': 'no label', 'HF_NAME': 'no label', 'HF_ADDRESS': 'no label', 'HF_POSTAL_': 'no label', 'HFF_WARD_N': 'no label', 'HF_TELEPHO': 'no label', 'HF_OFFICER': 'no label', });
lyr_lka_rlwl_250k_sdlka_3.set('fieldLabels', {'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'RAILWAY_': 'no label', 'RAILWAY_ID': 'no label', });
lyr_lka_rlwl_250k_sdlka_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});