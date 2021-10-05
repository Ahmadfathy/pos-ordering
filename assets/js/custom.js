$(document).ready(function(){
  
  $('#new_customer_btn').click(function() {
    $('.customers_table').hide();
    $('.new_customer').show();
  });
  $('#back_customers_table').click(function() {
    $('.customers_table').show();
    $('.new_customer').hide();
  });

  // $('.add_qty').click(function() {
  //   $('.items_count').addClass('add_item_action');
  //   $('.item_price').removeClass('add_item_action');
  //   $('.total_items_price').removeClass('add_item_action');
  // });
  // $('.add_discount').click(function() {
  //   $('.items_count').removeClass('add_item_action');
  //   $('.item_price').removeClass('add_item_action');
  //   $('.discount_input').addClass('add_item_action');
  // });
  // $('.add_item_price').click(function() {
  //   $('.items_count').removeClass('add_item_action');
  //   $('.item_price').addClass('add_item_action');
  //   $('.total_items_price').removeClass('add_item_action');
  // });

  $('.price_action').click(function() {
    $('.price_pad').show();
    $('.disc_pad').hide();
    $('.discCur_pad').hide();
  });
  $('.disc_action').click(function() {
    $('.price_pad').hide();
    $('.disc_pad').show();
    $('.discCur_pad').hide();
  });
  $('.discCur_action').click(function() {
    $('.price_pad').hide();
    $('.disc_pad').hide();
    $('.discCur_pad').show();
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



// Discount Refliction Pad
var resultField = $('.discount_input');
function insertNumber (number) {
    var existingNumber = resultField.val()
    resultField.val(existingNumber + number )
};
function deleteNumber (){
    var valou = resultField.val()

    if(valou!='') {
        resultField.val(resultField.val().slice(0,-1));
    }
}

// Discount Refliction Pad
var resultFieldCur = $('.discount_inputCur');
function insertNumberCur (number) {
    var existingNumberCur = resultFieldCur.val()
    resultFieldCur.val(existingNumberCur + number )
};
function deleteNumberCur (){
    var valou = resultFieldCur.val()

    if(valou!='') {
        resultFieldCur.val(resultFieldCur.val().slice(0,-1));
    }
}

// Price Refliction Pad
var PricerResultField = $('.price_input');
function priceInsertNumber (number) {
    var existingNumber = PricerResultField.val()
    PricerResultField.val(existingNumber + number )
};
function priceDeleteNumber (){
    var valou = PricerResultField.val()

    if(valou!='') {
        PricerResultField.val(PricerResultField.val().slice(0,-1));
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


/*=============================================
================ Payment Scripts
=============================================*/ 
$(document).ready(function() {
  $(".chose_payment_methods a").on('click', function() {
    var choosenMethod = $(this).text();
    var card = $('<a href="javascript:void(0)" class="list-group-item list-group-item-action" title="Bank">');
    var mountHere = $('<span class="ml-5 mr-2">55.00</span>');
    var removeButton = $('<span class="remove_btn"><i class="text-danger fa fa-trash"></i></span>');
    removeButton.click(function() {
      $(this).parent().remove();
      var count = $('#selected_payment a').length;
      console.log(count);
      if(count > 0){
        $('.basic_payment').hide();
        $('.counting_payment').show();
      } else if (count == 0){
        $('.basic_payment').show();
        $('.counting_payment').hide();
      }
    });
    card.append(choosenMethod);
    card.append(mountHere);
    card.append(removeButton);
    $("#selected_payment").append(card);

    var count = $('#selected_payment a').length;
    console.log(count);
    if(count > 0){
      $('.basic_payment').hide();
      $('.counting_payment').show();
    } else if (count == 0){
      $('.basic_payment').show();
      $('.counting_payment').hide();
    }

  });


  $('.calc_payment button.payment').on('click', function(){
    var finalTotal = $('.final_total').text();
    var payment_final_method = $('.payment_final_method');

    payment_final_method.text(finalTotal);
    // alert(finalTotal)
  })

});

/*=============================================
================ Show Products By Categories
=============================================*/ 
$(document).ready(function() {
  $('.controls li').on('click', function() {
    $(this).siblings().hide();
  });

  $('.callAllCat').on('click', function() {
    $('.controls li').show();
  });
  
});


/*=========================================
============== Payment Pad
=========================================*/ 
var PayResultField = $('#selected_payment_input');
function payInsertNumber (number) {
  var existingNumber = PayResultField.val()
  PayResultField.val(existingNumber + number )
};
function payDeleteNumber (){
  var payVal = PayResultField.val()

  if(payVal!='') {
    PayResultField.val(PayResultField.val().slice(0,-1));
  }
}
