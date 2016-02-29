
    var numberToGuess;
    var counter = 0;
    var numberOfCrystals = 4;
    var wins = 0;
    var losses = 0;
 

 $( document ).ready(function() {

 	// create the crystal image elements
  	for (var i=0; i< numberOfCrystals; i++){

    	var imageCrystal = $('<img>');
      
  		imageCrystal.attr('src', "assets/images/image" + (i + 1) + ".jpg");      
  		imageCrystal.attr('alt', 'crystals');
    	imageCrystal.addClass('crystalImage');
   		$('#crystals').append(imageCrystal);
   	}

   	// this is an event handler for clicking a crystal
  	$('.crystalImage').on('click', function() {

  		// add the crystal number to the total
   		counter = counter + parseInt($(this).data('num'));
      
      	// display the total
  		$('#totalScore').text(counter);

  		// alerts if player won or lost
    	if (counter == numberToGuess){
       		alert('You won!!!!');
       		wins++;
       		$('#wins').text(wins);
       		reset();

    	}else if( counter > numberToGuess){
        	alert('You lost!');
        	losses++;
        	$('#losses').text(losses);
        	reset();
    	}
	});

  reset();
});
 
function reset() {

	counter=0;
	numberToGuess=Math.floor((Math.random() * 120) + 19);
	$('#number').text(numberToGuess);
	$('#totalScore').text(counter);

	$('#crystals img').each(function(index) {

		var num = Math.floor((Math.random() * 12) + 1);
		$(this).attr('data-num', num);
	});
}
     