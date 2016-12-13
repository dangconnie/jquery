// console.log($);

// Cannot read property 'style' of null-->not loaded in time time so the ID of "thing" does not exist yet when this runs. When need to target the entire document and use a listener.

// We need $(document) to tell document to wait until it's ready. When "ready" happens tp document, then run the function in the parenthesis. You don't want this thing to run until all the JS has loaded in the browser. 


// 1. Wait until the DOM is fully loaded
$(document).ready(function(){
	//var thing = document.getElementById('thing');
	//line above rewritten below. targets id of "thing".
	// s. Listen for clicks on button tags
	$('button').click(function(){
		// 3. Someone clicked on a button. Run me! . toggle does all the if...else from the function "toggle" below.
		var whatToDo = $(this).attr('toDo')
		//Go to "this" and extract the attribute of "toDo". Go to toDo that was clicked on.
		console.log(whatToDo);
		if(whatToDo == "hide"){
			$('#thing').hide();
		}else if (whatToDo == "show"){
			$('#thing').show();
		} else if(whatToDo == "toggle"){
			$('#thing').toggle();
		} else if (whatToDo == "html"){
			var theThing = $('#thing')
			console.log(theThing.html());
			$('#thing').html('<table border ="1"><tr><td>I\'m a table now!</td></tr></table>');
			console.log(theThing.html());
			// think of it as $('#thing').innerHTML
			console.log($('thing').html());
		} else if(whatToDo == "prepend"){
			//prepend adds something to the front
			$('#thing').prepend('<table border ="1"><tr><td>I have a friend to my right now!</td></tr></table>')
		} else if (whatToDo == "append"){
			$('#thing').append('<table border ="1"><tr><td>I have a friend to my left now!</td></tr></table>')
		}else if (whatToDo == "css"){
			$('#thing').css({
				'color': 'orange',
				'font-size': '70px',
				'background-color': 'blue'
			});
		} else if(whatToDo == 'addC'){
			$('#thing').addClass('text-uppercase');
		} else if (whatToDo =='each'){
			$('button').each(function(){
				//Will affect when someone clicks on a button. run the function on each them. this 
				console.log($(this).html('Hurry up lunch!'))
			});
		}
		// console.log('this');
	})
	
	// $('.thing')---looks for a class of "thing"
	// $('thing')----looks for a tag of "thing"
	// thing.style.display = "none";
});


function toggle(){
	var thing = document.getElementById('thing');
	if(thing.style.display == "block"){
		thing.style.display = "none";
	} else{
	thing.style.display = "block";
	}
}


//Jquery = $
// var jQuery2 = function(elementToTarget){
// 	// find out if there is a . or #
// 	// use appropriate document.get
// 	hide: function(idToTarget){
// 		document.getElementById(idToTarget).style.display = "none";
// 	}
// }

// jQuery2.hide('#thing')

