console.log("");

function multi(){
    let number = document.getElementById("number").value;
    number = number*2;
    console.log(number);
    let ergebnis = document.getElementById("ergebnis");
    ergebnis.innerHTML = number;
}
