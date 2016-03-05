
$( document ).ready(function() {
	var myPokeName, myPokeSpeed,myPokeSpecialDefense,myPokeSpecialAttack, myPokeDefense,myPokeAttack, myPokeHp;
	var EPokeName, EPokeSpeed,EPokeSpecialDefense,EPokeSpecialAttack, EPokeDefense,EPokeAttack, EPokeHp;
	var myPokeUrl, EPokeUrl;


$("#pokeButton").click(function(f){

	$("#battleResults").html(" ");//CLEAR BATTLE RESULTS
	var value=$("#pokemon").val().toLowerCase();
	console.log(value);f.preventDefault();
	$("#dispPoke").text(value);
	var theUrl="http://pokeapi.co/api/v2/pokemon/";
	theUrl+=value;console.log(theUrl);
	$.ajax({
		url:theUrl,dataType:"json",
		success:function(parsed_json){
		  var id=parsed_json['id'];
		  myPokeName=parsed_json['name'];
		  var everything;
		  //everything+="<li>ID: "+id;
		  everything="<h2>"+myPokeName.toUpperCase()+"</h2>";
		  everything+="<ul class = statsList>";
		  var img_url = "http://img.pokemondb.net/artwork/"+myPokeName+".jpg";
		  myPokeUrl=img_url;
		  everything+= "<img class ='pokemon_pic' src ="+img_url+">";
		  	
		  everything+="<br>";
		  //var obj = JSON.parse(parsed_json);

		  myPokeSpeed=Number(parsed_json['stats'][0]['base_stat']);
		  myPokeSpecialDefense =Number(parsed_json['stats'][1]['base_stat']);
		  myPokeSpecialAttack =Number(parsed_json['stats'][2]['base_stat']);
		  myPokeDefense=Number(parsed_json['stats'][3]['base_stat']);
		  myPokeAttack=Number(parsed_json['stats'][4]['base_stat']);
		  myPokeHp=Number(parsed_json['stats'][5]['base_stat']);

		  
		   everything+="<li>Speed: "+myPokeSpeed;
		    everything+="<li>Special-Defense: "+myPokeSpecialDefense;
		     everything+="<li>Special-Attact: "+myPokeSpecialAttack;
		      everything+="<li>Defense: "+myPokeDefense;
		       everything+="<li>Attack: "+myPokeAttack;
		       everything+="<li>HP: "+myPokeHp;
		        everything+="</ul>"
		   //everything+="<li>stats with obj: "+obj[1];
		  $("#pokedex").html(everything);
		console.log(img_url);
	}});

});
 
	
$("#ChooseEnemyPoke").click(function(f){  //function for grabbing enemy pokemon, 
	 $("#battleResults").html(" ");//CLEAR BATTLE RESULTS DIV

	 console.log("Key being pressed");
	 var random_pokemon="";
	 var random_num = Math.floor((Math.random() * 721) + 1);
	 console.log(random_num);
	  var url = "../getcity?q=";
	$.getJSON(url,function(data) {
	    //var everything;
	    //everything = "<ul class = 'list'>";
	    $.each(data, function(i,item) {
	    	//console.log("i: " +i);
	    	if(i==random_num)
	    	{
	    			random_pokemon= data[i].city;
	    			console.log(random_pokemon + "choosen");
	    	}
	      
	    });
	   
	  })
	  .done(function() { console.log('getJSON request succeeded!'); })
	  .fail(function(jqXHR, textStatus, errorThrown) { 
	    console.log('getJSON request failed! ' + textStatus); 
	    console.log("incoming "+jqXHR.responseText);
	  })
	  .always(function() { console.log('getJSON request ended!');
	  })
	  .complete(function() { console.log("complete"); });

	


	//AFTER GRABBING RANDOM POKEMON, NOW GRABBING DATA


	//random_pokemon="Pichu"; //comment this out
	var value=random_pokemon.toLowerCase();
	console.log("value is: " + value);f.preventDefault();
	$("#dispPoke").text(value);
	var theUrl="http://pokeapi.co/api/v2/pokemon/";
	theUrl+=value;console.log(theUrl);
	$.ajax({
		url:theUrl,dataType:"json",
		success:function(parsed_json){
		  var id=parsed_json['id'];
		  EPokeName=parsed_json['name'];
		  window.alert("A Wild " + EPokeName.toUpperCase() + " Appeared!");

		    everything="<h2>"+EPokeName.toUpperCase()+"</h2>";
		  everything+="<ul class = statsList>";
		  var img_url = "http://img.pokemondb.net/artwork/"+EPokeName+".jpg";
		  EPokeUrl=img_url;
		  everything+= "<img class ='pokemon_pic' src ="+img_url+">";
		  	
		  everything+="<br>";
		  //var obj = JSON.parse(parsed_json);

		  EPokeSpeed=Number(parsed_json['stats'][0]['base_stat']);
		  EPokeSpecialDefense =Number(parsed_json['stats'][1]['base_stat']);
		  EPokeSpecialAttack =Number(parsed_json['stats'][2]['base_stat']);
		  EPokeDefense=Number(parsed_json['stats'][3]['base_stat']);
		  EPokeAttack=Number(parsed_json['stats'][4]['base_stat']);
		  EPokeHp=Number(parsed_json['stats'][5]['base_stat']);

		  
		   everything+="<li>Speed: "+EPokeSpeed;
		    everything+="<li>Special-Defense: "+EPokeSpecialDefense;
		     everything+="<li>Special-Attact: "+EPokeSpecialAttack;
		      everything+="<li>Defense: "+EPokeDefense;
		       everything+="<li>Attack: "+EPokeAttack;
		       everything+="<li>HP: "+EPokeHp;
		   //everything+="<li>stats with obj: "+obj[1];
		  $("#enemyPokedex").html(everything);
		console.log(img_url);
	 }});


  });

$("#pokeFight").click(function(f){  //initializing battle
	console.log("fight button pressed");
    console.log("enemy attack: "+EPokeAttack);
    console.log("My attack: "+myPokeAttack);

    var myTotalScore= myPokeSpeed+myPokeSpecialDefense+myPokeSpecialAttack+ myPokeDefense+myPokeAttack+myPokeHp;
    var ETotalScore= EPokeSpeed+EPokeSpecialDefense+EPokeSpecialAttack+ EPokeDefense+EPokeAttack+EPokeHp;
     console.log("My total: "+myTotalScore);
     console.log("Ememy total: "+ETotalScore);

		if(myTotalScore>ETotalScore)
		{
			 console.log("In mine");
			 var html = "<p>"+myPokeName.toUpperCase() + " Wins!</p>"
			  html+= "<img class = 'winPic' src =" + myPokeUrl +">"
			  html+= "<h3><br>"+myPokeName.toUpperCase()+"'s score: "+ myTotalScore+" > " +EPokeName.toUpperCase()+"'s score: "+ ETotalScore +"</h3>";
			$("#battleResults").html(html);


		}
		else
		{
			 console.log("In there");
			  var html = "<p>"+EPokeName.toUpperCase() + " Wins!</p>"
			  html+= "<img class = 'winPic' src =" + EPokeUrl +">"
			  html+= "<h3><br>"+EPokeName.toUpperCase()+"'s score: "+ ETotalScore+" > " +myPokeName.toUpperCase()+"'s score: "+ myTotalScore +"</h3>";
			$("#battleResults").html(html);

		}



 });

$("#pokemon").keyup(function() {
	   console.log("Key being pressed");

	  var url = "../getcity?q="+$("#pokemon").val();
	$.getJSON(url,function(data) {
	    var everything;
	    everything = "<ul class = 'list'>";
	    $.each(data, function(i,item) {
	      everything += "<li> "+data[i].city;
	    });
	    everything += "</ul>";
	    $("#txtHint").html(everything);
	  })
	  .done(function() { console.log('getJSON request succeeded!'); })
	  .fail(function(jqXHR, textStatus, errorThrown) { 
	    console.log('getJSON request failed! ' + textStatus); 
	    console.log("incoming "+jqXHR.responseText);
	  })
	  .always(function() { console.log('getJSON request ended!');
	  })
	  .complete(function() { console.log("complete"); });
	});



});   

