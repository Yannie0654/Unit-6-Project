$(".start-button").click(function() {
    $(".firstImage").show();
    $(".question-1").hide();
    $(".second-button").show();
    $("h3").text("Here is the treasure map, you can use it to find anything you want.");
});

$(".pstart-button").click(function() {
    $(".pfirstImage").show();
    $(".pcfirstImage").show();
    $(".question-1").hide();
    $(".psecond-button").show();
    $(".csecond-button").show();
    $("h3").text("Here have a cat and a dog，choose one that you most like");
});

$(".second-button").click(function() {
    $(".apple").show();
    $(".weapon").show();
    $(".firstImage").hide();
    $(".question-2").hide();
    $("h3").text("Congratulations! You get an apple that is your first food and a weapon that you can use to protect by yourself.");
});

$(".csecond-button").click(function() {
    $(".fish").show();
    $(".pfirstImage").hide();
    $(".question-2").hide();
    $("h3").text("");
});


