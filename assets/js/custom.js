$(document).ready(function(){
  
  $('#new_customer_btn').click(function() {
    $('.customers_table').hide();
    $('.new_customer').show();
  });
  $('#back_customers_table').click(function() {
    $('.customers_table').show();
    $('.new_customer').hide();
  });

  $('.add_qty').click(function() {
    $('.items_count').addClass('add_item_action');
    $('.item_price').removeClass('add_item_action');
    $('.total_items_price').removeClass('add_item_action');
  });
  $('.add_discount').click(function() {
    $('.items_count').removeClass('add_item_action');
    $('.item_price').removeClass('add_item_action');
    $('.total_items_price').addClass('add_item_action');
  });
  $('.add_item_price').click(function() {
    $('.items_count').removeClass('add_item_action');
    $('.item_price').addClass('add_item_action');
    $('.total_items_price').removeClass('add_item_action');
  });


  $(".items_table tbody tr table tr.main_tr").click(function() {
    $(this).parents('tr').toggleClass('selected_tr');
    $(this).parents('tr').siblings().removeClass('selected_tr');
  });

  $(".note_input").on("keyup" , function(){
    $(".selected_tr .note_box span").text($(this).val());
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

  // select customer from table onChange
  $('.customer_table tbody tr').on('click', function() {
    $(this).toggleClass('selected_customer_tr bg-light');
    $(this).siblings().removeClass('selected_customer_tr bg-light');

    $('#set_customer_btn').addClass('d-inline-block');
    $('#new_customer_btn').addClass('d-none');

  });
  $('#set_customer_btn').on('click', function() {
    var getValue = $('.customer_table tbody tr.selected_customer_tr').find('.get_customer_name').text();
    $(".set_customer_name").text(getValue);
    // alert(getValue)
    // $(".set_customer_name").fadeOut(function () {
    //     $("#fold_p").text(($("#fold_p").text() == 'Fold it') ? 'Expand it' : 'Fold it').fadeIn();
    // });
    // $('.dropdown-select-2').text(getValue);
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

// Calculator Numbers Input 
var resultField = $('.items_table .selected_tr .add_item_action');
function insertNumber (number) {
    var existingNumber = resultField.val()
    resultField.val(existingNumber + number )
};
function cNumber() {
    resultField.val('')
}
function calculate(){
    var result = eval(resultField.val())
    resultField.val(result)
}
function deleteNumber (){
    var valou = resultField.val()

    if(valou!='') {
        resultField.val(resultField.val().slice(0,-1));
    }
}


// Encrease Decrease Items Qty
function increaseValue() {
  var value = parseInt(document.getElementById('items_count').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('items_count').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('items_count').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('items_count').value = value;
}

