$(document).ready(function(){
  console.log("Yep, my function is being called")
  $("#subscribe").click(function(){
    if ($(this).is(':checked')) {
      console.log("selected");
      $("#emailField").show();
    }
    else{
      console.log("not selected");
      $("#emailField").hide();
    }
  });
});

// Alternatively:

// $(document).ready(function(){
//   console.log("Yep, my function is being called")
//   $("#subscribe").click(function(){
//     $("#emailField").toggle();
//   });
// });
