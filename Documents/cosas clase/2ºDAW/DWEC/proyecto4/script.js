'use strict';

document.addEventListener('DOMContentLoaded', function(){
    var main = document.getElementById("main")

    $('#characterModal').on('hidden.bs.modal', function () {
        main.style.display = "flex" // Reactivar el div main al cerrar el modal
    });
    
})


function openCharacterModal(character) {
    var modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML = '<h1>' + character + '</h1>';

    $('#characterModal').modal('show');
        main.style.display = "none"; // Ocultar el div main si se encuentra

    peticionJQUERY(character);
}


function peticionJQUERY(character) {
    $.ajax({
        type: "GET",
        url: "https://swapi.dev/api/people/",
        dataType: "json",
        success: function (json) {
            var personajes = json.results;
            escribir(character,personajes)
        },
        error: function (){
            alert("Ha habido un error")
        }
    });
}

function escribir(character, personajes){

    var modalBody = document.querySelector('.modal-body');

    for(let i=0; i < personajes.length; i++){
        if(character == personajes[i].name){
                // Crea elementos para mostrar la información
                var nombre = document.createElement('p');
                nombre.textContent = 'Nombre: ' + personajes[i].name;

                var altura = document.createElement('p');
                altura.textContent = 'Altura: ' + personajes[i].height;

                var masa = document.createElement('p');
                masa.textContent = 'Masa: ' + personajes[i].mass;

                var pelo = document.createElement('p');
                pelo.textContent = 'Color de pelo: ' + personajes[i].hair_color;

                var piel = document.createElement('p');
                piel.textContent = 'Color de piel: ' + personajes[i].skin_color;

                // Limpia el contenido existente en modalContent
                modalBody.innerHTML = '';

                // Agrega los elementos al modalContent
                modalBody.appendChild(nombre);
                modalBody.appendChild(altura);
                modalBody.appendChild(masa);
                modalBody.appendChild(pelo);
                modalBody.appendChild(piel);
        }

    }
}