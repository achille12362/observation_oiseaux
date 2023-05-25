var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2022_georef.tif",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2022_georeftif_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
                            })
                        });
var format_couche_observation_haies_barthelemy_pignede_1 = new ol.format.GeoJSON();
var features_couche_observation_haies_barthelemy_pignede_1 = format_couche_observation_haies_barthelemy_pignede_1.readFeatures(json_couche_observation_haies_barthelemy_pignede_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_couche_observation_haies_barthelemy_pignede_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_couche_observation_haies_barthelemy_pignede_1.addFeatures(features_couche_observation_haies_barthelemy_pignede_1);
var lyr_couche_observation_haies_barthelemy_pignede_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_couche_observation_haies_barthelemy_pignede_1, 
                style: style_couche_observation_haies_barthelemy_pignede_1,
                interactive: true,
                title: '<img src="styles/legend/couche_observation_haies_barthelemy_pignede_1.png" /> couche_observation_haies_barthelemy_pignede'
            });
var format_Favoris1waypoints_2 = new ol.format.GeoJSON();
var features_Favoris1waypoints_2 = format_Favoris1waypoints_2.readFeatures(json_Favoris1waypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Favoris1waypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Favoris1waypoints_2.addFeatures(features_Favoris1waypoints_2);
var lyr_Favoris1waypoints_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Favoris1waypoints_2, 
                style: style_Favoris1waypoints_2,
                interactive: true,
                title: '<img src="styles/legend/Favoris1waypoints_2.png" /> Favoris(1), waypoints'
            });
var format_pointdobservationdeshaies_3 = new ol.format.GeoJSON();
var features_pointdobservationdeshaies_3 = format_pointdobservationdeshaies_3.readFeatures(json_pointdobservationdeshaies_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointdobservationdeshaies_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointdobservationdeshaies_3.addFeatures(features_pointdobservationdeshaies_3);
var lyr_pointdobservationdeshaies_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointdobservationdeshaies_3, 
                style: style_pointdobservationdeshaies_3,
                interactive: true,
                title: '<img src="styles/legend/pointdobservationdeshaies_3.png" /> point d\'observation des haies'
            });
var format_pointdobservationdeshaies_wgs84_4 = new ol.format.GeoJSON();
var features_pointdobservationdeshaies_wgs84_4 = format_pointdobservationdeshaies_wgs84_4.readFeatures(json_pointdobservationdeshaies_wgs84_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointdobservationdeshaies_wgs84_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pointdobservationdeshaies_wgs84_4.addFeatures(features_pointdobservationdeshaies_wgs84_4);
var lyr_pointdobservationdeshaies_wgs84_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointdobservationdeshaies_wgs84_4, 
                style: style_pointdobservationdeshaies_wgs84_4,
                interactive: true,
                title: '<img src="styles/legend/pointdobservationdeshaies_wgs84_4.png" /> point d\'observation des haies_wgs84'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_couche_observation_haies_barthelemy_pignede_1.setVisible(true);lyr_Favoris1waypoints_2.setVisible(true);lyr_pointdobservationdeshaies_3.setVisible(true);lyr_pointdobservationdeshaies_wgs84_4.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_couche_observation_haies_barthelemy_pignede_1,lyr_Favoris1waypoints_2,lyr_pointdobservationdeshaies_3,lyr_pointdobservationdeshaies_wgs84_4];
lyr_couche_observation_haies_barthelemy_pignede_1.set('fieldAliases', {'nb espece': 'nb espece', 'nb d\'arbre': 'nb d\'arbre', 'nb d\'etage': 'nb d\'etage', 'arb fruit': 'arb fruit', 'plante fle': 'plante fle', 'arb morts': 'arb morts', 'branche mt': 'branche mt', 'zone herbe': 'zone herbe', '+ fleurs': '+ fleurs', 'tal/fos': 'tal/fos', '+ fleus': '+ fleus', 'nom haie': 'nom haie', });
lyr_Favoris1waypoints_2.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_pointdobservationdeshaies_3.set('fieldAliases', {'name': 'name', 'coordonné': 'coordonné', 'coordonn_1': 'coordonn_1', });
lyr_pointdobservationdeshaies_wgs84_4.set('fieldAliases', {'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', 'qrcode': 'qrcode', });
lyr_couche_observation_haies_barthelemy_pignede_1.set('fieldImages', {'nb espece': 'Range', 'nb d\'arbre': 'TextEdit', 'nb d\'etage': 'Range', 'arb fruit': 'TextEdit', 'plante fle': 'TextEdit', 'arb morts': 'Range', 'branche mt': 'Range', 'zone herbe': 'TextEdit', '+ fleurs': 'TextEdit', 'tal/fos': 'TextEdit', '+ fleus': 'TextEdit', 'nom haie': 'TextEdit', });
lyr_Favoris1waypoints_2.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_pointdobservationdeshaies_3.set('fieldImages', {'name': 'TextEdit', 'coordonné': 'TextEdit', 'coordonn_1': 'TextEdit', });
lyr_pointdobservationdeshaies_wgs84_4.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'qrcode': 'ExternalResource', });
lyr_couche_observation_haies_barthelemy_pignede_1.set('fieldLabels', {'nb espece': 'no label', 'nb d\'arbre': 'no label', 'nb d\'etage': 'no label', 'arb fruit': 'no label', 'plante fle': 'no label', 'arb morts': 'no label', 'branche mt': 'no label', 'zone herbe': 'no label', '+ fleurs': 'no label', 'tal/fos': 'no label', '+ fleus': 'no label', 'nom haie': 'no label', });
lyr_Favoris1waypoints_2.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_pointdobservationdeshaies_3.set('fieldLabels', {'name': 'no label', 'coordonné': 'no label', 'coordonn_1': 'no label', });
lyr_pointdobservationdeshaies_wgs84_4.set('fieldLabels', {'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'qrcode': 'no label', });
lyr_pointdobservationdeshaies_wgs84_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});