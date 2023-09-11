function openSquare(evt, squareMethod) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(squareMethod).style.display = "block";
    evt.currentTarget.className += " active";
}
function luasPersegi() {
    const panjangSisi = parseFloat(document.getElementById("panjang sisi").value);
    

    const luas = panjangSisi * panjangSisi;
    document.getElementById("rumusLuas").textContent = panjangSisi+" x "+ panjangSisi ;
    document.getElementById("result").textContent = luas;
}

function kelilingPersegi(){
    const panjangSisi = parseFloat(document.getElementById("panjang sisi2").value);
    

    const keliling = panjangSisi * 4;
    document.getElementById("rumusKeliling").textContent = panjangSisi;
    document.getElementById("result2").textContent = keliling;
}