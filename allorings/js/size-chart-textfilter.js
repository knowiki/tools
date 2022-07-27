  

function checkRows(){
	var norows = false;
	var visiblerows = $('.standards tbody tr:visible').length;
	if (visiblerows == 1){//1 because there is always a blank row visible to match the fixed header col widths
		$('.no-results').css('display','block');					
	}else{
			$('.no-results').css('display','none');			   
	}
	//setFixedHeader();

}

function setFilter(){
	
	$('.reset-filters').click(function(e){
		e.preventDefault();
		$('.no-results').css('display','none');	
		$('.standards tbody tr').each(function(index){
			if($(this).hasClass('blank-row')){
				$(this).removeClass().addClass('blank-row');
			}else{
				$(this).removeClass();
			}   
		});
		
		$('.text-filter').val('');
		$('.standards select').prop('selectedIndex',0);
		//setFixedHeader();
	});
	
	
	
	$('.text-filter').keyup(function(){
		
			if ($(this).val().trim() == "."){
				$(this).val( '0'+$(this).val());
			}
		
			var colRef = $(this).attr('rel');
			var checkVal = $(this).val().trim();
			
		
				$('.standards tbody tr').each(function(index){
					if (checkVal == ""){
						$(this).removeClass('hide'+colRef);
					}else{
						
					   var colVal = $(this).find('td:eq('+colRef+')').html().trim();
						
						//For Part Number, need to search wtihin 'a' tag
						if(colRef == 0){
							colVal = $(this).find('td:eq('+colRef+')  a').text().trim(); 
							
							colVal = colVal.toUpperCase();
							checkVal = checkVal.toUpperCase().replace(/\s+/g, '');
						}	
						
						if(colVal.indexOf(checkVal) ==0 ){
							$(this).removeClass('hide'+colRef);
						}else{
							$(this).addClass('hide'+colRef);
						}
					}
				});

			$('.standards tbody').scrollTop(0);
		
			checkRows();
		});
	
	
		$('.select-filter').change(function(){
				var colRef = $(this).attr('rel');
				var checkVal = $(this).val();
					$('.standards tbody tr').each(function(index){
						if (checkVal == ""){
							$(this).removeClass('hide'+colRef);
						}else{

						   //var colVal = $(this).find('td:eq('+colRef+')').text().trim();

							//For Part Number, need to search wtihin 'a' tag
							//if(colRef == 0){
								colVal = $(this).find('td:eq('+colRef+') > a').text().trim(); 
								colVal = colVal.toUpperCase();
								checkVal = checkVal.toUpperCase();
							//}

							if(colVal == checkVal ){
								$(this).removeClass('hide'+colRef);
							}else{
								$(this).addClass('hide'+colRef);
							}
						}
					});

				$('.standards tbody').scrollTop(0);
				checkRows();
			});
	
	
	
	
}

$(document).ready(function(){
		  
	setFilter();
		
		  
});


