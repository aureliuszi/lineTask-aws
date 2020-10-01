/**
Instructions for Sequential Task
**/

var instruction_welcome_page = {
  type: 'html-button-response',
  choices: ['Continue'],
  stimulus:  "<p align='left'> Dear participant,</p>"+
   "<p align='left'> You are about to participate in a study that was designed to examine your perception of repeated objects, in this case lines.</strong></p>"+
   "<p align='left'> Please carefully read the instructions. </p>",
   on_load: textbox
};

var  instruction_thanks_page = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus: "<p> You've completed the task. </p>" +
   "<p>Thank you for your participation.</p>" +
   "<p> The next section is a short survey (up to 5 min).</p>",
   on_load: textbox
};

var instruction_general = [];
instruction_general = instruction_general.concat(instruction_welcome_page, instruction_thanks_page);

var  instruction_seq1 = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus:  "<p align='left'> The goal of this study is to examine if you can <span style='color: red;'>estimate</span> the <span style='color: red;'>average length of lines appearing in sequence.</span>   </p>"+
   "<p align='left'> In each trial, a sequence of different-length lines will appear on the screen. Below are a few examples of such lines:</p>"+
   "<br></br>"+
   "<img src = img/A70.jpg></img>"+
   "<br></br>"+
   "<img src = img/A270.jpg></img>"+
   "<br></br>"+
   "<img src = img/A170.jpg></img>"+
   "<br></br>"+
   "<p align='left'> Each line in the sequence will appear on the screen for a brief moment.</p>",
   on_load: textbox
};

var  instruction_seq2 = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus: "<p>Following the line sequence, you will be asked to move the mouse left of the line to begin the estimation phase</p>",
  on_load: line

};

var  instruction_seq3 = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus:  "<p align='left'> A line will then appear on the screen. When you move your mouse, the line will change from short to long </p>"+
   "<p p align='left'> By adjusting your mouse, <strong> you are asked to estimate the </strong> <span style='color: red;'> average length of the line sequence you just saw. </span></p>" +
   "<br></br>"+
   "<img src = img/A70.jpg></img>"+
   "<br></br>"+
   "<br></br>",
   on_load: remover_textbox
};

var  instruction_seq4 = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus:  "<p> Once you make the choice, the page will switch to the next trial. </p>"
};

var  instruction_seq5 = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus:  "<p> Once you make your choice, the page will switch to the next trial. </p>"
};

var  instruction_seq6 = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus:  "<p> At the next stage, you will conduct a short practice run to make sure that the task is clear. </p>"+
  "<p> Remember the goal is to <span style='color: red;'> ESTIMATE THE AVERAGE LENGTH </span> of the of the line sequence you just saw.</p>"
};

var  instruction_seq_MainTaskTransition = {
  type: "html-button-response",
  choices: ['Continue'],
  stimulus:  "<p align='left'> Thank you for completing the practice stage. </p>"+
  "<p align='left'> Remember, the goal was to ESTIMATE THE <span style='color: red;'> AVERAGE LENGTH of the line sequence you just saw. </span></p>"+
  "<p align='left'> In the following section you will complete the actual session, which consists of 30 trials. This part of the study should take 15 minutes, more or less. </p>" +
  "<p align='left'> Click <strong>Continue</strong> to begin the actual task. </p>",
  on_load: textbox
};

var instruction_sequence = [];
instruction_sequence = instruction_sequence.concat(instruction_seq1, instruction_seq2, instruction_seq3, instruction_seq4, instruction_seq5, instruction_seq6);


function line () {
  var vertLine = `<div style="border-left:black;border-style:solid;margin-left:${lineSlice}px; height:${vHeight}px;width:0px;position:absolute;" id="vertLine"></div>`;
  var linePrompt = `<div id="linePrompt"><div style="font-size:50px;position:absolute;margin-left:${lineSlice*1.3}px;margin-top:${vHeight/2}px"></div><div style="position:absolute;margin-left:${lineSlice*1.2}px;margin-top:${vHeight/2}px;z-index:5;">Move mouse left of the line to begin</div></div>`;
  //var instrLine = '<div style="position: absolute; top: 100px; right: 10px; width: 1000px; text-align:right;"> Following the face sequence, you will be asked to move the mouse left of the line to begin the rating phase </div>';
  $(".jspsych-content-wrapper").prepend(vertLine);
  $(".jspsych-content-wrapper").prepend(linePrompt);
  //$(".jspsych-content-wrapper").prepend(instrLine);
};

function remover_textbox () {
  $("#vertLine").remove();
  $("#linePrompt").remove();
  var textbox = '<style> p { display: block; margin-top: 1em; margin-bottom: 1em; margin-left: 400px; margin-right: 400px;} </style>';
  $(".jspsych-content").prepend(textbox);
};

function textbox(){
  var textbox = '<style> p { display: block; margin-top: 1em; margin-bottom: 1em; margin-left: 400px; margin-right: 400px;} </style>'
  $(".jspsych-content").prepend(textbox);
}




var vHeight = 960;
var lineSlice = 940 / 10;
