 function ResetSticky(val,callback){
	 if (val != undefined){
		 stickypos=val;
	 }else{
		 stickypos="auto";
	 }
	$('.mobile-header').css('left', stickypos);
	$('.mobile-header').css('right', stickypos);
	
	if (callback && typeof(callback) === "function") {  
        callback();  
    }
 }
 
 /*Side Menu Toggles-----------------------------------------------------*/
 
 function SideBars(){
	 $('.ToggleMenu').click(function(e){
		 e.preventDefault();
	 });
	 $('.ToggleRight').click(function(e){
		 e.preventDefault();
	 });
	 
	 $('.ToggleMenu').sidr({
      name: 'sidemenu',
	  side:'left',
	  
	  onOpen: function() {
			 ResetSticky();
		  },
		  onClose: function() {
			 ResetSticky(0);
		  }
		  
	 	});
		
		
	 $('.ToggleRight').sidr({
      name: 'rightside',
	  side:'right',
	  
	  onOpen: function() {
			 ResetSticky();
		  },
		  onClose: function() {
			 ResetSticky(0);
		  }
		  
	 	});
   
}


function SideMenu(){
	
	$('.MainLink ').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).parent().find('.SubNav').slideToggle('fast');
	});
}

/*Equal Height------------------------------------------------------*/

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

/*Window REsize and Load calls--------------------------------------------------------------*/
$(window).load(function() {
  equalheight('.Box');
});


$(window).resize(function(){
  equalheight('.Box');
});


/*Document Ready--------------------------------------------------------------*/
$(document).ready(function(){
	
	SideMenu();
	SideBars();

});

// JavaScript Document

function MM_setTextOfTextfield(objName,x,newText) { //v3.0
  var obj = MM_findObj(objName); if (obj) obj.value = newText;
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

//Function to Pop-Up window
function openPop(URLJump) { 
//below allows the java to determine the screen width and height
//the -### at the end of each is half the size of the window
//below is to align to top
	var top = 0;
//below is to center the window vertical
//	var top = (screen.height/2)-225;
//below is to center the window horizontal
	//var left = (screen.width/2)-400;
	var left = (screen.width/2)-650;
//define the features of the window
	//var popFeatures =  " status=yes,scrollbars=yes,resizable=yes,toolbar=yes,location=yes,width=800,height=800,top=" + top + ",left=" + left;
	var popFeatures =  " status=yes,scrollbars=yes,resizable=yes,toolbar=yes,location=yes,width=1300,height=800,top=" + top + ",left=" + left;
//open the window
	var windowName = "";
	window.open(URLJump,windowName,popFeatures);
}

// open new window
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function cwSameShipping(obj){
	//Is the checkboxed checked or not?
	var retVal = (document.PlaceOrder.ShipSame[0].checked)? true : false;
	var i,j,curObj;
	//Create a list of common fields minus their cst and cstShp prefixes respectively
	var arrCommonFields = new Array('Address1','Address2','City','Zip');
	var arrCommonFields_length = arrCommonFields.length;
	//Create a list of special fields that have need other work done before they can have a value set or be enabled/disabled
	var arrSpecialFields = new Array('Name','Country','StateProv');
	//An array of all fields, both common and special for the purpose of enabling/disabling the fields
	var arrAllFields = arrCommonFields.concat(arrSpecialFields);
	var arrAllFields_length = arrAllFields.length;
	//Loop through common fields and set the shipping fields to the customer values
	for(i=0; i<arrCommonFields_length;i++){
		findObj('cstShp'+arrCommonFields[i]).value = findObj('cst'+arrCommonFields[i]).value;
	}
	findObj('cstShpPhone').value = findObj('cstBillPhone').value;
	findObj('cstShpCompany').value = findObj('cstBillCompany').value;
	//Combine the First & Last Name fields for the Full name field used in the Shipping Form
	//findObj('cstShpName').value = findObj('cstFirstName').value;
	//Set the Ship Country, then populate the state/prov list before setting its selected index.	
	findObj('cstShpCountry').selectedIndex = findObj('cstCountry').selectedIndex;
	setDynaList(arrDL2);
	findObj('cstShpStateProv').selectedIndex = findObj('cstStateProv').selectedIndex;
	showShipCity();
	findObj('cstShpCity2').selectedIndex = findObj('cstCity2').selectedIndex;
	//Loop through all fields and disable them if the box is checked, otherwise enable the fields.
	for(j=0; j<arrAllFields_length;j++){
		curObj = findObj('cstShp'+arrAllFields[j]);
		if(curObj){			
			if(!retVal){curObj.setAttribute("disabled","disabled");}
			else{curObj.removeAttribute("disabled");}
		}
	}
return retVal;
}

function setDynaList(arrDL){
 var theForm = findObj(arrDL[2]);var theForm2 = findObj(arrDL[4]);var oList1 = theForm.elements[arrDL[1]];
 var oList2 = theForm2.elements[arrDL[3]];var arrList = arrDL[5];clearDynaList(oList2);
 if (oList1.selectedIndex == -1){oList1.selectedIndex = 0;}
 populateDynaList(oList2, oList1[oList1.selectedIndex].value, arrList);return true;
}
 
function clearDynaList(oList){
 for (var i = oList.options.length; i >= 0; i--){oList.options[i] = null;}oList.selectedIndex = -1;
}
 
function populateDynaList(oList, nIndex, aArray){
 for (var i = 0; i < aArray.length; i= i + 3){
  if (aArray[i] == nIndex){oList.options[oList.options.length] = new Option(aArray[i + 1], aArray[i + 2]);}}
 if (oList.options.length == 0){oList.options[oList.options.length] = new Option("[none available]",0);}oList.selectedIndex = 0;
}

function findObj(theObj, theDoc){
  var p, i, foundObj;if(!theDoc) theDoc = document;if( (p = theObj.indexOf("?")) > 0 && parent.frames.length)
  {theDoc = parent.frames[theObj.substring(p+1)].document;theObj = theObj.substring(0,p);}
  if(!(foundObj = theDoc[theObj]) && theDoc.all) foundObj = theDoc.all[theObj];
  for (i=0; !foundObj && i < theDoc.forms.length; i++)foundObj = theDoc.forms[i][theObj];
  for(i=0; !foundObj && theDoc.layers && i < theDoc.layers.length; i++)foundObj = findObj(theObj,theDoc.layers[i].document);
  if(!foundObj && document.getElementById) foundObj = document.getElementById(theObj);return foundObj;
}


/*WINGOUTS-------------------------------------------------------*/
/*Add touch-enabled to body---------------------*/
function AddTouchClass(){

if ("ontouchstart" in document.documentElement)
{
$('body').addClass('touch-device');
}
else
{
$('body').addClass('no-touch-device');
}

}	


/*Document Ready--------------------------------------------------------------*/
$(document).ready(function(){
AddTouchClass();

$('.wingout-link').click(function(e) { 
        e.preventDefault();
		e.stopPropagation();
		var wingout = $(this).find('.wingout');
		
		if ($(this).hasClass('active')){
			if (wingout.hasClass('active')){
			wingout.removeClass('active');
			} else{
				wingout.addClass('active');
			}
			
		} else{
			//var parentRow = $(this).parent().parent();
			$('.wingout-link').removeClass('active');
			$('.wingout-link .wingout').removeClass('active');
			//$('.compounds-table tr').removeClass('active');
			$(this).addClass('active');
			//parentRow.addClass('active');
			wingout.addClass('active');
		}
		
		
    });
	
	
$('.no-touch-device .wingout-link').hover(
  function() {
	 var wingout = $(this).find('.wingout');
	 if (!$(this).hasClass('active')){ 
		  $('.wingout-link .wingout').removeClass('active');
		  
		  $('.wingout-link').removeClass('active');
		  
		  
		  wingout.addClass('active');
	 }
  }, function() {
	   var wingout = $(this).find('.wingout');
	  if (!$(this).hasClass('active')){
   			wingout.removeClass('active');
	  }
  }
);
	
$('body').click(function(){/*REOMVE WINGOUT WHEN CLICKING ANYWHERE*/
	var check = $('.wingout-link.active').length;
	if(check > 0){
		$('.wingout-link').removeClass('active');
		$('.wingout-link .wingout').removeClass('active');
	}
});


});

