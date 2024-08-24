import "./styles.css";
// src/index.js
import loadContent from './modules/loadContent';
import createMenu from './modules/menu';
import createContact from './modules/contact';

// Initial content load
document.addEventListener('DOMContentLoaded', () => {
    loadContent();

    // Set up tab switching
    const contentDiv = document.getElementById('content');

    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    menuButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';  
        contentDiv.appendChild(createMenu());  
    });

    contactButton.addEventListener('click', () => {
        contentDiv.innerHTML = '';  
        contentDiv.appendChild(createContact()); 
    });
    homeButton.addEventListener("click", () => {
        contentDiv.innerHTML = ''; 
        loadContent()
    })
});
