var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Positronlabelsonly_1 = new ol.layer.Tile({
            'title': 'Positron [labels only]',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png'
            })
        });
var format_232_2 = new ol.format.GeoJSON();
var features_232_2 = format_232_2.readFeatures(json_232_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_232_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_232_2.addFeatures(features_232_2);
var lyr_232_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_232_2, 
                style: style_232_2,
                popuplayertitle: "232",
                interactive: true,
                title: '<img src="styles/legend/232_2.png" /> 232'
            });
var format_120_3 = new ol.format.GeoJSON();
var features_120_3 = format_120_3.readFeatures(json_120_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_120_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_120_3.addFeatures(features_120_3);
var lyr_120_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_120_3, 
                style: style_120_3,
                popuplayertitle: "120",
                interactive: true,
                title: '<img src="styles/legend/120_3.png" /> 120'
            });
var format_117_4 = new ol.format.GeoJSON();
var features_117_4 = format_117_4.readFeatures(json_117_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_117_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_117_4.addFeatures(features_117_4);
var lyr_117_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_117_4, 
                style: style_117_4,
                popuplayertitle: "117",
                interactive: true,
                title: '<img src="styles/legend/117_4.png" /> 117'
            });
var format_111_5 = new ol.format.GeoJSON();
var features_111_5 = format_111_5.readFeatures(json_111_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_111_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_111_5.addFeatures(features_111_5);
var lyr_111_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_111_5, 
                style: style_111_5,
                popuplayertitle: "111",
                interactive: true,
                title: '<img src="styles/legend/111_5.png" /> 111'
            });
var format_K_6 = new ol.format.GeoJSON();
var features_K_6 = format_K_6.readFeatures(json_K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_6.addFeatures(features_K_6);
var lyr_K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_K_6, 
                style: style_K_6,
                popuplayertitle: "K",
                interactive: true,
                title: '<img src="styles/legend/K_6.png" /> K'
            });
var format_C_7 = new ol.format.GeoJSON();
var features_C_7 = format_C_7.readFeatures(json_C_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_7.addFeatures(features_C_7);
var lyr_C_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_7, 
                style: style_C_7,
                popuplayertitle: "C ",
                interactive: true,
                title: '<img src="styles/legend/C_7.png" /> C '
            });
var format_237_8 = new ol.format.GeoJSON();
var features_237_8 = format_237_8.readFeatures(json_237_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_237_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_237_8.addFeatures(features_237_8);
var lyr_237_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_237_8, 
                style: style_237_8,
                popuplayertitle: "237",
                interactive: true,
                title: '<img src="styles/legend/237_8.png" /> 237'
            });
var format_169_9 = new ol.format.GeoJSON();
var features_169_9 = format_169_9.readFeatures(json_169_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_169_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_169_9.addFeatures(features_169_9);
var lyr_169_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_169_9, 
                style: style_169_9,
                popuplayertitle: "169",
                interactive: true,
                title: '<img src="styles/legend/169_9.png" /> 169'
            });
var format_487_10 = new ol.format.GeoJSON();
var features_487_10 = format_487_10.readFeatures(json_487_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_487_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_487_10.addFeatures(features_487_10);
var lyr_487_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_487_10, 
                style: style_487_10,
                popuplayertitle: "487",
                interactive: true,
                title: '<img src="styles/legend/487_10.png" /> 487'
            });
var format_106_11 = new ol.format.GeoJSON();
var features_106_11 = format_106_11.readFeatures(json_106_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_106_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_106_11.addFeatures(features_106_11);
var lyr_106_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_106_11, 
                style: style_106_11,
                popuplayertitle: "106",
                interactive: true,
                title: '<img src="styles/legend/106_11.png" /> 106'
            });
var format_96_12 = new ol.format.GeoJSON();
var features_96_12 = format_96_12.readFeatures(json_96_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_96_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_96_12.addFeatures(features_96_12);
var lyr_96_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_96_12, 
                style: style_96_12,
                popuplayertitle: "96",
                interactive: true,
                title: '<img src="styles/legend/96_12.png" /> 96'
            });
var format_76_13 = new ol.format.GeoJSON();
var features_76_13 = format_76_13.readFeatures(json_76_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_76_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_76_13.addFeatures(features_76_13);
var lyr_76_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_76_13, 
                style: style_76_13,
                popuplayertitle: "76",
                interactive: true,
                title: '<img src="styles/legend/76_13.png" /> 76'
            });
var format_FlyawayLocation_14 = new ol.format.GeoJSON();
var features_FlyawayLocation_14 = format_FlyawayLocation_14.readFeatures(json_FlyawayLocation_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlyawayLocation_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlyawayLocation_14.addFeatures(features_FlyawayLocation_14);
var lyr_FlyawayLocation_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlyawayLocation_14, 
                style: style_FlyawayLocation_14,
                popuplayertitle: "Flyaway Location",
                interactive: true,
                title: '<img src="styles/legend/FlyawayLocation_14.png" /> Flyaway Location'
            });
var format_LAX_15 = new ol.format.GeoJSON();
var features_LAX_15 = format_LAX_15.readFeatures(json_LAX_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAX_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAX_15.addFeatures(features_LAX_15);
var lyr_LAX_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LAX_15, 
                style: style_LAX_15,
                popuplayertitle: "LAX",
                interactive: true,
                title: '<img src="styles/legend/LAX_15.png" /> LAX'
            });
var group_BusLinesUnionStation = new ol.layer.Group({
                                layers: [lyr_487_10,lyr_106_11,lyr_96_12,lyr_76_13,],
                                fold: "open",
                                title: "Bus Lines Union Station"});
var group_BusLinestoVanNuys = new ol.layer.Group({
                                layers: [lyr_237_8,lyr_169_9,],
                                fold: "open",
                                title: "Bus Lines to Van Nuys"});
var group_RailtoLAX = new ol.layer.Group({
                                layers: [lyr_K_6,lyr_C_7,],
                                fold: "open",
                                title: "Rail to LAX"});
var group_BusLinestoLAX = new ol.layer.Group({
                                layers: [lyr_232_2,lyr_120_3,lyr_117_4,lyr_111_5,],
                                fold: "open",
                                title: "Bus Lines to LAX"});

lyr_ESRIGraylight_0.setVisible(true);lyr_Positronlabelsonly_1.setVisible(true);lyr_232_2.setVisible(true);lyr_120_3.setVisible(true);lyr_117_4.setVisible(true);lyr_111_5.setVisible(true);lyr_K_6.setVisible(true);lyr_C_7.setVisible(true);lyr_237_8.setVisible(true);lyr_169_9.setVisible(true);lyr_487_10.setVisible(true);lyr_106_11.setVisible(true);lyr_96_12.setVisible(true);lyr_76_13.setVisible(true);lyr_FlyawayLocation_14.setVisible(true);lyr_LAX_15.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Positronlabelsonly_1,group_BusLinestoLAX,group_RailtoLAX,group_BusLinestoVanNuys,group_BusLinesUnionStation,lyr_FlyawayLocation_14,lyr_LAX_15];
lyr_232_2.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_120_3.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_117_4.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_111_5.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_K_6.set('fieldAliases', {'Id': 'Id', 'shape_id': 'shape_id', 'route_id': 'route_id', 'agency_id': 'agency_id', 'rt_shrt_nm': 'rt_shrt_nm', 'rt_long_nm': 'rt_long_nm', 'route_desc': 'route_desc', 'route_type': 'route_type', 'rt_typ_txt': 'rt_typ_txt', 'route_url': 'route_url', 'rt_color': 'rt_color', 'rt_col_fmt': 'rt_col_fmt', 'rt_txt_col': 'rt_txt_col', 'rt_txt_fmt': 'rt_txt_fmt', });
lyr_C_7.set('fieldAliases', {'Id': 'Id', });
lyr_237_8.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_169_9.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_487_10.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_106_11.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_96_12.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_76_13.set('fieldAliases', {'VAR_ROUTE': 'VAR_ROUTE', 'VAR_IDENT': 'VAR_IDENT', 'VAR_DIREC': 'VAR_DIREC', 'VAR_DESCR': 'VAR_DESCR', });
lyr_FlyawayLocation_14.set('fieldAliases', {'Name': 'Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zipcode': 'Zipcode', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Accuracy Score': 'Accuracy Score', 'Accuracy Type': 'Accuracy Type', 'Number': 'Number', 'Street': 'Street', 'Unit Type': 'Unit Type', 'Unit Number': 'Unit Number', 'City_1': 'City_1', 'State_1': 'State_1', 'County': 'County', 'Zip': 'Zip', 'Country': 'Country', 'Source': 'Source', });
lyr_LAX_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'CAT1': 'CAT1', 'CAT2': 'CAT2', 'CAT3': 'CAT3', 'SOURCE': 'SOURCE', 'LMS_ID': 'LMS_ID', 'DESCRIPTIO': 'DESCRIPTIO', 'DATE_UPDAT': 'DATE_UPDAT', 'Shapearea': 'Shapearea', 'Shapelen': 'Shapelen', });
lyr_232_2.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_120_3.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_117_4.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_111_5.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_K_6.set('fieldImages', {'Id': 'Range', 'shape_id': 'TextEdit', 'route_id': 'TextEdit', 'agency_id': 'TextEdit', 'rt_shrt_nm': 'TextEdit', 'rt_long_nm': 'TextEdit', 'route_desc': 'TextEdit', 'route_type': 'Range', 'rt_typ_txt': 'TextEdit', 'route_url': 'TextEdit', 'rt_color': 'TextEdit', 'rt_col_fmt': 'TextEdit', 'rt_txt_col': 'TextEdit', 'rt_txt_fmt': 'TextEdit', });
lyr_C_7.set('fieldImages', {'Id': 'Range', });
lyr_237_8.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_169_9.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_487_10.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_106_11.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_96_12.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_76_13.set('fieldImages', {'VAR_ROUTE': 'TextEdit', 'VAR_IDENT': 'TextEdit', 'VAR_DIREC': 'TextEdit', 'VAR_DESCR': 'TextEdit', });
lyr_FlyawayLocation_14.set('fieldImages', {'Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zipcode': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Accuracy Score': 'CheckBox', 'Accuracy Type': 'TextEdit', 'Number': 'Range', 'Street': 'TextEdit', 'Unit Type': 'TextEdit', 'Unit Number': 'TextEdit', 'City_1': 'TextEdit', 'State_1': 'TextEdit', 'County': 'TextEdit', 'Zip': 'Range', 'Country': 'TextEdit', 'Source': 'TextEdit', });
lyr_LAX_15.set('fieldImages', {'OBJECTID': 'Range', 'NAME': 'TextEdit', 'CAT1': 'TextEdit', 'CAT2': 'TextEdit', 'CAT3': 'TextEdit', 'SOURCE': 'TextEdit', 'LMS_ID': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'DATE_UPDAT': 'DateTime', 'Shapearea': 'TextEdit', 'Shapelen': 'TextEdit', });
lyr_232_2.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_120_3.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_117_4.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_111_5.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_K_6.set('fieldLabels', {'Id': 'no label', 'shape_id': 'no label', 'route_id': 'no label', 'agency_id': 'no label', 'rt_shrt_nm': 'no label', 'rt_long_nm': 'no label', 'route_desc': 'no label', 'route_type': 'no label', 'rt_typ_txt': 'no label', 'route_url': 'no label', 'rt_color': 'no label', 'rt_col_fmt': 'no label', 'rt_txt_col': 'no label', 'rt_txt_fmt': 'no label', });
lyr_C_7.set('fieldLabels', {'Id': 'no label', });
lyr_237_8.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_169_9.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_487_10.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_106_11.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_96_12.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_76_13.set('fieldLabels', {'VAR_ROUTE': 'no label', 'VAR_IDENT': 'no label', 'VAR_DIREC': 'no label', 'VAR_DESCR': 'no label', });
lyr_FlyawayLocation_14.set('fieldLabels', {'Name': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zipcode': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Accuracy Score': 'no label', 'Accuracy Type': 'no label', 'Number': 'no label', 'Street': 'no label', 'Unit Type': 'no label', 'Unit Number': 'no label', 'City_1': 'no label', 'State_1': 'no label', 'County': 'no label', 'Zip': 'no label', 'Country': 'no label', 'Source': 'no label', });
lyr_LAX_15.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'CAT1': 'no label', 'CAT2': 'no label', 'CAT3': 'no label', 'SOURCE': 'no label', 'LMS_ID': 'no label', 'DESCRIPTIO': 'no label', 'DATE_UPDAT': 'no label', 'Shapearea': 'no label', 'Shapelen': 'hidden field', });
lyr_LAX_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});