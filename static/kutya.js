/**
 * Created by miki on 2016.10.29..
 */
function Kutya(name, number) {
    this.name = name;
    this.number = number;
}
Kutya.prototype.kabbe = function () {
    console.log(this.name + ': ' + this.number)
};
var kutya = new Kutya('blöki', 712);
typeof kutya.kabbe() == 'function' ? console.log(typeof kutya.kabbe): console.log('nem nyert!');
console.log(typeof kutya.kabbe())