$(document).ready(function (){
    $('#send, #send_2').click(function(){
        alert('Form Submitted');
    });
    $(document).keydown(function(event) {
        var x = event.keyCode;
        if (x == 27) {
            if (confirm("Are You Sure?")) {
                alert("Good Bye!");
               close();
            } else {
                alert("Thanks for Stay With Us!");
            }
        }
    });
    $(".margin_image").click(function(){
        $("#show").css("display","block")
        $("#showimg").attr("src",this.src)
        $("#showimg").css({"top":(innerHeight-250),"left":(innerWidth-750)/2})
    });
    $("#show i").click(function(){
        $("#show").css("display","none")
        $("#showimg").attr("src","")
    });
    var index = 1;
    count = $('#slider img').length;
    sliderHandler();

    function sliderHandler(){
        loop = setInterval(function(){
            $('#pic'+index).fadeOut(1000);
            if(index == count){
                index = 1;
            }else{
                index++;
            }
            $('#pic'+index).fadeIn(1000);
        }, 4000);
        
    }
    $("#prev").click(function(){
        clearInterval(loop);
        $('#pic'+index).fadeOut(300);
        if(index == 1){
            index = count;
        }else{
            index--;
        }
        $('#pic'+index).fadeIn(300);
        sliderHandler();
    });
    $("#next").click(function(){
        clearInterval(loop);
        $('#pic'+index).fadeOut(300);
        if(index == count){
            index = 1;
        }else{
            index++;
        }
        $('#pic'+index).fadeIn(300);
        sliderHandler();
    });
    $("#index div").mouseover(function(){
        $(this).children("span").css("top","-700%");
        $(this).children("img").css("opacity","0.3");

    });
    $("#index div").mouseout(function(){
        $(this).children("span").css("top","-235%");
        $(this).children("img").css("opacity","1");
    });
    $("#index div").click(function(){
        var site = $(this).children("span").text();
        document.location = "Hotels/"+site+".html";

    });
    var indexx = 1;
    countt = $('#slider1 img').length;
    sliderHandlerr();
    n =  new Date();
    y = n.getFullYear();
    document.getElementById("date").innerHTML = y;

    function sliderHandlerr(){
        loopp = setInterval(function(){
            $('#pi'+indexx).fadeOut(1000);
            if(indexx == countt){
                indexx = 1;
            }else{
                indexx++;
            }
            $('#pi'+indexx).fadeIn(1000);
        }, 4000);
        
    }
    $("#prevv").click(function(){
        clearInterval(loopp);
        $('#pi'+indexx).fadeOut(300);
        if(index == 1){
            indexx = countt;
        }else{
            indexx--;
        }
        $('#pi'+indexx).fadeIn(300);
        sliderHandlerr();
    });
    $("#nextt").click(function(){
        clearInterval(loopp);
        $('#pi'+indexx).fadeOut(300);
        if(indexx == countt){
            indexx = 1;
        }else{
            indexx++;
        }
        $('#pi'+indexx).fadeIn(300);
        sliderHandlerr();
    });
});