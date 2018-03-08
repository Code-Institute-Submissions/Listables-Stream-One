$(document).ready(function() {
//			<!-- Real-time Validation -->
//				<!--Name can not be blank-->
				$('#inputName').on('input', function() {
					var input=$(this);
					var is_name=input.val();
					if(is_name){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
//				<!--Email must be an email -->
				$('#inputEmail').on('input', function() {
					var input=$(this);
					var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
					var is_email=re.test(input.val());
					if(is_email){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}
				});
				
//				<!--Message can not be blank -->
				$('#inputMessage').keyup(function(event) {
					var input=$(this);
					var message=$(this).val();
					console.log(message);
					if(message){input.removeClass("invalid").addClass("valid");}
					else{input.removeClass("valid").addClass("invalid");}	
				});
		
//			<!-- After Form Submitted Validation-->
			$("#inputSubmit button").click(function(event){
                event.preventDefault();
				var form_data=$("#contactform").serializeArray();
				var error_free=true;
				for (var input in form_data){
					var element=$("#input"+form_data[input]['name']);
					var valid=element.hasClass("valid");
					var error_element=$("span", element.parent());
					if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
					else{error_element.removeClass("error_show").addClass("error");}
				}
				if (error_free){
					alert('No errors: Form will be submitted');
                    location.reload();
				}
			});
			
			
			
		});