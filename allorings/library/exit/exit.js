


$(document).ready(function(e) {

(function ($, F) {
    F.transitions.dropIn = function() {
        var endPos = F._getPosition(true);
        endPos.top = (parseInt(endPos.top, 10) - 600) + 'px';
        F.wrap.css(endPos).show().animate({
            top: '+=600px'
        }, {
            duration: F.current.openSpeed,
            complete: F._afterZoomIn
        });
    };

    F.transitions.dropOut = function() {
        F.wrap.removeClass('fancybox-opened').animate({
            top: '-=600px'
        }, {
            duration: F.current.closeSpeed,
            complete: F._afterZoomOut
        });
    };

}(jQuery, jQuery.fancybox));


    $('#open-exit').click(function(e) {
        e.preventDefault();
    });
	$('#close-exit').click(function(e) {
        e.preventDefault();
		$.fancybox.close();
    });
	
	$('#open-exit').fancybox({
       maxWidth:640,
	   openMethod : 'dropIn',
		openSpeed : 800,

    	closeMethod : 'dropOut',
		closeSpeed : 250
    });
	
	
	
/*function launchexit(){
		
	if(Cookies.get('exit') != 1){
			$('#open-exit').click();
			Cookies.set('exit', '1');
		}
		
}
	*/
	
/*document.addEventListener("mouseleave", function(e){
    if( e.clientY < 0 )
    {
         //launchexit();
		alert('what');
	
    }
}, false);*/
	
/*$(document).mouseleave(function(e) {
   if( e.clientY < 0 )
    {
        launchexit();
    }
});*/

});

var currentURL = String(window.location);

currentURL = currentURL.replace("http://allorings.aimgbeta.com", "");
currentURL = currentURL.replace("https://www.allorings.com", "");
currentURL = currentURL.replace(".cfm", "");

var urlList = [
'/O-Ring-AS568-Standard-Size-Chart',
'/British-o-ring-Size-Chart',
'/Metric-O-Ring-Size-Chart',
'/JIS-O-Ring-Size-Chart',
'/o-ring-size-charts-index',
'/',
'',
'/o-rings',
'/o-ring-compatibility',
'/o-ring-groove-design-metric',
'/o-ring-groove-design-static-face-seal',
'/o-ring-groove-design-static-rod-piston',
'/o-ring-groove-design-dynamic-rod-piston',
'/static-oring-groove-design-dovetail',
'/o-ring-groove-design-index',
'/o-ring-design-reference-index',
'/o-ring-materials-comparison',
'/o-ring-troubleshooting',
'/viton-o-rings',
'/ffkm-o-rings',
'/silicone-o-rings',
'/kalrez-o-rings',
'/buna-n-o-rings',
'/epdm-o-rings',
'/hnbr-o-rings',
'/chemraz-o-rings',
'/fluorosilicone-o-rings',
'/aflas-o-rings',
'/polyurethane-o-rings',
'/simriz-o-rings',
'/simriz-vs-kalrez',
'/Markez-Z1028-Datasheet'
];


var exitOverlay = false;
if (urlList.indexOf(currentURL) > -1){
    exitOverlay = true;
}

var mouseX = 0;
var mouseY = 0;
var popupCounter = 0;

document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    //document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
});

$(document).mouseleave(function () {
    
    if (exitOverlay == true){
    if (mouseY < 100) {
        if (popupCounter < 1) {
             $('#open-exit').click();
        }
        popupCounter ++;
    }
    
    }
    
});




