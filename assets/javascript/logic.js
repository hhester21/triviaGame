
var questions = [{
  question: " 'Mom, after all these years, God’s not going to take a call from you.' ",
  choices: ["Michael", "Lindsey", "Gob", "Buster"],
  correctAnswer: "Michael"
  },
  {
  question: "'Do you guys know where I can get one of those gold necklaces with a “T” on it?'",
  choices: ["George Michael", "Lindsey", "Maeby", "Gob"],
  correctAnswer: "Maeby"
  },
  {
  question: "'Why are you squeezing me with your body?'",
  choices: ["Michael", "Lindsey", "Gob", "Buster"],
  correctAnswer: "Michael"
  },
   {
  question: "'Is this why you wanted to fight this thing? So you could run off with this great redwood of a whore?'",
  choices: ["Michael", "Lindsey", "Lucille", "Tobias"],
  correctAnswer: "Lucille"
  },
    {
  question: "'I’m a failure. I can’t even fake the death of a stripper.'",
  choices: ["George Michael", "Lindsey", "Gob", "Tobias"],
  correctAnswer: "Gob"
  },
    {
  question: "'What’s Spanish for “I know you speak English?'",
  choices: ["Lucille", "Lindsey", "Gob", "Michael"],
  correctAnswer: "Lucille"
  },
  {
  question: "'Even if it means me taking a chubby, I will suck it up'",
  choices: ["Lucille", "Lindsey", "Tobias", "George Michael"],
  correctAnswer: "Tobias"
	},
	{
	  question: "'Did that Mexican girlfriend of yours kick you out?'",
  choices: ["Lucille", "Lindsey", "Gob", "George Sr."],
  correctAnswer: "Lucille"
	},
	{
	  question: "'I’m afraid I prematurely shot my wad on what was supposed to be a dry run if you will, so I’m afraid I have something of a mess on my hands.'",
  choices: ["George Michael", "Buster", "Tobias", "George Sr."],
  correctAnswer: "Tobias"
	},
	{
	  question: "'I hear the jury’s still out on science.'",
  choices: ["Michael", "Lucille", "Gob", "Lindsey"],
  correctAnswer: "Gob"
	}


];

 var startOfShow=true;
var answerSelected=false;
var nextQuestion=false;

var showImage;

var count = 0;

var correct=0;
var incorrect=0;


$("#start").on("click", function(){
	startSlideshow();
  timer.start();
  $("#initial-instructions").hide();
});


$("#exit").on("click", function(){
	stopSlideshow();
  timer.stop();

});


function displayImage() {
  $("#image-holder").html(questions[count].question);
  getRadioButtons();
  

  
}
function getRadioButtons(){
  var radioButtonList=$('<ul>');
  var radio;
  var input='';
  for(var i=0; i< questions[count].choices.length; i++){
    radio=$("<li>");
    input ='<input type="radio" name="answer" value= "'  + questions[count].choices[i] + '" />';
    input+= " "+questions[count].choices[i];
    radio.append(input);
    radioButtonList.append(radio);
    console.log(radio);
    $("#radio-buttons").empty();

    $("#radio-buttons").append(radioButtonList);
  }
}

function nextImage() {
  if(answerSelected===true || startOfShow===true){

    startOfShow=false;
  
  console.log(count);

  


  
  displayImage();

   answerSelected=false;



  getRadioButtons();
   
  

}
}
function startSlideshow() {
console.log("I've been called");
 
  nextImage();

}
function stopSlideshow() {
  timer.stop();
  $("image-holder").empty();
  $("#radio-buttons").empty();
  $("#final-score").show();
  $("#image-holder").html("<img src='https://heavyeditorial.files.wordpress.com/2013/05/tumblr_inline_mn8gpetuvu1qz4rgp.gif?w=780' width='400px'>");
  $("#incorrect").empty();
  $("#incorrect").append(incorrect);
  $("#correct").empty();
  $("#correct").append(correct);
  if(correct>incorrect){
  $("#message").html(" This must not be your first spin in the stair car.");
  $("#image-holder").html("<img src='https://heavyeditorial.files.wordpress.com/2013/05/tumblr_inline_mn8gpetuvu1qz4rgp.gif?w=780' width='400px'>");
  }else{
    $("#image-holder").html("<img src='http://i.imgur.com/swrB3NE.gif' width='400px'>");
    $("#message").html(" Maybe you should go practice your magic and try again later...");

  }

}

$(document).on("change","input[type=radio]",function(){
  
        var selectedAnswer= $(this);
        console.log(questions[count].correctAnswer);
        // add class of userCharacter to Selected Player
        selectedAnswer.attr("class", "userSelection");
        $(this).css("background-color", "red");
        console.log(selectedAnswer.val());

        // assign value from selected character to healthscore
        if(selectedAnswer.val()===questions[count].correctAnswer){
          if(nextQuestion){
            alert("You're right, but it doesn't count!");
            $("#pleaseSelect").hide();
            nextImage();
          }else{
          alert("That's right, asshole!");
          correct++;
          $(".right").empty();
          $(".right").append(correct);
          }

        }else{
          if(nextQuestion){
           alert("Sorry, Ann, you were wrong anyway");
           $("#pleaseSelect").hide();
          }else{
          incorrect++;
          alert("Sorry, Ann, you're wrong.");
          $(".wrong").empty();
          $(".wrong").append(incorrect);
          
          answerSelected=true;
        }
        }
      count++;
      if(count===questions.length){
        stopSlideshow();
        timer.stop();
      }else{
      nextQuestion=false;
      answerSelected=true;
      nextImage();
      console.log("I'm calling nextImage");
      timer.stop();
      timer.time = 20;
      $("#time").html("20");
      timer.start();
    }

      });



var timer = {

  time: 20,
 

  reset: function() {

    timer.time = 20;
    

    
    $("#time").html("20");

  },

  start: function() {

   intervalId= setInterval(timer.count, 1000);
    
  },
  stop: function() {
    
    clearInterval(intervalId);
    
    

    

  
  },
  count: function() {

    timer.time--;
    if(timer.time===0){
      timer.stop();
      timer.time = 20;
      $("#pleaseSelect").show(); 
    $("#time").html("20");

      incorrect++;
      $(".wrong").empty();
      $(".wrong").append(incorrect);
      nextQuestion=true;


    }else{
   
    console.log(timer.time);
    
    $("#time").html(timer.time);
  }

},

  

};