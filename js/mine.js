$(function() {
    $('.coverflow').css('max-width', $('.coverflow img').width());
    if ($('.coverflow .carousel-inner div.item').length < 2) {
        $('.carousel-indicators, .carousel-control').hide();
    }
});

$(".carousel-inner > .item").css("height", $(".carousel-inner > .item > img").height());


var imgcount = 1;
var i = 0;
var main = function() {
    var width = screen.width;
    var height = screen.height;
    $('#width').text(width);
    $('#height').text(height);


    $('#about').click(function() { //關於
        $('.about').fadeToggle(300);
        pview();
    });

    $('#skill').click(function() { //技能
        $('.skill').slideToggle(300);
    });

    $('#atom').click(function() { //技能
        $('.atom').slideToggle(300);
    });

    var clickNext = function() { //下張圖片
        imgcount++;
        var img = $('.active-img');
        var nextImg = img.next();
        var dot = $('.active-dot');
        var nextDot = dot.next();
        if (!nextImg.length) {
            nextImg = $('.img').first();
            nextDot = $('.dot').first();
            imgcount = 1;
        }
        pview();
        img.hide().removeClass('active-img');
        nextImg.show().addClass('active-img');
        dot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    };

    var clickPrev = function() { //上張圖片
        imgcount--;
        var img = $('.active-img');
        var prevImg = img.prev();
        var dot = $('.active-dot');
        var prevDot = dot.prev();
        if (!prevImg.length) {
            prevImg = $('.img').last();
            prevDot = $('.dot').last();
            imgcount = 4;
        }
        pview();
        img.hide().removeClass('active-img');
        prevImg.show().addClass('active-img');
        dot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    };

    var clock = setInterval(clickNext, 3000);
    $(".img").hover(function() {
        clearInterval(clock);
    }, function() {
        clock = setInterval(clickNext, 3000);
    });

    $('.arrow-next').click(clickNext); //下一張圖片
    $('.arrow-prev').click(clickPrev); //上一張圖片


    $('#rad').hover(function() {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        $('.rad').css({
            color: '#' + randomColor
        });
    });

    var pview = function() { //判斷圖片編號
        switch (imgcount) {
            case 1:
                $('.img-01').show();
                $('.img-02').hide();
                $('.img-03').hide();
                $('.img-04').hide();
                break;
            case 2:
                $('.img-01').hide();
                $('.img-02').show();
                $('.img-03').hide();
                $('.img-04').hide();
                break;
            case 3:
                $('.img-01').hide();
                $('.img-02').hide();
                $('.img-03').show();
                $('.img-04').hide();
                break;
            case 4:
                $('.img-01').hide();
                $('.img-02').hide();
                $('.img-03').hide();
                $('.img-04').show();
                break;
        }
    };

    var banimg = Array('1.jpg', '2.jpg', '3.jpg', '4.jpg');
    var autoRun = function() {
        var randomingdex = Math.floor(Math.random() * banimg.length);
        $('#random').html('<img src=img/' + banimg[randomingdex] + ' width=150 height=150 /> jq random' + randomingdex);
        //循序banner
        $('#order').html('<img src=img/' + banimg[i] + ' width=150 height=150 /> jq order' + i);
        var orderindex = banimg.length;
        i++;
        if (i >= orderindex)
            i = 0;
    };

    var radomImg = setInterval(autoRun, 3000); //自動輪播圖片
    $('#random,#order').hover(function() {
        clearInterval(radomImg);
    }, function() {
        radomImg = setInterval(autoRun, 3000);
    });

    $('#input').keydown(function(event) { //輸入後按下enter動作
        if (event.which === 13) {
            wordMath();
        }
    });
};

$(document).ready(main);


function wordMath() { //計算輸入單字共得多少分
    var pointcount = 0;
    var word = $('#input').val();
    word = word.toLowerCase();
    var cutword = word.split('');
    console.log(cutword);
    var sheet = "abcdefghijklmnopqrstuvwxyz";
    var cutsheet = sheet.split('');
    var a = '';

    for (var iw = 0; iw < sheet.length; iw++) {
        for (var jw = 0; jw < word.length; jw++) {
            if (cutsheet[iw] === cutword[jw]) {
                pointcount = pointcount + iw + 1;
            }
        }
    }
    if (word === '') {
        alert('oops,you did not type any word');
    } else {
        alert(word + ' 可以得到 ' + pointcount + ' 分！！');
    }
}
