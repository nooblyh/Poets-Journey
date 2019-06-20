var poetInfoArr = ["江油《晚晴》","江油 《访戴天山道士不遇》","重庆《上李邕》","峨眉山《峨眉山月歌》","巫山 《宿巫山下》"];
var poetArr = ["野凉疏雨歇，春色遍萋萋","野竹分青霭，飞泉挂碧峰。","大鹏一日同风起，抟摇直上九万里","峨眉山月半轮秋，影入平羌江水流","桃花飞绿水，三月下瞿塘。"];//"峨眉山月半轮秋，影入平羌江水流"];
var lineCountArr = [1,5,7,9,12];


for (var i = 0; i <lineCountArr.length ; i++) { 
    (function(i) {   //使用闭包，避免执行完循环后i值改变使得呈现诗句错误
     setTimeout(function() { 
        document.getElementById("poetInfo").innerHTML = poetInfoArr[i];
        document.getElementById("poet").innerHTML = poetArr[i];
     }, lineCountArr[i]*4000); 
    })(i); 
   } 

  
 





