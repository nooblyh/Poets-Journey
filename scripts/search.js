var searchBtn = document.getElementById('search');
var searchTxt = document.getElementById('searchText');

function searchPoet(){
    var poetName = searchTxt.value;
    window.alert(poetName);
    location = "http://127.0.0.1:8888/maps/"+poetName+".html";  
}