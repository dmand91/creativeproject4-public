
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

