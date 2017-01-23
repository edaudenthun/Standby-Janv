$(document).ready(function() {
    $('.parallax').parallax();
});


$(document).ready(function() {
    Materialize.updateTextFields();
});

$(document).ready(function() {
    $('.modal').modal();
});

$('#modal1').modal('open');

$('#modal1').modal('close');


$('.modal').modal({
    dismissible: true,
    opacity: .5,
    in_duration: 300,
    out_duration: 200,
    starting_top: '4%',
    ending_top: '10%',
    ready: function(modal, trigger) {
        alert("Ready");
        console.log(modal, trigger);
    },
    complete: function() {
        alert('Closed');
    }
});


function checkform(){
var quest1 = $('#question1').val();
var quest2 = $('#question2').val();
var mail = $('#email').val();

$('#resultform').html("Question 1 : " + quest1 +" <br>Question 2 : "+ quest2+" <br>Email : " + mail);
}
