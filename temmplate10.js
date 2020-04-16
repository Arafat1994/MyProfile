var myfun = (function() {
    var executed = false;
    return function()
    {
        if (!executed) 
        {
            executed = true;
            $(document).ready($(".code").each(function(){ $(this).prop('counter', 0).animate(
                 {counter:$(this).text()},
             {
                 duration:2000 ,
                 easing:'swing',
                 step:function(now)
                 {
                     $(this).text(Math.ceil(now))   ;      } });
                       
                  } 
                                             )); 
        }
    };
})();

document.getElementById("co3").addEventListener("mouseover",myfun);





  /*    $({ countNum: $('.code').html() }).animate({ countNum: 4000 }, {
            duration: 2000,
            easing: 'linear',
            step: function () {
            $('.code').html(Math.floor(this.countNum) + "+");
        },
        complete: function () {
            $('.code').html(this.countNum + "+");
            //alert('finished');
        }
        });*/
         
         
   