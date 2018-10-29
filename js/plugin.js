/*global $, window*/
$(function () {
    var numOfThumbnials = $('.thumbnails img').length
    , marginBetweenThumbnials = '.5'
    , totalMargin = (numOfThumbnials - 1) * marginBetweenThumbnials
    , totalWidth = (100 - totalMargin) / numOfThumbnials;
    $('.thumbnails img').css({
    'width': totalWidth + '%'
    , 'margin-right': marginBetweenThumbnials + '%'
});
    $('.thumbnails img:last').css({
        'margin-right':0
        });
    
    $('.thumbnails img').click(function () {
     $(this).addClass('selected').siblings().removeClass('selected');
     $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn(200);
 });
    $('.master-img .fa-chevron-right').click(function(){
        if($('.thumbnails .selected').is(':last-child')){
            $('.thumbnails img').eq(0).click();
        }else{
        $('.thumbnails .selected').next().click();
        }
    });
    $('.master-img .fa-chevron-left').click(function(){
        if($('.thumbnails .selected').is(':first-child')){
            $('.thumbnails img:last').click();
        }else{
        $('.thumbnails .selected').prev().click();
        }
    });
});
/* --#2-- 
 */