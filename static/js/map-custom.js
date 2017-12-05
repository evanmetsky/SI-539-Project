
function checkValid(state_ab){
	var states = {
			MI:['Michigan', 'michigan_recipe.html','../static/img/pannukakku.jpg', 'Pannukakku', 'Pannukakku is a Finnish pancake made with the same ingredients, but with lemon, and baked instead of pan-fried. A large population of immigrants from Finland brought it to Michigan decades ago, and the food and its new home have been in a love affair together ever since.'], 
			NY:['New York', "newyork_recipe.html", '../static/img/bagel.jpeg','Bagels', 'Apologies to New Yorkers living outside of New York City, but when the best bagels in the world come from somewhere in your state, it needs to be acknowledged. For the epitome of a New York breakfast, order your fresh bagel with a schmear of cream cheese and some lox or smoked salmon.'], 
			NJ:['New Jersey',"newjersey_recipe.html", '../static/img/pork_roll.jpg','Pork Roll', 'Also known as Taylor Ham, the pork roll was reportedly invented in 1856 by John Taylor and is sliced and pan-fried or grilled ham (or Spam). The most popular breakfast item generally consists of pork roll on a bun or bagel, with a fried egg, American cheese, sometimes lettuce and/or tomato, and topped with condiments such as salt, pepper, ketchup, mustard, and hot sauce. It has also been called a Jersey Breakfast.'], 
			PA:['Pennsylvania',"pennsylvania_recipe.html", '../static/img/fasnacht.jpg', 'Fasnacht', 'A Pennsylvania Dutch creation, fasnacht is the name of both a festival (which takes place the day before Lent begins) and the fried doughnuts served on that day. Traditionally made as a way to empty the pantry of lard, sugar, fat, and butter before religious fasting, the square or circular pastries can be purchased year-round in Pennsylvania, especially in the eastern part of the state.'], 
			AZ:['Arizona', "arizona_recipe.html", '../static/img/arizona_state_food_pic.jpg', 'Machaca Breakfast Burrito', 'This is a classic take on a Mexican Machaca, a breakfast burritor with eggs, beef or pork, tomatoes and salsa.'], 
			CO: ['Colorado',"colorado_recipe.html", '../static/img/colorado_state_food_pic.jpeg', 'Cinnamon Roll', 'A cinnamon roll is a sweet roll served commonly in Northern Europe and North America. In North America, its common use is as breakfast or dessert']}

		if (state_ab in states){
			$("#myModal").modal();
			$(".modal-title").text(states[state_ab][0])
			$("#recipe_link").attr('href', states[state_ab][1])
	    	$("#food-image").attr("src", states[state_ab][2])
	    	$("#food").text(states[state_ab][3])
	    	$("#desc").text(states[state_ab][4])
		}
}

$(document).ready(function() {
	


	$('#map').usmap({
	'stateStyles': {
	  fill: 'white'
	},
	'stateHoverStyles': {
	  fill: '#FFD348'
	},


	'click': function(event, data) {
		var state_ab = data.name
	   
		
		var states = {
			MI:['Michigan', "michigan_recipe.html",'../static/img/pannukakku.jpg', 'Pannukakku', 'Pannukakku is a Finnish pancake made with the same ingredients, but with lemon, and baked instead of pan-fried. A large population of immigrants from Finland brought it to Michigan decades ago, and the food and its new home have been in a love affair together ever since.'], 
			NY:['New York', "newyork_recipe.html" , '../static/img/bagel.jpeg','Bagels', 'Apologies to New Yorkers living outside of New York City, but when the best bagels in the world come from somewhere in your state, it needs to be acknowledged. For the epitome of a New York breakfast, order your fresh bagel with a schmear of cream cheese and some lox or smoked salmon.'], 
			NJ:['New Jersey',"newjersey_recipe.html", '../static/img/pork_roll.jpg','Pork Roll', 'Also known as Taylor Ham, the pork roll was reportedly invented in 1856 by John Taylor and is sliced and pan-fried or grilled ham (or Spam). The most popular breakfast item generally consists of pork roll on a bun or bagel, with a fried egg, American cheese, sometimes lettuce and/or tomato, and topped with condiments such as salt, pepper, ketchup, mustard, and hot sauce. It has also been called a Jersey Breakfast.'], 
			PA:['Pennsylvania',"pennsylvania_recipe.html", '../static/img/fasnacht.jpg', 'Fasnacht', 'A Pennsylvania Dutch creation, fasnacht is the name of both a festival (which takes place the day before Lent begins) and the fried doughnuts served on that day. Traditionally made as a way to empty the pantry of lard, sugar, fat, and butter before religious fasting, the square or circular pastries can be purchased year-round in Pennsylvania, especially in the eastern part of the state.'], 
			AZ:['Arizona', "arizona_recipe.html", '../static/img/arizona_state_food_pic.jpg', 'Machaca Breakfast Burrito', 'This is a classic take on a Mexican Machaca, a breakfast burritor with eggs, beef or pork, tomatoes and salsa.'], 
			CO: ['Colorado',"colorado_recipe.html", '../static/img/colorado_state_food_pic.jpeg', 'Cinnamon Roll', 'A cinnamon roll is a sweet roll served commonly in Northern Europe and North America. In North America, its common use is as breakfast or dessert']}

		if (state_ab in states){
			$("#myModal").modal();
			$(".modal-title").text(states[state_ab][0])
			$("#recipe_link").attr('href', states[state_ab][1])
	    	$("#food-image").attr("src", states[state_ab][2])
	    	$("#food").text(states[state_ab][3])
	    	$("#desc").text(states[state_ab][4])
		}
		

		
	  }
	});



	});

/*adapted from: https://www.w3schools.com/howto/howto_js_filter_lists.asp */
	function filter() {
			    var input, filter, ul, li, a, i;
			    input = document.getElementById("search");
			    filter = input.value.toUpperCase();
			    ul = document.getElementById("stateUL");
			    li = ul.getElementsByTagName("li");
			    for (i = 0; i < li.length; i++) {
			        a = li[i].getElementsByTagName("a")[0];
			        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			            li[i].style.display = "";
			        } else {
			            li[i].style.display = "none";

			        }
			    }
			}