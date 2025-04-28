$(document).ready(function () {
    $(".book").each(function (index) {
        $(this).click(function () {
            openFlipbook(`flipbook${index + 1}`);
        });
    });
    $(".flipbook-popup").click(function (e) {
        if ($(e.target).hasClass("flipbook-popup")) {
            $(this).fadeOut();
        }
    });
    
});

function openFlipbook(id) {
    $(".flipbook-popup").hide();
    $(`#${id}`).fadeIn();

    if (!$(`#${id} .st-pageflip`).length) {
        const pageFlip = new St.PageFlip($(`#${id} #flipbook`)[0], {
            width: 170,
            height: 250,
            size: "stretch",
            minWidth: 150,
            maxWidth: 450,
            minHeight: 250,
            maxHeight: 600,
            maxShadowOpacity: 0.5,
            showCover: false,
            mobileScrollSupport: false,
        });

        pageFlip.loadFromHTML(document.querySelectorAll(`#${id} .page`));
    }
}

