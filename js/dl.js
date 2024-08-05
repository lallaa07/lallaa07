$(document).ready(function(){
    $('dl dt').click(function(){
        $('+dd', this).slideUp(800);
    })
});