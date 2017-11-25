$(document).ready(function() {

	//  Choice Date
	$('#booking-date').datetimepicker({
		format: 'MM/DD/YYYY'
	});

	// Choice Time
	$('#booking-time').datetimepicker({
		format: 'HH:mm'
	});
	

	// Validate form
	$('#book-form').validate({
	    errorPlacement: function(error, element) {
	        if(element.parent('.input-group').length) {
	            error.insertAfter(element.parent());
	        } else {
	            error.insertAfter(element);
	        }
	    },
		rules : {
			from_place : {
				required : true,
			},
			to_place : {
				required : true,
			},
			fullname: {
				required : true,
			},
			phone: {
				required : true,
			},
			date: {
				required : true,
			},
			time: {
				required : true,
			},
			car_type: {
				required : true,
			},
			travel_code: {
				required : true,
			}
		},
		messages : {
			from_place : {
				required : "From can not be empty",
			},
			to_place : {
				required : "To can not be empty",
			},
			fullname : {
				required : "Full name can not be empty",
			},
			phone : {
				required : "Phone can not be empty",
			},
			date : {
				required : "Date can not be empty",
			},
			time : {
				required : "Time can not be empty",
			},
			car_type : {
				required : "Car type can not be empty",
			},
			travel_code : {
				required : "Code can not be empty",
			}
		}
	});
});