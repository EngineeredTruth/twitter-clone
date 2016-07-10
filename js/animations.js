$(document).ready(function(){

jQuery("time.timeago").timeago();

$('#tweet-controls').hide();
$('#char-count').hide();

$('.tweet-compose').on('click', function(){
  $('.tweet-compose').css('height','5em');
  $('#tweet-controls').show();
  $('#char-count').show();
});

$('.tweet-compose').keydown(function(){
  var chars = parseInt($('#char-count').text());

  $('#char-count').text(chars-1);

  if (chars < 1){
    document.getElementById("tweet-submit").disabled = true;
  }
  if (chars  > 1){
    document.getElementById("tweet-submit").disabled = false;
  }
});



$('#tweet-submit').on('click',(function(){

  var newTweet = $('<img class="avatar" src="img/alagoon.jpg" />'+
    '<strong class="fullname">Matt Tran</strong> '+
    '<span class="username">@EngineeredTruth</span>'+
    '<p class="tweet-text">' + $('.tweet-compose').val() +'</p>' +
    '<div class="time"><time class="timeago">' + jQuery.timeago(new Date()) + '</time></div>');
    // "<div class='time'><p>Time:</p><time class='timeago' datetime='2016-07-01T09:24:17Z'></time></div>");

  $(newTweet).prependTo('.tweet:first-child');
  $('.tweet-compose').val(null);
}));

$('.stats').hide();

$('.tweet').hover( function(){
  $(this).find('.stats').slideDown()
  }, function(){
  $(this).find('.stats').slideUp();
});

$('.tweet-actions').hide();

$('.tweet').click(function(){
  $(this).find('.tweet-actions').slideDown();
});

$('.tweet').dblclick(function(){
  $(this).find('.tweet-actions').slideUp();
});

});
