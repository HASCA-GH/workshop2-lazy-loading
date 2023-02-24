/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// console.log('Happy hacking :)')
{/* <div class="p-4">
    <img class="mx-auto" src="https://randomfox.ca/images/62.jpg" alt="Fox #62" width="320">
</div> */}

import { registerImage } from "./lazy";

const max =122;
const min =1;

const random = () => Math.floor(Math.random()*(max-min))+ min;

const createImageNode = ()=> {
    const container = document.createElement('div');
    container.className = 'p-4';

    const imagen = document.createElement('img');
    imagen.src =`https://randomfox.ca/images/${random()}.jpg` ; //todo
    imagen.className="mx-auto";
    imagen.width="320";
    imagen.alt="Fox #62";

    container.appendChild(imagen);

    return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button');

const addImage = ()=> {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
};
addButton.addEventListener('click', addImage);


