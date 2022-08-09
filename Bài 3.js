function calculate3() {
    let number = document.getElementById("number");
    let resultDisplay = 0;
    if (number.value < 0) {
        resultDisplay = "Số này nhỏ hơn 0"
    } else if (number.value == 0) {
        resultDisplay = "Số này là số 0"
    } else {
        resultDisplay = "Số này lớn hơn 0"
    }
    document.getElementById("resultDisplay3").innerHTML = resultDisplay
}