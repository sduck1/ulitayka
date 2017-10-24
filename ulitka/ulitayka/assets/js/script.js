


$(document).ready(function () {

    //плагин слайдер
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText : ["",""],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            400:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });


    //выпадающий список
    $('.box-2').click(function () {
        $(this).next().toggle();
        $('.human-drop').mouseleave(function () {
            $(this).hide();
        });
    });






    // $.fn.clickToggle = function(func1, func2) {
    //     var funcs = [func1, func2];
    //     this.data('toggleclicked', 0);
    //     this.click(function() {
    //         var data = $(this).data();
    //         var tc = data.toggleclicked;
    //         $.proxy(funcs[tc], this)();
    //         data.toggleclicked = (tc + 1) % 2;
    //     });
    //     return this;
    // };

    // $('.box-2').clickToggle(function(){
    //     $(this).next().show();
    // }, function(){
    //     $(this).next().hide();
    // });

    //1-100 в select
    CycleNumber();
    function CycleNumber() {
        var html, i = 0;
        for (i=1; i<=100; i++){

            if(i==30){
                var htl = '<option  selected>'+i+'лет'+'</option>' ;
                $('.age-human').append(htl);
            }
            html += '<option value="'+i+'">'+i+'</option>' ;
        }
        $('.age-human').append(html);
    }


    //массив country.json
    $.getJSON('Assets/js/contry.json',function (data) {
        $.each(data, function (key , val) {
            $('#page-country').append('<option value="'+key+'">'+val+'</option>');
        })
    })








});

// проверка условия на checked
//
function conditions(checkBox,b) {
    var chArr = document.getElementsByClassName('checkbox-one');
    // var id = document.getElementById(b);
    for(var ch in chArr) {
        if (chArr[ch].getAttribute('id') === checkBox.getAttribute('id') && checkBox.checked === true) {
            break;
        }
        if(checkBox.checked) {
            chArr[ch].checked = true;
            $('#'+b).show();
        } else {
            chArr[ch].checked = false;
            $('#'+b).hide();
        }
    }
}




