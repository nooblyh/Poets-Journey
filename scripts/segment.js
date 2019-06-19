var strUrl = window.location.href;
var arrUrl = strUrl.split("/");
var strPage = arrUrl[arrUrl.length - 1];
var poetName = strPage.split(".")[0];
var baseOption = {
    animation: false,
    title: {
        //input name
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
    // 地图相关
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
    timeline: {
        // y: 0,
        axisType: 'category',
        bottom: 20,
        // realtime: false,
        loop: true,
        autoPlay: true,
        currentIndex: 0,
        // controlStyle: {
        //     position: 'left'
        // },
        data: ['0-18岁', '19-23岁', '23-25岁', '25-26岁', '27-29岁', '29-31岁', '31-35岁', '35-37岁', '37-39岁', '39-40岁', '40-43岁', '43-44岁', '44-45岁', '45-46岁', '46-47岁', '47岁', '48-49岁', '49-53岁', '53岁', '53-54岁', '54-55岁', '55-56岁', '56-57岁', '57-58岁', '58-59岁', '59-60岁', '60-61岁'],
        label: {
            formatter: '{value}'
        }
    }
}

var myChart = echarts.init(document.getElementById('main'));

// 传入coordX.json的字符串和allOption数组，根据字符串创建option，push到allOption中
var addOption = function(data, allOption) {
    var myseries = [];
    var color = ['#a6c84c', '#ffa022', '#46bee9'];


    myseries.push({
        type: 'scatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        color: color[0],
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


    for (let i = 1; i < data.length; i++) {
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
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[0],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: res,
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
                symbolSize: 15
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





    var oneOption = {
        // backgroundColor: '#404a59',
        timeline: {
            playInterval: (data.length - 1) * 4000
        },

        series: myseries
    };


    // 为echarts对象加载数据
    allOption.push(oneOption);

}

var allOption = [];
for (let stage = 1; stage < 30; stage++) {
    $.ajaxSettings.async = false;
    //input coordsname
    $.getJSON('../coords/' + poetName + 'Coords/coord' + stage + '.json', function(data) {
        addOption(data, allOption);
    });
}
tmp = [];
$.ajaxSettings.async = false;
$.getJSON('../stages/' + poetName + 'Stage.txt', function(data) {
    tmp.push(data);
});

function string2Array(stringObj) {
    stringObj = stringObj.replace(/\[([\w, ]*)\]/, "$1");
    if (stringObj.indexOf("[") == 0) {
        stringObj = stringObj.substring(0, stringObj.length - 1);
    }
    var arr = stringObj.split(",");
    var newArray = []; //new Array();  
    for (var i = 0; i < arr.length; i++) {
        var arrOne = arr[i].substring(2, arr[i].length - 1);
        newArray.push(arrOne);
    }
    // console.log(newArray);  
    return newArray;
};

var httpobj = $.ajax({ url: '../stages/' + poetName + 'Stage.txt', async: false });
baseOption["timeline"]["data"] = string2Array(httpobj.responseText);

option = {
    baseOption: baseOption,
    options: allOption
}

myChart.setOption(option);

//时间轴变化时的逻辑
myChart.on('timelineChanged', function() {
    //保证重新加载时当前页不变
    x = myChart.getOption().timeline[0].currentIndex;
    baseOption["timeline"]["currentIndex"] = x;
    //清空option，重新加载
    myChart.clear();
    myChart.setOption(option);
});