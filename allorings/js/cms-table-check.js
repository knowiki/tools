function CheckTableWidth(){
	
	 $('#contentColumn table').each(function(index, element) {
        var tableRef = $(this);
		//var contentWidth = $('#content').width();
		var contentWidth = $(this).parent().width();
		var tableWidth  = tableRef.outerWidth();
		if (tableWidth > contentWidth){
			if(tableRef.parent().hasClass('scrollable-table') == false){ //Check if parent div exists first
				tableRef.wrap('<div class="scrollable-table"></div>');//Wraps table in scrollabel div

				if($('html').hasClass('touch')){
					tableRef.wrap('<div class="scrollable-table"></div>');//Wraps table in scrollabel div
					tableRef.parent().before('<div class="scrollable-table-message">Slide table left/right to view.</div>' );
				
				}else{
					tableRef.parent().doubleScroll({resetOnWindowResize: true});
					tableRef.parent().prev('.doubleScroll-scroll-wrapper').before('<div class="scrollable-table-message">Slide table left/right to view.</div>' );//Add scroll message above double scrollbar
				}
				
				
			} 
			
		} else{
			if(tableRef.parent().hasClass('scrollable-table') == true){ //Check if parent div exists first
				
				if($('html').hasClass('touch')){
				tableRef.parent().find('.scrollable-table-message').remove();//Remove message
				tableRef.unwrap();//Removes the wrap
				}else{
					tableRef.parent().prev('.doubleScroll-scroll-wrapper').remove();
				tableRef.parent().prev('.scrollable-table-message').remove();
				tableRef.unwrap();//Removes the wrap
				}
				
			}
		}
		
    });
	
	
	$('table').each(function(index, element) {
        var tableRef = $(this);
		//var contentWidth = $('#content').width();
		var contentWidth = $(this).parent().width();
		var tableWidth  = tableRef.outerWidth();
		if (tableWidth > contentWidth){
			if(tableRef.parent().hasClass('scrollable-table') == false){ //Check if parent div exists first
				tableRef.wrap('<div class="scrollable-table dragscroll"></div>');//Wraps table in scrollabel div
				
				if($('html').hasClass('touch')){
					tableRef.wrap('<div class="scrollable-table dragscroll"></div>');//Wraps table in scrollabel div
					tableRef.parent().before('<div class="scrollable-table-message">Slide table left/right to view.</div>' );
				
				}else{
					tableRef.parent().doubleScroll({resetOnWindowResize: true});
					tableRef.parent().prev('.doubleScroll-scroll-wrapper').before('<div class="scrollable-table-message">Slide table left/right to view.</div>' );//Add scroll message above double scrollbar
				}
				
				//$('.scrollable-table').dragScroll({});
				dragscroll.reset();
			}
			
		} else{
			if(tableRef.parent().hasClass('scrollable-table') == true){ //Check if parent div exists first
				if($('html').hasClass('touch')){
				tableRef.parent().find('.scrollable-table-message').remove();//Remove message
				tableRef.unwrap();//Removes the wrap
				}else{
					tableRef.parent().prev('.doubleScroll-scroll-wrapper').remove();
				tableRef.parent().prev('.scrollable-table-message').remove();
				tableRef.unwrap();//Removes the wrap
				}
			}
		}
		
    });
	
	
}

$(window).load(function() {
  CheckTableWidth();
});


$(window).resize(function(){
 CheckTableWidth();
});