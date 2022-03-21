'use strict';

var mainContent;

const iniciar = () => {
    
    mainContent = document.getElementById('init-section');
    getContent('novedades.html');

    let inicioBoton = document.getElementById('inicio');
    let articulosBoton = document.getElementById('articulos');
    let topicosBoton = document.getElementById('topicos');
    let aboutBoton = document.getElementById('about');
    let contactoBoton = document.getElementById('contacto');

    inicioBoton.addEventListener('click', (evt) => getContent('novedades.html'));
    articulosBoton.addEventListener('click', (evt) => getContent('articles.html'));
    topicosBoton.addEventListener('click', (evt) => getContent('topics.html'));
    aboutBoton.addEventListener('click', (evt) => getContent('about.html'));
    contactoBoton.addEventListener('click', (evt) => getContent('contact.html'));
}

const getContent = (url) => {
    let request = new XMLHttpRequest();
    request.addEventListener('load', loadContent);
    request.open('GET', url, true);
    request.send(null);
};


const loadContent = (e) => {
    let datos = e.target;
    if (datos.status === 200){
        mainContent.innerHTML = datos.responseText;
    }
};

addEventListener('load', iniciar);