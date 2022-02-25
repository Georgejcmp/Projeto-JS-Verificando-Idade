function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (formano.value.length == 0 || Number(formano.value) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Masculino' 
            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'imagem/bebe-h.png')
             } else if (idade <= 13) {
                 img.setAttribute('src', 'imagem/criança-h.png')
             } else if (idade <= 17) {
                 img.setAttribute('src', 'imagem/jovem-h.png')
             } else if (idade <= 65) {
                img.setAttribute('src', 'imagem/adulto-h.png')
             } else {
                 img.setAttribute('src', 'imagem/idoso-h.png')
             }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'imagem/bebe-m.png')
            } else if (idade <= 13) {
                img.setAttribute('src', 'imagem/criança-m.png')
            } else if (idade <= 17) {
                img.setAttribute('src', 'imagem/jovem-m.png')
            } else if (idade <= 65) {
                img.setAttribute('src', 'imagem/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagem/idoso-m.png')
            }
        }
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

