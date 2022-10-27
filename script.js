document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);
document.querySelector('#qtde').addEventListener("change", atualizar)
document.querySelector('#js').addEventListener("change", atualizar)
document.querySelector('#layout-sim').addEventListener("change", atualizar)
document.querySelector('#layout-nao').addEventListener("change", atualizar)
document.querySelector('#prazo').addEventListener("change", function(){
    const prazo = document.querySelector('#prazo').value
    if(prazo == 1) {
        document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semana`
    }else{
        document.querySelector('label[for=prazo]').innerHTML = `Prazo: ${prazo} semanas`
    }
    atualizar()
})

function atualizar(){
    const qtde = document.querySelector('#qtde').value
    const temJs = document.querySelector('#js').checked
    const incluiLayout = document.querySelector('#layout-sim').checked
    const prazo = document.querySelector('#prazo').value
    let preco = qtde * 100
    if(temJs)preco *= 1.1
    if(incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo * 0.1
    preco *= 1 + taxaUrgencia
    
    document.querySelector('#preco').innerHTML = `R$${preco.toFixed(2)}`
}