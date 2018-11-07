var styleJson = [{
    "featureType": "poilabel",
    "elementType": "labels.icon",
    "stylers": {
        "visibility": "off"
    }
}, {
    "featureType": "road",
    "elementType": "labels",
    "stylers": {
        "visibility": "off"
    }
}];

function loadJScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://api.map.baidu.com/api?v=3.0&ak=lGv0PtZWEsLCMeOO2HUmn2lmSvxxCEtH&callback=init";
    document.body.appendChild(script);
}

function init() {
    var map = new BMap.Map("showMap");            // 创建Map实例
    var point = new BMap.Point(106.556887,29.570047); // 创建点坐标
    map.centerAndZoom(point, 12);                 // 初始化地图，设置中心点坐标和地图级别-->
    map.enableScrollWheelZoom();                 //启用滚轮放大缩小
    map.setMapStyleV2({styleJson: styleJson});  //设置样式
    map.addControl(new BMap.NavigationControl());//添加左边控件
}

window.onload = loadJScript;  //异步加载地图
