function verificadorLarguraDaTela() {
    let larguraDaTela = window.innerWidth;
    let nav = document.getElementById("nav")

    if (larguraDaTela <= 880) {
        nav.style.display = "none"
    } 
    else {
        nav.style.display = "flex"
    }
}

window.onload = verificadorLarguraDaTela;
window.onresize = verificadorLarguraDaTela;