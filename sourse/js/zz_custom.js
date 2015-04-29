(function($) {
    $(document).ready(function(){
        var $body = $('body');
        var $reclameTest = $('.js-reclametest');
        var reclameTestOText = $reclameTest.data('otext');
        $reclameTest.data('stext', $reclameTest.html());

        $('.js-reclametest').click(function(){
            if($body.hasClass('reclame')) {
                $body.removeClass('reclame');
                $reclameTest.html($reclameTest.data('stext'));
                return;
            }
            $('body').addClass('reclame');
            $reclameTest.html(reclameTestOText);
        });

        $('input, textarea').placeholder();
    });

    $(window).load(function() {

    });
}(jQuery));