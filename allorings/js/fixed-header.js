function setFixedHeader(){
	var tableRef = $('table.fixed-header');
	var headerCells = tableRef.find('thead tr:first').children();
    
    tableRef.removeClass('ready');
	
	var bodyCells;
	
	
/*	tableRef.find('thead').css('visibility','hidden');
	tableRef.find('tbody').css('visibility','hidden');
	tableRef.find('th').css('width','auto');
	tableRef.find('td').css('width','auto');*/
	
	if(tableRef.find('tbody tr.get-row').css('display') != 'none'){
		bodyCells = tableRef.find('tbody tr.get-row').children();
		
	}else{
		bodyCells = tableRef.find('tbody tr.blank-row').children();
	}
	
    var colWidth;

	// Get the tbody columns width array
	colWidth = bodyCells.map(function() {
		return $(this).outerWidth();
       // return $(this).width();
	}).get();
    

	tableRef.find('thead tr:first').children().each(function(i, v) {
		$(v).outerWidth(colWidth[i]);
       // $(v).width(colWidth[i]);
	});
	
	tableRef.find('thead tr.filter-row').children().each(function(i, v) {
		$(v).outerWidth(colWidth[i]);
        //$(v).width(colWidth[i]);
	});
	
	tableRef.find('tbody tr.blank-row').children().each(function(i, v) {
		$(v).outerWidth(colWidth[i]);
        //$(v).width(colWidth[i]);
	});
	
    tableRef.addClass('ready');//add class to set up head and body to block
    
	tableRef.find('thead').css('visibility','visible');
	tableRef.find('tbody').css('visibility','visible');
	tableRef.css('background-image','none');
}
	
$(window).load(function() {
	setFixedHeader();

});	
$(window).resize(function() {
	setFixedHeader();

});	


//FOR Fixed Header on Compatibility Chart

function setCompatibilityTable(){
	var tableRef = $('table.compatibility');
    var headerCells = tableRef.find('thead tr:first').children();
    var colWidth;

// Get the tbody columns width array
colWidth = headerCells.map(function() {
    return $(this).width();
}).get();
	
tableRef.find('tbody tr:first').children().each(function(i, v) {
    $(v).width(colWidth[i]);
});
	tableRef.find('thead').css('visibility','visible');
	tableRef.find('tbody').css('visibility','visible');
	tableRef.css('background-image','none');
	}
	
$(window).load(function() {
	setCompatibilityTable();

});	
$(window).resize(function() {
	setCompatibilityTable();

});	