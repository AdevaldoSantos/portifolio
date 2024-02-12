const perfil = document.querySelector('img')

perfil.onmouseout = () => restaurarImg()
perfil.onmouseover = () => mudarImg()

function restaurarImg() {
    perfil.style.transition = "all 1s"
    perfil.style.width = ""
    perfil.style. boxShadow = ""
    perfil.style.margin = "0px"
}

function mudarImg() {
    perfil.style.transition = "all 1s"
    perfil.style.width = "30%"
    perfil.style.boxShadow = "0px 0px 20px 20px #2d385c"
    perfil.style.margin = "30px"
}

