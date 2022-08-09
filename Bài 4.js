function calculate4() {
    let a = document.getElementById("numberA");
    let b = document.getElementById("numberB");
    let c = document.getElementById("numberC");
    let max = parseInt(a.value);
    if (max < parseInt(b.value)) {
        max = parseInt(b.value)
    }
    if (max < parseInt(c.value)) {
        max = parseInt(c.value)
    }
    document.getElementById("resultDisplay4").innerHTML = "Số lớn nhất trong ba số là " + max

}