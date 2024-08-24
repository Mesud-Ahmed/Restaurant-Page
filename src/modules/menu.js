import wrapImg from '../assets/wrap.jpg';
import falafelImg from '../assets/falfeel.jpg';
import hummusImg from '../assets/hammus.jpg';
import tabboulehImg from '../assets/Tabbouleh.jpg';

function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const menuItems = [
        {
            item: "SHAWARMA WRAP",
            description: "A classic shawarma wrap featuring marinated meat—typically chicken, beef, or lamb—cooked on a vertical rotisserie.",
            imageSource: wrapImg, 
            price: "4$"
        },
        {
            item: "FALAFEL",
            description: "A vegetarian delight made from ground chickpeas or fava beans mixed with herbs and spices, formed into small balls, and deep-fried to a crispy perfection.",
            imageSource: falafelImg,  
            price: "3$"
        },
        {
            item: "HUMMUS & PITA",
            description: "A traditional Middle Eastern appetizer consisting of creamy hummus—a blend of blended chickpeas, tahini, lemon juice, and garlic—served with warm, soft pita bread for dipping.",
            imageSource: hummusImg,  
            price: "2.5$"
        },
        {
            item: "TABBOULEH",
            description: "A refreshing, herbaceous salad made from finely chopped parsley, tomatoes, mint, and onions, mixed with bulgur wheat, and dressed with olive oil and lemon juice. It's a vibrant and healthy accompaniment to your meal.",
            imageSource: tabboulehImg,  
            price: "2$"
        }
    ];

    menuItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const itemName = document.createElement('h3');
        itemName.textContent = item.item;
        itemDiv.appendChild(itemName);

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;
        itemDiv.appendChild(itemDescription);

       
        const itemPrice = document.createElement('p');
        itemPrice.classList.add('price');
        itemPrice.textContent = item.price;
        itemDiv.appendChild(itemPrice);

        
        const itemImage = document.createElement('img');
        itemImage.src = item.imageSource;  
        itemImage.alt = item.item;
        itemDiv.appendChild(itemImage);

        
        menuDiv.appendChild(itemDiv);
    });

    return menuDiv;
}

export default createMenu;
