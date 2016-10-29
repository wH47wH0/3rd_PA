/**
 * Created by miki on 2016.10.28..
 */

var convertedData = {
    _str: "mostezmegzkutulipánkó".split(''), // $('#string').val().split(''), // array of letters of the input string
    num: 3 // +$('#no').val() // input number --> integer
};


/**
 *  Formatting the string input using a variable input
 */
function StringGame(str, num) {
    this.str = str;
    this.num = num;
}
StringGame.prototype.slicer = function () {

    var j = 0,
        list = [],
        element = "";

    $.each(this.str, function (i, v) {
        if (i == 0 || i % this.num != 0) {
            element += v;
            list[j] = element;
        }
        else {
            element = v;
            j++;
            list[j] = element;
        }
    });
    return list;
};
StringGame.prototype.colorist = function () {

    var result = "";

    for (var i in this.str) result += (i + 1) % this.num == 0 ? '<span>' + this.str[i] + '</span>' : this.str[i];
    return result;
};


/**
 *  Placing elements into the DOM
 */
function Placing(place, content) {
    this.place = place;
    this.content = content;
}
Placing.prototype.single = function () {

    this.place.append('<p>' + this.content + '</p>');
    $('p').toggle().toggle(750);
};
Placing.prototype.multiple = function () {

    $.each(this.content, function (i, v) {
        this.place.append('<li>' + v + '</li>');
        $('li').last().slideToggle(1500);
    });
};


/**
 * Let's spin this muthaf**a!
 */
$(document).ready(function () {
    var wtf = new StringGame(convertedData._str, convertedData.num);
    for (var prop in wtf) console.log(prop)

    $('.btn').on('click', function () {
        $.getJSON('/calc', convertedData, function (data) {
            $.each(data, function (i, v) {
                var pydata = new Placing($('.result'), v);
                typeof v == 'string' ? pydata.single() : pydata.multiple();
            })
        });

        alert('WTF');
        var input = new StringGame(convertedData._str, convertedData.num),
            pimpedUpString = new Placing($('#JS'), input.colorist()),
            blocks = new Placing($('#JS').find('.resultList'), input.slicer());

        pimpedUpString.single();
        blocks.multiple()
    })
});