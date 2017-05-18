if (!window.jQuery) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
    document.getElementByTagName('head')[0].appendChild(script);
}

$(document).ready(function() {

    var setVolumeLevel;

    //******************************************************************************
    //*                        Load our header content.                            *
    //******************************************************************************
    $('#terminal-header').load('terminal-header.htm');

    //******************************************************************************
    //*                        Initialize our keyboard.                            *
    //******************************************************************************
    $('head').append('<script type="text/javascript" src="keyboard/keyboard.min.js"></script>');
    $('head').append('<link rel="stylesheet" type="text/css" href="keyboard/keyboard.min.css">');

    $(document).keyboard({
        language: 'us',
        inputType: 'text'
    });

    //******************************************************************************
    //*                Handle button redirects by passing URL.                     *
    //******************************************************************************
    $('.default-button').on('click touch', function() {
        window.location.href = $(this).attr('href');
    });

    //******************************************************************************
    //*                   Listen for PIN keypad interaction.                       *
    //******************************************************************************
    $('#keypad .key').on('click touch', function() {
        var keyPressed = $(this).val(),
            currentPIN = $('#pin-input-field').val();

        if ((keyPressed).match(/[0-9]/)) {
            $('#pin-input-field').val(currentPIN + keyPressed.toString());
        } else if (keyPressed == 'clear') {
            $('#pin-input-field').val('');
        } else if (keyPressed == 'del') {
            $('#pin-input-field').val(currentPIN.slice(0, -1));
        }
    });

    //******************************************************************************
    //*                  Mute function for video visitation.                       *
    //******************************************************************************
    $('#volume-content-wrapper i').on('click touch', function() {
        var currentVolumeLevel = $('#speaker-volume-slider').slider('value');
        if ($('.icons8-medium-volume-filled').length) {
            setVolumeLevel = currentVolumeLevel;
            $('#speaker-volume-slider').slider('value', 0);
            $('.icons8-medium-volume-filled').addClass('icons8-mute-filled');
            $('.icons8-medium-volume-filled').removeClass('icons8-medium-volume-filled');
        } else {
            $('#speaker-volume-slider').slider('value', setVolumeLevel);
            $('.icons8-mute-filled').addClass('icons8-medium-volume-filled');
            $('.icons8-mute-filled').removeClass('icons8-mute-filled');
        }
    });

    initSlider();
    initScheduleDatepicker();
    initDOBDatepicker();
    progressIndicatorUpdate();
    setHeaderDateTime();
});

function restartTerminal() {
    window.location.href = 'select-language.htm'
}

//******************************************************************************
//*                  Keep our terminal date/time refreshed.                    *
//******************************************************************************
function setHeaderDateTime() {
    var dateObject = new Date(),
        weekday = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
        normalizedHours = (dateObject.getHours() > 12 ? dateObject.getHours() - 12 : dateObject.getHours()),
        terminalDate = weekday[dateObject.getDay()] + ' ' + ((dateObject.getMonth() + 1) < 10 ? '0' : '') + (dateObject.getMonth() + 1) + '/' + (dateObject.getDate() < 10 ? '0' : '') + dateObject.getDate() + '/' + dateObject.getFullYear(),
        terminalTime = (normalizedHours < 10 ? '0' : '') + normalizedHours + ':' + (dateObject.getMinutes() < 10 ? '0' : '') + dateObject.getMinutes() + ' ' + (dateObject.getHours() < 12 ? 'AM' : 'PM');
    $('#terminal-date').html(terminalDate);
    $('#terminal-time').html(terminalTime);

    setTimeout(function() {
        setHeaderDateTime();
    }, 500);
}

//******************************************************************************
//*             Style our progress indicator based on current step.            *
//******************************************************************************
function progressIndicatorUpdate() {
    var progressStep = $('#progress-indicator-wrapper').data('theprogressstep');
    $('.progress-indicator-element').each(function(i, value) {
        if (i < progressStep) {
            $(this).removeClass('green-progress-step');
            $(this).addClass('blue-progress-step');
        } else if (i == progressStep) {
            $(this).removeClass('blue-progress-step');
            $(this).addClass('green-progress-step');
        } else {
            $(this).removeClass('green-progress-step');
            $(this).removeClass('blue-progress-step');
        }
    });
}

//******************************************************************************
//*                  Init slider on video visitation page.                     *
//******************************************************************************
function initSlider() {
    if ($('#speaker-volume-slider').length) {
        $('#speaker-volume-slider').slider({
            min: 0,
            max: 100,
            value: 75,
            range: 'min',
            slide: '',
            change: ''
        });
    }
}

//******************************************************************************
//*                     Init datepicker for DOB fields.                        *
//******************************************************************************
function initDOBDatepicker() {
    if ($('.dob-input-field').length) {
        $('.dob-input-field').datepicker({
            maxDate: 0,
            yearRange: '-100:+0',
            changeYear: true,
            beforeShow: function() {
                $('#blackout-div').show();
                $('#blackout-div').addClass('blacked-out');
            },
            onClose: function() {
                $('#blackout-div').removeClass('blacked-out');
                $('#blackout-div').hide();
            }
        });
    }
}

//******************************************************************************
//*                 Init datepicker for schedule selection.                    *
//******************************************************************************
function initScheduleDatepicker() {
    if ($('.schedule-date-input-field').length) {
        $('.schedule-date-input-field').datepicker({
            minDate: 0,
            yearRange: '+0:+1',
            changeYear: true,
            beforeShow: function() {
                $('#blackout-div').show();
                $('#blackout-div').addClass('blacked-out');
            },
            onClose: function() {
                $('#blackout-div').removeClass('blacked-out');
                $('#blackout-div').hide();
            }
        });
    }
}
