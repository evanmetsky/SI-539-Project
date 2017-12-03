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
			MI:['Michigan', '../static/img/pannukakku.jpg', 'Pannukakku', 'Pannukakku is a Finnish pancake made with the same ingredients, but with lemon, and baked instead of pan-fried. A large population of immigrants from Finland brought it to Michigan decades ago, and the food and its new home have been in a love affair together ever since.'], 
			NY:['New York', '../static/img/bagel.jpeg','Bagels', 'Apologies to New Yorkers living outside of New York City, but when the best bagels in the world come from somewhere in your state, it needs to be acknowledged. For the epitome of a New York breakfast, order your fresh bagel with a schmear of cream cheese and some lox or smoked salmon.'], 
			NJ:['New Jersey', '../static/img/pork_roll.jpg','Pork Roll', 'Also known as Taylor Ham, the pork roll was reportedly invented in 1856 by John Taylor and is sliced and pan-fried or grilled ham (or Spam). The most popular breakfast item generally consists of pork roll on a bun or bagel, with a fried egg, American cheese, sometimes lettuce and/or tomato, and topped with condiments such as salt, pepper, ketchup, mustard, and hot sauce. It has also been called a Jersey Breakfast.'], 
			PA:['Pennsylvania', '../static/img/fasnacht.jpg', 'Fasnacht', 'A Pennsylvania Dutch creation, fasnacht is the name of both a festival (which takes place the day before Lent begins) and the fried doughnuts served on that day. Traditionally made as a way to empty the pantry of lard, sugar, fat, and butter before religious fasting, the square or circular pastries can be purchased year-round in Pennsylvania, especially in the eastern part of the state.'], 
			AZ:['Arizona', '../static/img/arizona_state_food_pic.jpg', 'Machaca Breakfast Burrito', 'This is a classic take on a Mexican Machaca, a breakfast burritor with eggs, beef or pork, tomatoes and salsa.'], 
			CO: ['Colorado', '../static/img/colorado_state_food_pic.jpeg', 'Cinnamon Roll', 'A cinnamon roll is a sweet roll served commonly in Northern Europe and North America. In North America, its common use is as breakfast or dessert']}
		if (state_ab in states){
			$("#myModal").modal();
			$(".modal-title").text(states[state_ab][0])
	    	$("#food-image").attr("src", states[state_ab][1])
	    	$("#food").text(states[state_ab][2])
	    	$("#desc").text(states[state_ab][3])
		}
		

		
	  }
	});



	});