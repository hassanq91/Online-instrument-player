//using keypress
$(document).keydown(function(e){
    var letter = e.key;
 hovertext(letter);
 sound(letter);
});


//using mouse click

  $(".drum").click(function(e){
    var letter2 = e.innerHTML();
    hovertext(letter2);
    sound(letter2);
  });
 




function sound(input){
    var letter = input;
    switch(letter){
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play(); 
            break;
        case 's':
                var tom1 = new Audio("sounds/tom-3.mp3");
                tom1.play();
                break;
        case 'd':
                    var tom1 = new Audio("sounds/tom-4.mp3");
                    tom1.play();
                    break;
        case 'j':
                        var tom1 = new Audio("sounds/snare.mp3");
                        tom1.play(); 
                        break; 
        case 'k':
                            var tom1 = new Audio("sounds/kick-bass.mp3");
                            tom1.play();
        case 'l':
                                var tom1 = new Audio("sounds/crash.mp3");
                                tom1.play(); 
                                break;
        default: console.log("not found");
    }
  
}

function hovertext(letter){
    $("." + letter).addClass("pressed");
    
  setTimeout(function(){
     $("." + letter).removeClass("pressed");
  },100);
}