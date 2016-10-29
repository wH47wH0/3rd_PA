/**
 * Created by miki on 2016.10.20..
 */


$(document).ready(function () {
    $('.btn').on('click', function () {
        var j = 0,
            inputStr = $('#string').val().split(''),
            inputInt = +$('#no').val(),
            strings = [],
            subString = "",
            colored = "";
        for (var i in inputStr) {
            if ((+i + 1) % inputInt == 0) {
                colored += '<span>' + inputStr[i] + '</span>';
            } else {
                colored += inputStr[i];
            }
        }
        $('p').remove();
        $('.resultList').before('<p>' + colored + '</p>').empty();
        $('p').toggle().toggle(750);
        $.each(inputStr, function (i, v) {
            if (i != 0 && i % inputInt == 0) {
                subString = v;
                j++;
                strings[j] = subString;
            }
            else {
                subString += v;
                strings[j] = subString;
            }
        });
        $.each(strings, function (i, v) {
            $('.resultList').append('<li>' + v + '</li>');
            $('li').last().slideToggle(1500)
        });
    }).on('mouseup', function () {
        $(this).blur();
    })
});

