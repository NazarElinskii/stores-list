mapboxgl.accessToken = 'pk.eyJ1IjoibmF6YXJlbCIsImEiOiJjam4zZWVoZHY1M2l6M3ZueHQxMGZ1ajFkIn0.EfE8H4mABDisyWHFTNfxsA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [27.57, 53.87 ],
    zoom: 10
})

var json = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/src/tableData.json",
        'dataType': "json",
        success: function (data) {
            json = data;
        }
    });
    return json;
})(); 

var objs=JSON.stringify(json);
var coord= JSON.parse(objs);


coord.forEach(item => {
    var marker = new mapboxgl.Marker()
        .setLngLat([item["lon"],item["lat"]])
        .addTo(map);
});





