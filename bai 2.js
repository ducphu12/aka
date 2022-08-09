function calculate2() {
    let age = document.getElementById("age");
    let resultDisplay = 0;
    if (age.value < 0) {
        resultDisplay = "Bạn đã nhập sai"
    } else {
        if (age.value < 15) {
            resultDisplay = "Bạn chưa đủ tuổi để học lớp 10"
        } else {
            resultDisplay = "Bạn đã đủ tuổi để học lớp 10"
        }
    }
    document.getElementById("resultDisplay2").innerHTML = resultDisplay
}