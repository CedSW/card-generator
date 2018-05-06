$(document).ready(function(){


$('.message-box-title').keyup(function(){
        var value = $('.message-box-title').val();
        $('.image-title').text(value);
        $('.second-set-image-title').text(value);
    });

    $('.name').keyup(function(){
        var value = $('.name').val();
        $('.image-name').text(value);
        $('.first-set-image-name').text(value);

    });

    $('.subtitle').keyup(function(){
        var value = $('.subtitle').val();
        $('.image-subtitle').text(value);
        $('.first-set-image-subtitle').text(value);
    });

    $('.message-box-content').keyup(function(){
        var value = $('.message-box-content').val();
        $('.image-content').text(value);
        $('.second-set-image-content').text(value);
    });

    //FIRST SET URL LOAD
$('.url-first-set').change(function () {
    var URL = $('.url-first-set').val();
    $('#first-preview-img').attr('src', URL);
    $('#first-img').attr('src', URL);
});

    $('.url-first-set-flag').change(function () {
        var URL = $('.url-first-set-flag').val();
        $('.first-preview-img-flag').attr('src', URL);
        $('.first-preview-img-flag').css('display', 'block');
    });

    $('.url-second-set').change(function () {
        var URL = $('.url-second-set').val();
        $('#second-preview-img').attr('src', URL);
    });
    //CONTENT
    $('.message-box-content').keyup(function(){
        var value = $('.message-box-content').val();
        $('.image-content').text(value);
    });

    $('.message-form').submit(function(e){
        e.preventDefault;
        return false;
    });

    //change fontsize

    $('#fontSize').change(function () {
        var previewSize = $('#fontSize').val();
        var size = parseInt(previewSize) * 2.4;
        $('.image-content').css('font-size', previewSize + 'px');
        $('.second-set-image-content').css('font-size', size + 'px');
    });

// HTML TO PNG
    $('.first-set-button').on('click', function(){
        var title1 = $('#name').val();
        var subtitle1 = $('#subtitle').val();
        var filename1 = title1 +'-'+ subtitle1 +'-1';
        html2canvas($('.first-set-wrapper'), {
            logging: true,
            allowTaint: true,
            useCORS: true,
            onrendered: function(canvas) {
                // var myImage = canvas.toDataURL('image/png');
                // $('.lightbox').fadeIn(200);
                // $('.new-image').attr('src', myImage).fadeIn(200);
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/png");
                a.download = filename1 +'.jpg';
                a.click();
            }

        });
    });

    $('.second-set-button').on('click', function(){
        var title1 = $('#name').val();
        var subtitle1 = $('#subtitle').val();
        var filename1 = title1 +'-'+ subtitle1 +'-2';
        html2canvas($('.second-set-wrapper'), {
            logging: true,
            allowTaint: true,
            useCORS: true,
            onrendered: function(canvas) {
                // var myImage = canvas.toDataURL('image/png');
                // $('.lightbox').fadeIn(200);
                // $('.new-image').attr('src', myImage).fadeIn(200);
                var a = document.createElement('a');
                a.href = canvas.toDataURL("image/png");
                a.download = filename1 +'.jpg';
                a.click();
            }

        });
    });
// CLOSE POPUP
    $('.close-lightbox').on('click', function(){
        $('.lightbox').css('display', 'none');
    });
});
    //LOAD PIC
function readURLbackground(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#first-preview-img').attr('src', e.target.result);
            $('#first-img').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
    //LOAD PIC
function readURLpicture(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#first-preview-img').attr('src', e.target.result);
            $('#first-img').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
//LOAD FLAG
function readURLflag(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.first-preview-img-flag').css('display', 'block');
            $('.first-preview-img-flag').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}