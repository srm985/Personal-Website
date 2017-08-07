$(document).ready(function() {
    setDevice(2);

    $('.device-selector button').on('click', function() {
        setDevice($(this).data('thedevice'));
    });

    function deviceSize() {
        var deviceWidth = $(window).width();
    }

    function setDevice(device) {
        var demoWrapper = $('.demo-wrapper:nth(' + device + ')');

        $('.device-selector button').prop('disabled', '');
        $('.device-selector button:nth(' + device + ')').prop('disabled', 'disabled');
        $('.demo-wrapper').hide();
        switch (device) {
            case 0:
                demoWrapper.show();
                if (demoWrapper.find('img').attr('src') === undefined) {
                    demoWrapper.find('img').attr('src', '/images/messaging-client/mobile-mockup.png');
                    demoWrapper.find('.application-wrapper')[0].innerHTML = '<object type="text/html" data="/messaging-client/code/responsive/web/emessaging.htm"></object>';
                }
                break;
            case 1:
                demoWrapper.show();
                if (demoWrapper.find('img').attr('src') === undefined) {
                    demoWrapper.find('img').attr('src', '/images/messaging-client/kiosk-mockup.png');
                    demoWrapper.find('.application-wrapper')[0].innerHTML = '<object type="text/html" data="/messaging-client/code/kiosk/web/emessaging.htm"></object>';
                }
                break;
            case 2:
                demoWrapper.show();
                if (demoWrapper.find('img').attr('src') === undefined) {
                    demoWrapper.find('img').attr('src', '/images/messaging-client/desktop-mockup.png');
                    demoWrapper.find('.application-wrapper')[0].innerHTML = '<object type="text/html" data="/messaging-client/code/responsive/web/emessaging.htm"></object>';
                }
                break;
        }
    }
});