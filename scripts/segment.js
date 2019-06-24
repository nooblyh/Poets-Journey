//获取诗人名字
var strUrl = window.location.href;
var arrUrl = strUrl.split("/");
var strPage = arrUrl[arrUrl.length - 1];
//var poetName = strPage.split(".")[0];


var img = [{
    "name": "LiBai",
    "img": "image://https://08.imgmini.eastday.com/mobile/20180728/20180728003657_6ab9829ca3b0968db7f8658ba3c6c45d_1.jpeg"
}, {
    "name": "DuFu",
    "img": "image://https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3579140198,216816410&fm=26&gp=0.jpg"
}, {
    "name": "MengHaoRan",
    "img": "image://data:image/jpeg;base64,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"
}, {
    "name": "WangWei",
    "img": "image://data:image/jpeg;base64,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"
}, {
    "name": "WangChangLing",
    "img": "image://data:image/jpeg;base64,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"
}, {
    "name": "LiQingZhao",
    "img": "image://data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAiwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcBAAj/xABCEAABAwIEAgYGCAMHBQAAAAABAAIDBBEFEiExE0EGUWFxgbEHIjKRkqEUJDM0QsHR8CNSYhVDU3KisvEWY3OC4f/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAQIFAAb/xAAmEQACAwACAwABAwUAAAAAAAAAAQIDEQQhEjFBIgUyURNCYYGR/9oADAMBAAIRAxEAPwCzyQRX0ZHe/wDIEjgx29hnwhSHRnMTfY2SMuhXlezYQgRx2+zj+ELnDizfZM8GBLAtuvHQqdZwgRxf4bAO1qXwobfZR/ClN7l0aKdIEtih34UfwhdEcfOJnwhLva1yO4roGq56donhx/4UfwheEcR/uo/hH6JwjRcaF2nDXBivpEz4Qu8KO32TPhCcIF91whStOENiiv8AZR/CFx0Ud/so/hCXbVedyKt2cNcKL/CZ8ISTDH/JH8ITy5bZT2cNcGO3sR/CEOqmsE7gA23cOruReyEVo+tSa9XkrxZDDkjbOPIXTf4dE9NqTom9LHqS+EoQWtPMpmd8cLHSzSCONou57iAAO0lQcdxunwaifV1PsgepGPakPYsg6Q9Ja/Hai9S8sp2+zTMJyDv6z2pvj8WVvfpAbb1Dr6aoel2A8ThR4hFI/wDouR77WVR6S+kKoc99PgOWOMafSnAEu7Wg+aozZeHRSObo97wy46gNUxYuOTKS47Nta/UtKvg1QafsUlyJyQ9VV9dVyGSpr6iV175nSH9URwvpBj9FG5mH4hVBriA4EB9viBsn4MNZh8BmfC58gANxGXWvyBShRVVcwA1DKQuYH8ANzHXbNqCLp2UKlH88/wBC8ZTb/EkM6YdJ6Z15cYbcf3crI3X8Mt/JXHAfSPh0tOBjMnAqP+3E4tKzLEcJqqH15TxIiQOI3a55W35KCW3cBc3S1nHptXS/4FjZZB+zeKbpf0eqXBseK0zXE7SvyH/UjMb45W54ZGvaebXXC+b8pd3DckKXQV1bQOz0VTPTPB9UxPLbnuS0/wBOj/aw8eU/qPogN3ukuAWV4D6RsQppGsxhgq4T7T2gMkb29R+S03DcQo8VomVdBO2WF+zhyPURyPYkLuPZV79DNdsZ+h0AL1tEsMsvEIQUbshNb96f4eSNWFkGrx9bk8PJXiVYelsTcjVR329m/PrUl2h181EnNmyEb2QV2zjIvSFiBrsXkgYSY4PUAB0vfVVOwLdgCeo9iLY9G818znj1nOcT33QjI7kOq9jZejpiowSRlTeybJ+E0ctRxpomB0VA0VU13tBDAQDYOIudtByKOSUlHX47f6XKHQxNLouECADbY+N9femuhGEYjWOr5KbDI66AUxjlEkQeQSQ6zCfZfYbotDSUsszq+BodJM0DM1xN22vcAkdQ7VS6zxfQSuKkuzuSNkbo5JLg5QS4XIF9gPd8tlFqqHIZZZIg+IkSvBFuK4aNbb+Uc+0r1Zi9NTxETTB8rAQIqe+p6y6+471WK+uqMRcOJIWw3sIs2gGwv1ntQq42TesvOUEsRHr5KmaYNnqDILl2USZmgnWwsbJtuXPodAuxUri/V+lh2o1h+DOqJBw5QOfrAgJtyjFdi+OQMijMl2NZfTQ2uVM+gPBJEbwSb3A81bqDo0GgOkDeJ1t5qxU+EQhgBYEpZy4xfQeHHkzKJIxFfiMLd9LWspvR7H6zAKnj0RDmOP8AFgcfVkHb29q0iqwCnqWlskYsdLWCpWL9Fpaapy04zxg6XFirQ5Fdq8WdKmdb1Gp4FjFLjuHNrKN2mz43e0x3MH96ohusd6JVlTgHSKNkwLYah4ilZfQg7H99a2JrgWgjUFZ3IpVUuvQ3VZ5rs5yQavH1uTw8ka3Qav8Avcnh5IUAjDr73J7Uy6POHA2LTyUh2vvSRzS6OKF0j6HfSp3S0zmguJJuhdF0Hljd/He1w627FaaQOxVrpvi39kYJJJG7LUy/woedidz4BPVX2yyCATqgl5MqNZ0trejEs9H0fmZG99mSkxhwuL6i/MKiionEIgM0xgBvk4hyjwXp3PJed3D1jdRnZn8ybjay2IQ8Vgg5a9HHNNrE6HROZSHa7JmF5LnDXTsUqMOe8N9ou6grEHYYnSTn1b87D/hX3ovRvcxjiLDuUvo5gMUVK180bTI7W+UKwRiCmb68kcfYXALL5HJ8vxiPU0Z+Uh2GAADRTmQ6CyYp5oZdYZY3j+hwKmN135LOe/RzV8E8EHvTE1Mx5IcOSmjvTUmxUps7DPvSFhnAp4q+msxzZAxxA111B8CFZ+huLy1+HsbUHM7hgtfz6iFF6dNY/o1WZj7LQ4d4IQj0XyOlhmiNwYXW8Dr+Sf8A38bX8FX+N2L6aO1txog2IN+uSeHkjLBcaaWQbED9ck8PIJSPsOw7LudOd0jrXZdXG4HvSWc7BLIkaqHiONznbAElYz03xt2LYnlaSIqcua1oHNbJWRGWmka0G7mkWWH43hNVQ1k3GicGZzd3I6rS4Cj5Nv2K8rcWAcuc7Nre1jdG8U6NVNJE19OOK1rRmboHB1rkdqFxwyHTL36bIpBQV9Ro0TOA1A/S61JtrOxSONPoDRU7ovajc119RYqxdFcLdV4hG532cexGqdOAVEOH/SqpxDMt2g3urP0NpeFSGUtsZDppyS3IvSrbQWmpuxJh+RgbCGNu3T8Jshz8Mw91+NTRONtyLko0GBzbfPqVT6SU+LQTsdSVskURvrHGHW79Fl1Jylm4aM8UfWj8/RrDHnjQ076WS2j4bsPvCJ4W3EaNwjkqDVQbAvADh48/FVPAsZ6Th7jVRCrpYm5pS9gY4DnYiwJ7OxXenk4ga5nsuAIRblOHUnoOvwn2uglE69tEmWRrQbm3jZNGQRssRdx2CEYthsdcSamGRzf6XkWS8Y6+wr/wDfSNVcLACwHWeRsYG9+Z8ioPolsJMQbbUlh7rX/VBemVGMPFNRw1UskLyZRFK4uLDtudefyVm9FFE5lFWVTho94Yw2ttv5habiocXr6Ja5Xl/GgCB4j98k8PJHAgmI/fJPDyWfH2MsPSDVcbtp8ilvGpHUUkJVFzjuSyn0oYm1+JNoKdzcsbQ6W3824B+S1GV5Gwu7qWBY8ZZsXrppTmfJUPcT3nT5WWj+nwTm5fwKcqWRwgNkLbG9nW3C0boTjdHLRNilMbaiMG9zYvGvrLNQfV15HVXH0a4fFXY5IZZaeOOOmkdee7W5rWG1tefgtPkVxlDsXpscJFpxcivpv4OV7eIALbX7P3yRXDadsFPFG02DQB3pnDoGmmiOX2SSNO9FYoxYaLEsn14mpGK/cLaAAuPY17bOF08G2A0XcvUEBMswe7D6d987BY7iyfija11mtDWtFgB1J51hYHmuD2tAreTIxALHXVobM+hcGSNaQ12/LS19N1UaOv6TslaX1ZqMzwDTyMbfLzNxt4rRmQMkMucA3dbZRqmmipaaZ8LQJAyzD1Hkm6rlFeLWgp1uT3TJMdrDieLz1NzluGxDqaNB+q2Dobh/8AZnR2kgJu5zA92nM6nzVNwXobNJWxmZloha5J/D1LTGxtYyzRoBojcq6LgoRF6YNScmeBCBYiD9Nk8PII60aIJiB+uSeHkEnD2MssLhfU9ZSL8kp+26Zvvp7ksiQD01xN2G4NUTRuyykZWHtOn5rFqmbOT62Z3MrRPSvLI2mpWNvkMnrc9bfv3LMzm5HXmVucGtKvf5M/ky2eHh2DMtJ9G2A/TYp3OJjBY52Yamw0HzN/BZ3BE6R/DjF3ONgOta90ep5qGnY2F7o3BuXM062V+XaoRSZFEHJtoI0EdoACNbqc2NNQMyG1rC2iks2WFKWs1I9Ls4GjkV5zdQl25oXi8tdDEJKR0Nmn1w9pOngdFEVrwslrJM7ZQ4PiDXFv4XHdRqeuJlkjqYeE5tstjmzfLuQl+M4izKZwxjTuWMu3zJTtHizKqpEIDRfUkOO/PRGUGkWlVKK0MwvNnkjLdxOvUlwsE8tyLsZrrzKba1znhkZGY87bdqJRRNiYGt5Ku4DYuMNa0AbALpeOSTcXSXFRpUVm0QXEPvcnh5BFgdEHr/vcnh5IkPZVoPuOpBOiaNietSHgZj+iZI1KVTLFJ9JsbnYQwxtBPEF9Nur5rKiCbm+nats6XUP0zDHxDd2oPURqCsxGEu4/DMEgcTq3KLrb4ViVWCHIh+ej3RDDvpGJMeW3EbcxPatSpYg1vqiw5ID0bw4UlMXWsXKzUwyi1tElyrf6kxqiHjE69pDVyJ99O1POsQo00Tr54zlcOY2SuB0Sb6JmeIyty3Fjz5JkVRYP47Mmlg4ahPNniLdJGHuK7xaJANRg0zJS6GYNaT7NtlMw+hMJLGXklfrmtbT8lPu+dxbAM5PPZo7yp9LTNp2ZRq7dzusq/k87Jdsms0TS0ohbcm7ju7rTzmhLSHFVKCCAkkapd7pJIUo44G3KC1/3uTw8kZug1f8Ae5PDyRIeysiyPF00RqpD9yRsOSYc9t73ACWSO0h4gT9Hyt3c73DmhEtEBEDBT3LjYvDgT263RTEZYn8OLitaSbk32CT/AAmRgtexrQLausmoLoHN9g6MyRgB0UjBYbsv5KZTzNI0NyNxsQnBLC6+WWM9oeF7hMm9oNcesOufeocEWVr+jocCLrjtbJsxuj0ac/8ASTr/APU3JLdpA0I5W1HghuLQSMkzsPDkrY2u1aBm258kVNPC7V0bD/6oLSzMdUSROF2vs2/drb5oxTzZ2lpN3s0NufauaKSfY80BrdrJO64911wKpIpNu5pV0hylIkSFw+PuXUk7qxxw2QavP1uTw8kYAve6DVw+tP8ADyV4eyGWKvzPheyP2pfUbbrP7PuTf9n0gNxCCe1xI9yfAD6h8m4jFh38/l5pxuoBKitdYDb7Ib4YowwRwQte51gRGNr3PL93XKmippmFstPGQd8osfknm/xZnSAeq27GfmfEj5Jx3aEQqB30T43EU4EjBoGmwc3u6/NNxNkfmORjraaGzh4HY9iMNFy8HkbLk1M2UXJc2TlI3cd/WFZEMGZ3Xs15Dt7PC7IGzW4wyPGgkb+/NQ8cxmLBJYY8Wge2mmNm1LWZ479vMKVTywVkLZ6KobLE4aEOuD4qzi83OiqkiNNTvjky2Azahw/EetSmSlzuIDlkcBfqvt+iSXAAxyA2P4T5gpi/CcGykm/4uduvw0Q/HGE8vJE+GvbIXtOVzme3w3XLP8zdx5KWHAgFpBadiOazXpl9LwfFqXHMPkMcmYRSm/quPIEdR196uuC4hBi9A2vw+zJDpNTk6MfzHZ381azj5FTj6IhbraYWukuCTFI19xYgt0c07tSnpfMDCQEm6Xbmkk2UnCUHrvvUnh5I1fVB6/73J4eSvAhllY0RM4d7259Z5lNVMpY0RsuJJLhpG7RzPh52Tz7ZjzuoULuLUPm3b7LO4c/EqUvoAlRNDGNa0WaBYJe+h5pOwShfa+67CRkG08zfH/SE+w6Xuo0ulW62xjHmR+akRj1B181b6cNV9HTYjRy0lbE2WnlbaRjhuP17VjOP4ZivQLFxJQVMj6OY5oZTq139Lxtcf8LbR+SHY5hUGM4VLQVIFni7HW9h3Io1Fvg8l6Bzhq1FIwLp3RYk5lLi8QpJ3DR3907x/D4q0via6PL7bDyPLuKxTGcNqaSvmoKmMMmidZ5PPqt2Ip0c6VYjgeSCS9VRbcIn1mf5SfLyTVnGTXlADG3HjLt0zpDWdHqkMBc9jTf/ADN1B/LxCovRLF6nAcUFVHM58DgGzw3uHsH5jktIwzFKLFo5TSSh8cjPWHNp2II5HZY9K6SCqlpBpw3uZfnYFTx1sXCR1j7TR9CQvhxGmhraOVrhIwOhk5OaevsXmPD2ncPabPafwlZ/6LOkbWVUnR+peA1xL6Zx/mAu5n5jxV/r4HZhUwEiVrfWA/G387JC6lwl4jVdmrRe26Se5IjkzWDxZxFwBs4dYXjYc0DGgq7OZrlCa4/Wn+Hkio11QmuH1p/h5K0TmHa2Ywme3tZAW950HzXqVnDjYwfhFk1i3tjuZ/vCkU+3grtAV2OnQAnxXTr3Lrl1n2Y7lyJI9RfjRnra4eSfhOrgd7g/v3Jqo2h/8h/2lOx/at/yu8wrFNHDokm6dHJJ/Aq4WRn3pV6NvxDDRi9GxxqqUWka3eSO/mL3WTQAsaQXAi/La3NfS0gBa8EXBYbg9y+bZvVllaNGiV4AHIZitPizco+L+C10cej9FiVZhWJR1eHvySHRwt6sg5ghNzTmqxCrqXMDOLKXlv8AKXG5/NNnYdxTcftTj9800s3QI9TCallbUwyGOojlzxuHZqPmF9AYFisWM4RS4jBb+MwOc3+V43b4FfPWZ13C5tlOl1rHocJ/6erW3NhWGw6vVCV5cdh5fwGpbUsLg6NrH8B/2Mmsf9LuY7Ov3pp5fCRG9xc03DH/AKqRV/dj2FpHZqFBqXEiuBJIaRbs0Cz3FNDaeD/Le6E1w+tP8PJFmey3uQqv+9yeHkgx9hWf/9k="
}, {
    "name": "HuangTingJian",
    "img": "image://data:image/jpeg;base64,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"
}];

var imgpoet = img[0]["img"];
for (i = 0; i < img.length; i++) {
    if (img[i]["name"] == poetName)
        imgpoet = img[i]["img"];
}

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
                symbol: imgpoet,
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
tmp = [];
$.ajaxSettings.async = false;
$.getJSON('../stages/' + poetName + 'Stage.txt', function(data) {
    tmp.push(data);
});

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