
 $( document ).ready(function() {
    var numberToGuess = 44;
    var counter = 0;
    var numbers = [2, 20, 1, 5];
    $('#number').text(numberToGuess);

       $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });