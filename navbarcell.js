function verificadorLarguraDaTela() {
    let larguraDaTela = window.innerWidth;
    let nav = document.getElementById("nav")
    let navCell = document.getElementById("navCell")
    let h1 = document.getElementById("h1")

    if (larguraDaTela <= 880) {
        nav.style.display = "none"
        navCell.style.display = "flex"
        h1.style.marginTop = "70px"
        
    } 
    else {
        nav.style.display = "flex"
        navCell.style.display = "none"
    }
}

window.onload = verificadorLarguraDaTela;
window.onresize = verificadorLarguraDaTela;
