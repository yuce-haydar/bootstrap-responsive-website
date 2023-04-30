$(document).ready(function(){
    $('#book_pick_date, #book_off_date, #tarih3').datepicker()

    $(window).scroll(function(){
        $('.bolum2,.bolum3,.bolum4,.bolum5,.bolum6,.bolum7,.bolum8').each(function(){
            var ustkenar=$(this).offset().top;
            var pencereAlt =$(Window).scrollTop()+$(window).height();
            if(pencereAlt>ustkenar){
                $(this).animate({'opacity':'1'},1000)
            }
        })
    })
})