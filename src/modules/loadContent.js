
function loadContent() {
    const contentDiv = document.getElementById('content');
    
    const newDiv = document.createElement('div')
    newDiv.classList.add('home')

    const heading = document.createElement('h1');
    heading.textContent = 'Hala Shawarma';
    newDiv.appendChild(heading)


    const description = document.createElement('h2');
    description.textContent = 'Welcome to Hala Shawarma, where tradition meets flavor in every bite. Nestled in the heart of Addis Ababa, Our expertly marinated meats, slow-roasted to perfection on a vertical spit, are lovingly wrapped in warm, freshly baked flatbreads, serves an authentic taste of the Middle East.';
    newDiv.appendChild(description)
    
    contentDiv.appendChild(newDiv);
    
}

export default loadContent;
