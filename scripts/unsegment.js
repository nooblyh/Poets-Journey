var strUrl = window.location.href;
var arrUrl = strUrl.split("/");
var strPage = arrUrl[arrUrl.length - 1];
var poetName = strPage.split(".")[0];
var addOption = function(data, option) {
        // myseries是全局变量，bad practice
        var myseries = [];
        var color = ['#a6c84c', '#ffa022', '#46bee9'];
        myseries.push({
            type: 'scatter',
            hoverAnimation: false,
            coordinateSystem: 'bmap',
            color: color[0],
            symbolSize: 8,
            zlevel: 2,
            tooltip: {
                formatter: '{b}'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            data: data.map(function(dataItem) {
                return {
                    name: dataItem["results"][0]["name"],
                    value: [dataItem["results"][0]["location"]["lng"], dataItem["results"][0]["location"]["lat"]]
                };
            })
        });
        for (var i = 1; i < data.length; i++) {
            var fromItem = data[i - 1]
            var toItem = data[i];
            var res = [];
            var fromCoord = [fromItem["results"][0]["location"]["lng"], fromItem["results"][0]["location"]["lat"]];
            var toCoord = [toItem["results"][0]["location"]["lng"], toItem["results"][0]["location"]["lat"]];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: fromItem['results'][0]['name'],
                    toName: toItem['results'][0]['name'],
                    coords: [fromCoord, toCoord]
                });
            }
            myseries.push({
                name: res[0]['fromName'] + '->' + res[0]['toName'],
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: false,
                zlevel: 1,

                effect: {
                    loop: false,
                    show: true,
                    delay: (i - 1) * 4000,
                    period: 4,
                    trailLength: 0.1,
                    color: color[0],
                    symbolSize: 1.5
                },
                lineStyle: {
                    normal: {
                        color: color[1],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: res
            }, {
                name: res[0]['fromName'] + '->' + res[0]['toName'],
                type: 'lines',
                coordinateSystem: 'bmap',
                polyline: false,
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,

                effect: {
                    loop: false,
                    show: true,
                    delay: (i - 1) * 4000,
                    period: 4,
                    trailLength: 0,
                    symbol: 'image://https://08.imgmini.eastday.com/mobile/20180728/20180728003657_6ab9829ca3b0968db7f8658ba3c6c45d_1.jpeg',
                    symbolSize: 30
                },
                lineStyle: {
                    normal: {
                        color: color[0],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: res
            });
        }
        option.push({
            // backgroundColor: '#404a59',
            title: {
                text: poetName,
                subtext: 'by lyh',
                left: 'center',
                textStyle: {
                    color: '#ffa022'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            bmap: {
                center: [104.114129, 37.550339],
                zoom: 5,
                roam: true,
                mapStyle: {
                    styleJson: [{
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {

                        }
                    }, {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#FFEEDD"
                        }
                    }, {
                        "featureType": "boundary",
                        "elementType": "all",
                        "stylers": {}
                    }, {
                        "featureType": "railway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "highway",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "green",
                        "elementType": "all",
                        "stylers": {
                            "color": "#056197",
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "local",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "arterial",
                        "elementType": "labels",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "boundary",
                        "elementType": "geometry.fill",
                        "stylers": {}
                    }, {
                        "featureType": "building",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }, {
                        "featureType": "label",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }]
                }
            },
            series: myseries
        });
    }
    // 基于准备好的dom，初始化echarts图表

var option = [];
$.ajaxSettings.async = false;
$.getJSON('../coords/' + poetName + 'Coords/coord.json', function(data) {
    addOption(data, option);
});
// 为echarts对象加载数据
var myChart = echarts.init(document.getElementById('main'));
myChart.setOption(option[0]);