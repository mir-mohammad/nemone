
$ (function(){

    // $("#loading").hide(1000);
     $("#loading").fadeOut(1000);
    // $("#loading").fadeTo(2000,0.7).delay(2000).fadeTo(2000,0);
    // $("#loading").fadeOut(1000,repeat());

    // $("#wrapper").slideUp(2000)

    // $("#jump_down").click(function(){
    //     $("#wrapper").slideDown("slow");
    // })

    // $("#jump_down").click(function(){
    //     $("#wrapper").slideToggle(4000);
    // })

    // $("#wrapper").click(function(){
    //     $("#wrapper").SlideAnimationStop() 
    // })

    

    $(".men").on('click',function(event){
        if (this.hash !==""){
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop:$(hash).offset().top-50
            },800,
            // function(){
            //     window.location.hash = hash;
            // }
            );
        }
    });

    

    $("#navabar_about").mouseenter(
        function(){
            // $("#navabar_about").css({"color":"red","background-color":"rbga(200,30,250,1)"});
            $(this).css({"color":"red","background-color":"rbga(200,30,250,1)"});
            // alert("شما روی درباره من کلیک کرده اید!");
        }
    );
    $("#navabar_about").mouseleave(
        function(){
           
            $(this).css({"color":"white","background-color":"rbga(20,30,250,1)"});
            
        }
    );


        console.log("ready!");
    var a=3 ,b;

    var d= a+b;
    console.log(a)

    a=3;
    if (a==5) {
    console.log("a eqal 5")
    console.log("a eqal 5")
    }
    else {
        console.log("this is  else?!!")
    }

    for (i=0;i<10;i++){

    console.log(i)
    }
    // console.log("after loop:"+i);
    // console.log("salam");

    var a = [1,2,3,4,5]
    console.log(a[4]);
    for (i=0;i<a.length;i++)
    console.log(i+' : '+a[i]);

    // document.getElementsByClassName("maintext")[0].innerHTML="Hello my friend!"
    // document.getElementsByTagName("div")[0].innerHTML = "aaaa";
    // document.getElementsByTagName("LI")[1].innerHTML = "Item 1!"


    // for (i=0;i<document.getElementsByTagName("LI").length;++i)
    // document.getElementsByTagName("LI")[i].style.backgroundColor = "red"
    

    // for (i=0;i<document.getElementsByClassName("maintext").length;++i)
    // document.getElementsByClassName("maintext")[i].innerHTML="Hello my friend!"



    function change_text(){
            document.getElementById("footer").innerHTML="hello ali from javascript";

        }

   
    
// $("li").hide();
// $("#wrapper").hide();

// $ (document).ready(function(){
//     console.log("ready!");

// });

});

// var about_situ = 0;    
// function hide_about(){
//     if( about_situ == 0){
//         document.getElementById("about").style.visibility = "hidden";
//         about_situ =1;
//     }
//     else{
//         document.getElementById("about").style.visibility = "visible";
//         about_situ =0;
//     }
// }   
