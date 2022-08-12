$(document).ready(function(){
    $('#form').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                
            },
            sname:{
                required:true,
                minlength:4,
                 
            },
            emailadd:{
                required:true,
                email:true,
            },
            pass:{
                required:true,
                minlength:4,
            },
            day:{
                required:true,
            },
            female:{
                required:true,
            }

        }
    })
})



$(document).ready(function(){
    $('#contactform').validate({
        rules:{
            fname:{
                required:true,
                minlength:4,

            },
            email:{
                required:true,
                email:true,
            },
            subject:{
                required:true,
                minlength:4,
            }

        }
    })
})

