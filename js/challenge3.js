$(document).ready(function(){
    console.log("Yep, my function is being called")
    $("input[type='submit']").click(function(){
        if ($("input[name='fruit']").is(':checked')){
            if ($("input[name='standing']").is(':checked')){
                return true;
            }
            else{
                alert("You must choose a standing!");
                return false;
            }
        }
        if ($("input[name='standing']").is(':checked')){
            if ($("input[name='fruit']").is(':checked')){
                return true;
            }
            else{
                alert("You must choose a fruit!");
                return false;
            }
        }
        if ($("input[name='standing']").is(':not(:checked)')){
            if ($("input[name='fruit']").is(':not(:checked)')){
                alert("You must choose a standing and a favorite fruit!");
                return false;
            }
        }
    });
  })
