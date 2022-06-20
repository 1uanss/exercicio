function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    // var hora = 19
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e3b95a'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#c96419'
    } else {
        // boa noite 
        img.src = 'fotonoite.png'
        document.body.style.background = '#713d63'
    }
}
carregar()