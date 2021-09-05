$(document).ready(function(){
  
  $('#new_customer_btn').click(function() {
    $('.customers_table').hide();
    $('.new_customer').show();
  });
  $('#back_customers_table').click(function() {
    $('.customers_table').show();
    $('.new_customer').hide();
  });

  $(".items_table tbody tr").click(function() {
    $(this).toggleClass('selected_tr');
    $(this).siblings().removeClass('selected_tr');
  });
  
  $(".level-three .card").append('<a href="javascript:void(0)" data-toggle="modal" data-target="#exampleModal" class="absolute_link"></a>');

  $('.extra-qnty').on('click', function() {
    $(this).addClass('show-inc-dec');
    $(this).find('h5').addClass('rerere');
  });

  $('.numbers-row input').attr('disabled', 'disabled');


  // select-1 onChange
  $('.dropdown-menu-1 a').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select-1').text(getValue);
  });
  // select-2 onChange
  $('.dropdown-menu-2 a').on('click', function() {
    var getValue = $(this).text();
    $('.dropdown-select-2').text(getValue);
  });


  // Show Hide Note Input 
  $('.note-input').hide();
  $('.add_note').click(function () {
    $('.note-input').toggle();
  });

});

$(function() {

  $(".numbers-row").prepend('<div class="inc button">+</div>');
  $(".numbers-row").append('<div class="dec button">-</div>');
  $(".button").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });

});