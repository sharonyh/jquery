$(document).ready(function(){
    console.log("Yep, my function is being called")
    $("#useBilling").click(function(){
        if ($(this).is(':checked')) {
          $("#home").val($("#billing").val());
          $("#home").attr('disabled', true);

      }
        else{
          $("#home").val('');
          $("#home").attr('disabled', false);
      }
    });
  });