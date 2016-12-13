//Set up a doc ready
$(document).ready(function(){

	// Two new jquery methods
	// 		-submit
	// 		-val
	$('.sign-up-form').submit(function(event){
		//Listen for submit. If they submit, then run this function.
		//Don't go to the next page immediately after submitting. 
		//"Submit" could be changed to "click" or "mouseover" or any other js event
		// Stop the form from leaving the page
		event.preventDefault();

		// All fields are mandatory
		$('input').each(function(){ ///find everything that has the 'input' tag on it
			var currentTagClass = $(this).attr('class'); //this can be fullName, address, etc
			var errorClass = '.' + currentTagClass + '-error'; //where there are erros
			console.log(errorClass);
			// so like .phone-error
			//or if($(this).val().length == ''
			if($(this).val() == ''){
				$(errorClass).html('Fields cannot be empty');//we don't know which errorclass we need to show yet -->this 
				$(errorClass).show();
			} else{
				$(errorClass).hide();
			}
		});

		// console.log("Form submitted!");
		// getting value of box (what they typed in)
		// check the length of the name input field

		var fullNameVariable = $('.fullName').val()
		if(fullNameVariable.length < 3){
			console.log("Your name is too short");
			$('.full-name-error').show();
		}else{
			$('.full-name-error').hide();
		}

		// Make sure the password fields match and are at least 6 characters. Make sure the password contains at least one number.
		var password = $('.password').val();
		var password2 = $('.password2').val();
		var numberFound = false;
		for(let i=0; i<password.length; i++){
			if(isNaN(Number(password[i]))){
				//this is a letter	
			}else{
				numberFound = true;
			}
		}
		if(password !== password2){
			$('.password-error').html('Your passwords must match.')
			$('.password-error').show();
		}else if(password.length < 6){
			$('.password-error').html('Your password must be at least 6 characters.')
			$('.password-error').show();
		}else if(!numberFound){
			// Js couldn't find a number of it would true
			// $('.password-error').html('Your password must have at least 1 number.')
			$('.password-error').html('Your password is weak. Consider adding a number.')
			// $('.password-error').removeClass('error');
			//that line can be removed b/c of the error
			$('.password-error').addClass('caution');
			$('.password-error').show();	
		}else{
			$('.password-error').hide();
			$('.password-error').removeClass('caution');
		}
	})
	



});