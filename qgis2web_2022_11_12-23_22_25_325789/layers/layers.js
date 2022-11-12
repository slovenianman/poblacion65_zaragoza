var wms_layers = [];


        var lyr_Googleearth_0 = new ol.layer.Tile({
            'title': 'Google earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_poblacin65_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "población > 65",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/poblacin65_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-120784.855488, 5090603.865013, -83661.992348, 5134061.609257]
                            })
                        });
var format_Concentracinpoblacin65_2 = new ol.format.GeoJSON();
var features_Concentracinpoblacin65_2 = format_Concentracinpoblacin65_2.readFeatures(json_Concentracinpoblacin65_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Concentracinpoblacin65_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Concentracinpoblacin65_2.addFeatures(features_Concentracinpoblacin65_2);
var lyr_Concentracinpoblacin65_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Concentracinpoblacin65_2, 
                style: style_Concentracinpoblacin65_2,
                interactive: true,
    title: 'Concentración población >65<br />\
    <img src="styles/legend/Concentracinpoblacin65_2_0.png" /> menos de 1100<br />\
    <img src="styles/legend/Concentracinpoblacin65_2_1.png" /> 2200<br />\
    <img src="styles/legend/Concentracinpoblacin65_2_2.png" /> más de 2200<br />\
    <img src="styles/legend/Concentracinpoblacin65_2_3.png" /> <br />'
        });

lyr_Googleearth_0.setVisible(true);lyr_poblacin65_1.setVisible(true);lyr_Concentracinpoblacin65_2.setVisible(true);
var layersList = [lyr_Googleearth_0,lyr_poblacin65_1,lyr_Concentracinpoblacin65_2];
lyr_Concentracinpoblacin65_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Concentracinpoblacin65_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_Concentracinpoblacin65_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label', });
lyr_Concentracinpoblacin65_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});