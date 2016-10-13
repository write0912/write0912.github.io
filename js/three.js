var main = function() {
    $('#menu').click(function(e) {
        e.preventDefault();
        $('#wrapper').toggleClass("toggled");

    });

    var paint = 'white';
    $('.color').click(function() {
        paint = $(this).css('background-color');

    });
    $('.menu').click(function() {
        $(this).css('color', paint);
        rad();
    });


};

$(document).ready(main);

var rad = function() {
    arrLotto = new Array(46);
    arrNum = new Array(6);
    for (i = 0; i < 6; i++) { //產生七個亂數, range在1~46內而且不會重覆
        isDone = false;
        while (!isDone) {
            num = Math.floor(Math.random() * 49+1);
            if (!arrLotto[num]) {
                arrNum[i] = num;
                arrLotto[num] = true;
                isDone = true;
            }
        }

        console.log(arrNum);

    }
  arrNum=  arrNum.sort();
    $('.num').append(arrNum +"<br>");
};
