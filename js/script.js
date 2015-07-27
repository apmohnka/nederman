$(document).ready(function(){

	if($('.spinEdit').spinedit){
		$('.spinEdit').spinedit({
		    minimum: 1,
		    maximum: 10,
		    step: 1,
		    value: 0,
		    numberOfDecimals: 0
		});
	}

	$('.combobox').combobox();
	$('.date-picker').datepicker();
});