function calculate1() {
    let a = document.getElementById("number1");
    let b = document.getElementById("number2");
    let resultDisplay = 0;
    let result = a.value % b.value == 0
    if (result) {
        resultDisplay = "a chia hết cho b"
    } else {
        resultDisplay = "a không chia hết cho b"
    }
    document.getElementById("resultDisplay1").innerHTML = resultDisplay
}
