$(document).ready(function () {

    function projectHover() {
        let windowWidth = $(window).width();

        $('.project_wrapper_half').mouseenter(function () {
            if (windowWidth > 991) {
                $(this).find('.project_title_half').addClass('project_title_half_hovered');
                $(this).find('.project_content_half').addClass('project_content_half_hovered');
            };
        });
        $('.project_wrapper_half').mouseleave(function () {
            if (windowWidth > 991) {
                $(this).find('.project_title_half').removeClass('project_title_half_hovered');
                $(this).find('.project_content_half').removeClass('project_content_half_hovered');
            };
        });
    }

    //***************************************************************************
    //*          Size our portfolio cards to half of screen height.             *
    //***************************************************************************
    function projectTileHeight() {
        let windowWidth = $(window).width(),
            viewportHeight = $(window).outerHeight(),
            projectTileSize = (viewportHeight / 2) + 'px';

        if (viewportHeight >= 560 && windowWidth < 992) {
            $('.project_wrapper_half').css('height', projectTileSize);
            $('.project_wrapper_full').css('height', projectTileSize);
        }
    }

    projectHover();
    projectTileHeight();

    $(window).resize(function () {
        setTimeout(function () {
            projectHover();
            projectTileHeight();
        }, 100);
    });
});
