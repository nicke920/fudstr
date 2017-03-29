	var foods = [
		{ 
			realName: "Fruit Loops",
			name: "fruit-loops",
			price: 3,
			score: -10,
			type: "breakfast"
		},
		{ 
			realName: "Bacon",
			name: "bacon",
			price: 5,
			score: -5,
			type: "breakfast"
		},
		{ 
			realName: "Scrambled Eggs",
			name: "scrambled-eggs",
			price: 4,
			score: 7,
			type: "breakfast"
		},
		{ 
			realName: "Yogurt & Oats",
			name: "yogurt-n-oats",
			price: 6,
			score: 10,
			type: "breakfast"
		},
		{
			realName: "Bagel",
			name: "bagel",
			price: 3,
			score: 5,
			type: "breakfast"
		},
		{
			realName: "Egg Whites",
			name: "egg-whites",
			price: 7,
			score: 10,
			type: "breakfast"
		},
		{
			realName: "Muffin",
			name: "muffin",
			price: 2,
			score: -10,
			type: "breakfast"
		},
		{ 
			realName: "Oatmeal",
			name: "oatmeal",
			price: 6,
			score: 10,
			type: "breakfast"
		},
		{
			realName: "Tuna Sandwich",
			name: "tuna-sandwich",
			price: 5,
			score: 7,
			type: "lunch"
		},
		{
			realName: "Hot Dog",
			name: "hot-dog",
			price: 2,
			score: -11,
			type: "lunch"
		},
		{
			realName: "Cheeseburger",
			name: "cheeseburger",
			price: 5,
			score: -6,
			type: "lunch"
		},
		{
			realName: "Poutine",
			name: "poutine",
			price: 7,
			score: -13,
			type: "lunch"
		},
		{
			realName: "Veggie Burger",
			name: "veggie-burger",
			price: 5,
			score: 1,
			type: "lunch"
		},
		{
			realName: "Caesar Salad",
			name: "caesar-salad",
			price: 6,
			score: 0,
			type: "lunch"
		},
		{
			realName: "Burrito",
			name: "burrito",
			price: 7,
			score: -4,
			type: "lunch"
		},
		{
			realName: "Green Juice",
			name: "green-juice",
			price: 7,
			score: 8,
			type: "lunch"
		},
		{
			realName: "Pasta Alfredo",
			name: "pasta-alfredo",
			price: 6,
			score: -5,
			type: "dinner"
		},
		{
			realName: "Steak",
			name: "steak",
			price: 8,
			score: 5,
			type: "dinner"
		},
		{
			realName: "Ramen Noodles",
			name: "ramen-noodles",
			price: 6,
			score: -1,
			type: "dinner"
		},
		{
			realName: "Quinoa",
			name: "quinoa",
			price: 8,
			score: 10,
			type: "dinner"
		},
		{
			realName: "Pizza",
			name: "pizza",
			price: 7,
			score: -6,
			type: "dinner"
		},
		{
			realName: "Kale Salad",
			name: "kale-salad",
			price: 9,
			score: 12,
			type: "dinner"
		},
		{ 
			realName: "Salmon & Peas",
			name: "salmon-peas",
			price: 7,
			score: 10,
			type: "dinner"
		},
		{
			realName: "Mac & Cheese",
			name: "mac-n-cheese",
			price: 5,
			score: -5,
			type: "dinner"
		},

	];



	for (var i = 0; i < foods.length; i++) {
		if (foods[i].type === "breakfast") {
			$('ul.foodListBreakfast').append("<li class='groceryItem' data-name=" + foods[i].name + " data-price=" + foods[i].price + " data-score=" + foods[i].score + "><img src='images/" + foods[i].name + "-img.png'><div class='imgCaption'><p class='captionName'>" + foods[i].realName + "</p><p class='caption captionPrice'><span>$</span>" + foods[i].price + "</p></div></li>");
		}
		else if (foods[i].type === "lunch") {
			$('ul.foodListLunch').append("<li class='groceryItem' data-name=" + foods[i].name + " data-price=" + foods[i].price + " data-score=" + foods[i].score + "><img src='images/" + foods[i].name + "-img.png'><div class='imgCaption'><p class='captionName'>" + foods[i].realName + "</p><p class='caption captionPrice'><span>$</span>" + foods[i].price + "</p></div></li>");
		}
		else {
			$('ul.foodListDinner').append("<li class='groceryItem' data-name=" + foods[i].name + " data-price=" + foods[i].price + " data-score=" + foods[i].score + "><img src='images/" + foods[i].name + "-img.png'><div class='imgCaption'><p class='captionName'>" + foods[i].realName + "</p><p class='caption captionPrice'><span>$</span>" + foods[i].price + "</p></div></li>");
		}
	}


	var cartItems = [];
	var allowancePrice = $('.allowancePrice').data('allowance');
	var healthScore = $('.healthy').data('healthnumber');
	var droppedIndex = 0;
	var submittedItems = [];
	var yourName;
	var amountSpent = allowancePrice - submittedItems['price'];
	var priceArray = submittedItems['price'];
	$('body').append("<div id='overlay'></div>");
	var lifestyle;
$(function(){





	// select gender and budget
	$('.welcomeForm').on('submit', function(event){
		event.preventDefault();
		if ($("#user_name").val().trim() !== "" 
			&& $('input[type=radio]:checked').val() ) {
				console.log('cool');
			yourName = $("#user_name").val();
			lifestyle = $('input[name=budget]:checked').val();
			if (lifestyle === "student"){
				var a = $('.allowancePrice').data('allowance');
				$('.allowancePrice').data('allowance', 20);
				// $('.allowancePrice').attr('data-allowance', '20');
				$('.allowancePrice').text(20);
			}
			if (lifestyle === "adult"){
				$('.allowancePrice').data("allowance",40);
				$('.allowancePrice').text('40');
			}
			if (lifestyle === "baller"){
				$('.allowancePrice').data("allowance",80);
				$('.allowancePrice').text('80');
			}

			$('.current').removeClass('current').hide()
			.next().fadeIn(1000).addClass('current');
			$('.sectionTitle').text('Breakfast');
			allowancePrice = $('.allowancePrice').data('allowance');

			$('header').css('visibility', 'visible');
			$('body').css('background', '#FFF7F3');
			$('#previous').show();
			$('#previous').attr('disabled', true);
			$('#next').show();

		} else {
		      alert("Don't be that person. Please follow the rules.");
		    
		}

	});

	var imgSrc = $('.groceryItem img').attr('src');
	var dataName = $('.groceryItem').data('name');
	var dataPrice = $('.groceryItem').data('price');
	var dataHealthScore = $('.groceryItem').data('score');
	$('#overlay').append(`<img src='${imgSrc}'>`)
		.append(`<p>Name: ${dataName}</p>`)
		.append(`<p>Price: ${dataPrice}</p>`)
		.append(`<p>Health Score: ${dataHealthScore}</p>`);


	$('.overlayActive').click(function(event) {
		event.preventDefault
		$('#overlay').fadeIn();
	})

	$('#overlay').click(function(){
	  $('#overlay').fadeOut("slow");
	});

	// makes the grocery item box draggable and creates a clone of it
	$(".groceryItem").draggable({ 
		helper:'clone',
		drag: function(event,ui) {
			// $(ui.helper).height(80).width(80),
			$(ui.helper).css('transform', 'scale(0.2)'),
			$('.cart').css('box-shadow', 'inset 0 0 33px 0 rgba(0,0,0,0.10)')
			},
		stop: function() {
			$('.cart').css('box-shadow', 'none')
		},
		/* Rectangle 10: */
		cursor: 'move',
		cursorAt: {top: 150, left: 150}
		});
	// make cart droppable, only accept .groceryItem
	$('.cart').droppable({
		accept: '.groceryItem',
		drop: function(event, ui) {
			// on drop, create clone of ui element. place in cart div
			var droppedItem = $(ui.draggable).clone();

			// update price div with new data based on dragged content
			var price = $(droppedItem).data('price');

			// if allowance price is greater than 0, then push the data from dropped item to 'cartItems', update the allowancePrice and healthScore in the HTML
			if(allowancePrice > 0 && (allowancePrice - price) >= 0 ) {
				$('.cart').append(droppedItem);
				// also push data from dropped element into cartItems array
				cartItems.push(droppedItem.data());
				allowancePrice = allowancePrice - price
				$('.allowancePrice').text(allowancePrice);
				var health = $(droppedItem).data('score');
				healthScore = healthScore + health
				$('.healthy').text(healthScore);
				// add class to dropped item to make smaller
			} else {
				alert("Oh no! You're out of money, spend wisely")
			}
				$(droppedItem).addClass("groceryDropped");
				$('.groceryDropped').css({ 'width': 50, 'height': 50, 'border': 'none'});
				if ($('.cart').find('.groceryDropped .imgCaption')) {
					$('.cart .groceryDropped .imgCaption').hide()
					console.log('tureee')
				}
			console.log("update", allowancePrice)

			// make cart item draggable
			$(".groceryDropped").draggable({ 
				helper:'clone',
				scroll: true,
				drag: function() {
					$('.trash').css({'border': '20px solid transparent', 'opacity': 1});
					},
				stop: function() {
					$('.trash').css({'border': '0px solid transparent', 'opacity': 0.4})
				}
			 });

			$('.trash').droppable({
					accept: '.groceryDropped',
					drop: function(event,ui) {
						var cartToTrash = $(ui.draggable).remove().hide().clone();
						console.log(cartToTrash.data('name'));
						//Get dropped Item name
						//loop through/or find out IndexOf of said item in cartItems
						for (var i = 0; i < cartItems.length; i++){
							if (cartItems[i].name === cartToTrash.data('name')) {
								droppedIndex = cartItems.indexOf(cartItems[i]);
								// console.log(droppedIndex);
								console.log(cartItems[i].name);

								cartItems.splice(droppedIndex, 1);
							}
						}


						//Use that index to splice
						

						var price = $(cartToTrash).data('price');
						allowancePrice = allowancePrice + price

						$('.allowancePrice').text(allowancePrice);

						var health = $(cartToTrash).data('score');
						healthScore = healthScore - health
						$('.healthy').text(healthScore);
					} // close drop function
			}) // close droppable
			console.log(droppedItem.data());
		}
	})


	


	// Next and Previous buttons to toggle between breakfast, lunch, and dinner

	$('#next').click(function() {
		$('.current').removeClass('current').hide()
		.next().fadeIn().addClass('current');
		if ($('.current').hasClass('foodListBreakfast')) {
			$('.sectionTitle').text('Breakfast');
		}
		if ($('.current').hasClass('foodListLunch')) {
			$('.sectionTitle').text('Lunch');
		}
		if($('.current').hasClass('foodListDinner')) {
			$('.sectionTitle').text('Dinner');
			$('#next').attr('disabled', true);
			$('#submit').show();

		}
		$('#previous').attr('disabled', null);

	});

	$('#previous').click(function() {
		$('#submit').hide();
		$('.current').removeClass('current').hide()
		.prev().fadeIn().addClass('current');
		$('.sectionTitle').text('Lunch');
		if($('.current').hasClass('first')) {
			$('.sectionTitle').text('Breakfast');
			$('#previous').attr('disabled', true);
		}
		$('#next').attr('disabled', null);
	});


	$('.subby').on('submit', function(event){
		event.preventDefault();
		submittedItems = cartItems;

		for(var i = 0; i < submittedItems.length; i++) {
			$('ul.selectedItemsList').append("<li class='groceryItem' data-name=" + submittedItems[i].name + " data-price=" + submittedItems[i].price + " data-score=" + submittedItems[i].score + "><img src='images/" + submittedItems[i].name + "-img.png'></li>");
		}

		$('main').css({
			'display': 'flex',
			'justify-content': 'center',
			'align-items': 'center'
		}),
		$('body').css('background', '#5A72D9');
		$('.selectedItemsList').css('padding', 30);
		$('.healthImage').fadeIn(4000);
		$('.trash').hide();
		$('.sectionTitle').text("You Chose the following items").css('text-align', 'center');
		$('.foodListDinner').hide();
		$('.subby').hide();
		$('#previous').hide();
		$('#next').hide();
		$('p.message').css('text-align', 'center');
		
		if (healthScore < 40) {
			$('.healthImage').append('<img src="images/lowhealth_2x.png">').fadeIn('slow');
			$('.message').text(`Come on, ${yourName}! You know you can do better than that!`).fadeIn('slow');
		} else if (healthScore >= 40 && healthScore < 70) {
			$('.healthImage').append('<img src="images/mediumhealth_2x.png">').fadeIn('slow');
			$('.message').text(`${yourName}! Not the best, not the worst. Just average. Is that what you want?`).fadeIn('slow');
		} else {
			$('.healthImage').append('<img src="images/highhealth_2x.png">').fadeIn('slow');
			$('.message').text(`${yourName}, THATS WHAT I'M TALKIN' ABOUT. You're real smart. I like that.`).fadeIn('slow');
		}
		console.log('amountspent', amountSpent);
		console.log('prices', priceArray);
		// $('.calcSpending').show("slow");
		// $('.totalSpent').show('slow');
		$('.startOver').show("slow");
		$('.tweet').show();

	});

	//ADDING THE SHARE BUTTON FOR TWITTER

	// We bind a new event to our link
	$('.tweet').click(function(e){

	  //We tell our browser not to follow that link
	  e.preventDefault();

	  $(this).prop('title', `Hi twitter, I'm ${yourName} and I reached a health score of ${healthScore} on the ${lifestyle} budget!`);

	  //We get the URL of the link
	  var loc = $(this).attr('href');

	  //We get the title of the link
	  var title  = escape($(this).attr('title'));

	  //We trigger a new window with the Twitter dialog, in the middle of the page
	  window.open('http://twitter.com/share?url=' + loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');

	});




});  //end of document ready











	// $(".cart").droppable({
	// 	accept:'.groceryItem',
	// 	drop: function(event, ui){
	// 		var droppedItem = $(ui.draggable).clone();
	// 		$(this).append(droppedItem);
	// 		$('.allowancePrice').text($('.allowancePrice').attr('data-startingAllowance') - breakfastFoodPrice);
	// 		console.log('healthscore', breakfastFoodPrice, breakfastFoodScore);

	// 		cartItems.push(droppedItem.attr('data-price'));
	// 		$(droppedItem).addClass("groceryDropped");
	// 		$('.groceryDropped').css({ 'width': 30, 'height': 30});
	// 	}
	// });


// "fruit loops cereal", "vector cereal", "egg whites", "scrambled eggs", "bacon", "bagel", "yogurt & granola", "muffin"];

//  ["cheese burger", "hawaiian veggie burger", "tuna sandwich", "quinoa salad", "caesar salad", "hot dog", "veggie platter", "poutine", "burrito"];

//  ["grilled salmon with snap peas", "steak and cauliflower potatoes", "meat lovers deluxe pizza", "mac and cheese", "pork belly ramen noodles", "chicken pad thai", "alfredo pasta", "kale & quinoa salad", "sauteed shrimp and portobello mushrooms"]




// var lunchFoods = [
// 		{
// 			name: "cheeseburger",
// 			price: 3
// 		},
// 		{
// 			name: "burger",
// 			price: 3
// 		},
// 		{
// 			name: "sandwich",
// 			price: 3
// 		},
// 		{
// 			name: "salad",
// 			price: 3
// 		},

// 	];

// 	var dinnerFoods = [
// 		{
// 			name: "salmon",
// 			price: 3
// 		},
// 		{
// 			name: "steak",
// 			price: 3
// 		},
// 		{
// 			name: "pizza",
// 			price: 3
// 		},
// 		{
// 			name: "noodles",
// 			price: 3
// 		},
// 	];