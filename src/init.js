$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $('.addDancersButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make 10 dancers each with a random position
    for (var i = 0; i < 10; i++) {
      var dancer = new dancerMakerFunction(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      $('body').append(dancer.$node);
    }
  });

  $('.lineUpButton').on('click', function(event) {
    $('.dancer').css('left', '44px');
  });

  $('.disperseButton').on('click', function(event) {
    $('.dancer').each(function() {
      let randomHeight = $('body').height() * Math.random();
      let randomWidth = $('body').width() * Math.random();
      $(this).css('left', randomWidth);
      $(this).css('top', randomHeight);
    });
  });

});

// $(document).on('mousemove', function(blinky) {
//   $('.blinkyDancer').css({
//     left: blinky.pageX,
//     top: blinky.pageY
//   });
// });