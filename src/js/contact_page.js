$(document).ready(function () {
    function setContactBackground() {
        let windowHeight = $(window).height(),
            contactFormHeight = $('#contact_form_wrapper').height();
        if ((contactFormHeight + 150) <= windowHeight) {
            document.getElementById("section_1").setAttribute("style", "height:" + (windowHeight).toString() + "px");
        } else {
            document.getElementById("section_1").setAttribute("style", "padding-bottom: 50px");
        }
    };
    setContactBackground();

    $(window).resize(function () {
        setContactBackground();
    });
});
