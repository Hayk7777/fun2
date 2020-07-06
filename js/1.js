$(document).ready(function(){
    $(".num").change(function(){
        let value = $(this).val();
        if(value){
            $(".result").html(toDigit(value));
        }
    });
});
let num = "զրո մեկ երկու երեք չորս հինգ վեց յոթ ութ ինը տաս տասնմեկ տասներկու տասներեք տասնչորս տասնհինգ տասնվեց տասնյոթ տասնութ տասնինը".split(" ");
let tens = "քսան երեսուն քառասուն հիսուն վաթսուն յոթանասուն ութսուն ինսուն".split(" ");

function number2words(number) {
    let result;
    if (number < 20) return num[number];
    var digit = number % 10;

    if (number < 100) {
        console.log(100);
        return tens[Math.floor(number / 10) - 2] + (digit ? "" + num[digit] : "");
    }
    if (number < 1000) {
        return num[Math.floor(number / 100)] + " հարյուր" + (number % 100 == 0 ? "" : " " + number2words(number % 100));
    }
    if (number < 1000000) {
        return result = number2words(Math.floor(number / 1000)) + " հազար" + (number % 1000 != 0 ? " " + number2words(number % 1000) : "");
    }
    if (number < 1000000000) {
        return result = number2words(Math.floor(number / 1000000)) + " միլիոն" + (number % 1000000 != 0 ? " " + number2words(number % 1000000) : "");
    }
    if (number < 1000000000000) {
        return result = number2words(Math.floor(number / 1000000000)) + " միլիարդ" + (number % 1000000000 != 0 ? " " + number2words(number % 1000000000) : "");
    }
    if (number < 1000000000000000) {
        return result = number2words(Math.floor(number / 1000000000000)) + " տրիլիոն" + (number % 1000000000000 != 0 ? " " + number2words(number % 1000000000000) : "");
    }
    return result;
}
function toDigit(n) {
    let splittedDigit = parseFloat(n).toFixed(2).split('.');
    let result = number2words(Number(splittedDigit[0]));
    if (splittedDigit[1]) {
        let afterDigit = number2words(Number(splittedDigit[1]));
        result +=  " դրամ " + afterDigit + " լումա ";
    }
    return result;
}