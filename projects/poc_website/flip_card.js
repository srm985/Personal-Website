 $(document).ready(function(){

    $(".card_back").hide();

    $('.card_front').click(function() {
            if ($(this).is(":visible")) {
                $(".card_back").hide();  //Flip over any other backs.
                $(".card_front").show();  //Expose all fronts.
                $(this).hide();
                $(this).next(".card_back").show();
            };
    });

    $('.card_back').click(function() {
            if ($(this).is(":visible")) {
                $(this).hide();
                $(this).prev(".card_front").show();
            };
    });
});