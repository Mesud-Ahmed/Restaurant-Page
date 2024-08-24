// src/modules/contact.js

function createContact() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';

    const contactInfo = `
        <p>Email: info@halashawarma.com</p>
        <p>Phone: +123456789</p>
        <p>Address: 123 Bole ruwanda Street, Addis Ababa</p>
    `;

    contactDiv.appendChild(heading);
    contactDiv.innerHTML += contactInfo;

    return contactDiv;
}

export default createContact;
