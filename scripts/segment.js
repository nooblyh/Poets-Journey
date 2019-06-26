//获取诗人名字
var strUrl = window.location.href;
var arrUrl = strUrl.split("/");
var strPage = arrUrl[arrUrl.length - 1];
//var poetName = strPage.split(".")[0];

for (var i = 0; i < poetsInfo.length; i++) {
    if (poetsInfo[i]["name"] == poetName) {
        poetImg = poetsInfo[i]["img"];
    }
}

var baseOption = {
    animation: false,
    title: {
        //input name
        text: poetName,
        left: 'center',
        textStyle: {
            color: '#ffa022'
        }
    },
    tooltip: {
        trigger: 'item'
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
        data: [],
        label: {
            formatter: '{value}'
        }
    }
}

var myChart = echarts.init(document.getElementById('main'));

// 传入coordX.json的字符串和allOption数组，根据字符串创建option，push到allOption中
var addOption = function(data, allOption) {
    var myseries = [];
    var color = ['#a6c84c', '#ffa022', '#46bee9']; //设置路线和人名颜色


    myseries.push({
        type: 'scatter',
        coordinateSystem: 'bmap',
        zlevel: 2,
        color: '#a6c8a1',
        tooltip: {
            formatter: '{b}' //b代表data里的name
        },
        label: {
            normal: {
                show: true,
                fontSize: 26,
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

    //画线
    for (let i = 1; i < data.length; i++) {
        var fromItem = data[i - 1] //
        var toItem = data[i];
        var res = []; //
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

            //核心代码
            effect: {
                loop: false,
                show: true,
                delay: (i - 1) * 4000,
                period: 4,
                trailLength: 0.7,
                color: color[2],
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
            symbolSize: 18,
            effect: {
                loop: false,
                show: true,
                delay: (i - 1) * 4000,
                period: 4,
                trailLength: 0,
                symbol: "image://" + poetImg,
                symbolSize: 40
            },
            lineStyle: {
                normal: {
                    color: color[0],
                    width: 3,
                    opacity: 0.6,
                    curveness: 0.2
                }
            },
            data: res
        });
    }





    var oneOption = {
        // backgroundColor: '#404a59',
        // 地图相关
        bmap: {
            center: [data[Math.floor(data.length / 2)]["results"][0]["location"]["lng"],
                data[Math.floor(data.length / 2)]["results"][0]["location"]["lat"]
            ],
            zoom: 7,
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
        timeline: {
            playInterval: (data.length - 1) * 4000 //设置一个年龄段的呈现时间（点越多时间越长）
        },

        series: myseries
    };


    // 为echarts对象加载数据
    allOption.push(oneOption);

}

var allOption = [];
$.ajaxSettings.async = false;
for (let stage = 1; stage < 60; stage++) {

    //input coordsname

    $.getJSON('../coords/' + poetName + 'Coords/coord' + stage + '.json', function(data) {
        addOption(data, allOption);
    });
}

function string2Array(stringObj) { //年龄段字符串转为列表
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

myChart.on('click', function() {
    document.getElementById("poetInfo").innerHTML = "";
    document.getElementById("poet").innerHTML = "";
    var highestTimeoutId = setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i); //清除所有的延时事件，不显示诗句
    }
});