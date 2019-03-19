$('#random').on('mouseover',function() {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var colorString = '0px 0px 30px 0px ' + color;
    $('#random').css('text',colorString);
    
});