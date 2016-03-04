
$(function(){

$("#pokeButton").click(function(f){

	var value=$("#pokemon").val().toLowerCase();
	console.log(value);f.preventDefault();
	$("#dispPoke").text(value);
	var theUrl="http://pokeapi.co/api/v2/pokemon/";
	theUrl+=value;console.log(theUrl);
	$.ajax({
		url:theUrl,dataType:"json",
		success:function(parsed_json){
		  var id=parsed_json['id'];
		  var name=parsed_json['name'];
		  everything="<ul>";
		  everything+="<li>ID: "+id;
		  everything+="<li>Name: "+name;
		  everything+="</ul>";
		  var img_url = "http://img.pokemondb.net/artwork/"+name+".jpg";
		  everything+= "<img class ='pokemon_pic' src ="+img_url+">";
		  	
		  $("#pokedex").html(everything);
		console.log(img_url);
	}});
	
$("#pokeFight").click(function(f){  //function for grabbing enemy pokemon, initializing battle
	var index = Math.random() * 300; //or however many pokemon there are in the array
	var value = array[index];
	//I figure if we just upload an array (like the citylist, but in array form) we can randomly choose enemy with random number index

	var theUrl="http://pokeapi.co/api/v2/pokemon/";
	theUrl+=value;
	$.ajax({
		url:theUrl,dataType:"json",
		success:function(parsed_json){
		  var id=parsed_json['id'];
		  var name=parsed_json['name'];
		  everything="<ul>";
		  everything+="<li>ID: "+id;
		  everything+="<li>Name: "+name;
		  everything+="</ul>";
		  var img_url = "http://img.pokemondb.net/artwork/"+name+".jpg";
		  everything+= "<img class ='pokemon_pic' src ="+img_url+">";
		  	
		  $("#enemyPokedex").html(everything);
	        }
	
	});
	
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

