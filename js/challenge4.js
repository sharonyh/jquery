$(document).ready(function(){
    console.log("Yep, my function is being called")
    $("input[type='submit']").click(function(){
        if ($("input[name='fullname']").val().length==0){
            $("#nameerrormsg").show();
            if ($("input[name='streetaddr']").val().length==0){
                $("#addrerrormsg").show();
            }
            else{
                $("#addrerrormsg").hide();
            }
            return false;
        }
        else{
            $("#nameerrormsg").hide();
        }
        if ($("input[name='streetaddr']").val().length==0){
            $("#addrerrormsg").show();
            return false;
        }
        else{
            $("#addrerrormsg").hide();
            return true;
        }
    });
})