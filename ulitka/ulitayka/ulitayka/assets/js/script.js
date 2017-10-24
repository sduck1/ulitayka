$(document).ready(function() {


    //Появляющийся блок на filters.php

    $('#toggle_insurance').click(function(){
        $(this).next().toggle('slow');
        return false;
    });

    $('#toggle_additional').click(function(){
        $(this).next().toggle('slow');
        return false;
    });

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


    // выпадающий список
    $('.box-2').click(function () {
        $(this).next().toggle();
        return false;
    });



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


});

// проверка условия на checked
//
function conditions(checkBox,b) {
    var chArr = document.getElementsByClassName('checkbox-one');
    var id = document.getElementById(b);
    console.log(b);
    for(var ch in chArr) {
        if (chArr[ch].getAttribute('id') === checkBox.getAttribute('id') && checkBox.checked === true) {
            break;
        }
        if(checkBox.checked) {
            chArr[ch].checked = true;
            $(id).show();
        } else {
            chArr[ch].checked = false;
            $(id).hide();
        }
    }
}


//массив country.json
$(document).ready(function () {
    $.getJSON('Assets/js/contry.json',function (data) {
        $.each(data, function (key , val) {
            $('#page-country').append('<option value="'+key+'">'+val+'</option>');
        })
    })
});