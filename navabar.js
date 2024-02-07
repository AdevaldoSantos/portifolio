const navFoto = document.getElementById('foto')
const navDescricao = document.getElementById('descricao')
const navLingua = document.getElementById('lingua')
const navContatos = document.getElementById('contatos')


navFoto.onmouseover = () => mudarCorfoto()
navFoto.onmouseout = () => restaurarCorfoto()

const mudarCorfoto = () => {
    navFoto.style.backgroundColor = "#416dfc"
}
const restaurarCorfoto = () => {
    navFoto.style.backgroundColor = "#7f9dff"
}



navDescricao.onmouseover = () => mudarCorDesc()
navDescricao.onmouseout = () => restaurarCorDesc()

const mudarCorDesc = () => {
    navDescricao.style.backgroundColor = "#416dfc"
}
const restaurarCorDesc = () => {
    navDescricao.style.backgroundColor = "#7f9dff"
}



navLingua.onmouseover = () => mudarCorLing()
navLingua.onmouseout = () => restaurarCorLing()

const mudarCorLing = () => {
    navLingua.style.backgroundColor = "#416dfc"
}
const restaurarCorLing = () => {
    navLingua.style.backgroundColor = "#7f9dff"
}




navContatos.onmouseover = () => mudarCorCtt()
navContatos.onmouseout = () => restaurarCorCtt()

const mudarCorCtt = () => {
    navContatos.style.backgroundColor = "#416dfc"
}
const restaurarCorCtt = () => {
    navContatos.style.backgroundColor = "#7f9dff"
}