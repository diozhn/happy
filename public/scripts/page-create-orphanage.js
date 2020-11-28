//Create map
const map = L.map('mapid').setView([-6.365563, -39.301856], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name = lat]').value = lat;
    document.querySelector('[name = lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

//add photo area

function addPhotoField(){
    //Pegar o container de fotos #images
    const container = document.querySelector('#images')
    //Pegar o constainer para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //Realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    //Não adicionar um novo container se o input de imagens estiver vazio
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    //Limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    //Adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //deletar o campo
    span.parentNode.remove()
}

//Selecionar sim ou não
function toggleSelect(event){
    //retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button').forEach((button) =>{
    button.classList.remove('active')})
    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name = "open_on_weekends"]')
    input.value = button.dataset.value
}