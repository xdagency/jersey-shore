$(".fun a").click(function(){
    $("body").addClass("escape");
});

$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $('body').removeClass('escape');
    }
});

$(".overlay img").click(function(){
    $("body").removeClass("escape");
});