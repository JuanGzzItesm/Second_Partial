console.log("WORKS");

function watchForm2(meal){

	console.log(meal);

	let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal;

	$.ajax({

		url : url,
		method : "GET",
		dataType : "json",
		succes : function (responseJSON){
			displayResult(responseJSON);
		},

		error : function(err){

			let results = $('#results');

			let line = document.createElement("p");

			let wrong = "MEAL NOT FOUND";

			line.append(wrong);

			results.append(line);
		}
	});
}


function displayResult(responseJSON){

	console.log("SI ENCONTRO");
}

function watchForm(){

	let meal = $('#query').val();
	watchForm2(meal);
}


function init(){

	$('#submit').click(function(e){

		e.preventDefault();
		watchForm();
	});
}

init();