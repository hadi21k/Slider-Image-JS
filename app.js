// Get slider Items 

const sliderImages = Array.from(document.querySelectorAll('.images img'));

// Get number of slides

const sliderCount = sliderImages.length;

// Set current Slide

var currentSlide = 1;

// Slide number Element

const slideNumber = document.querySelector('.slide-number');

// Previous and Next 

const previous = document.querySelector('.prev');

const next = document.querySelector('.next');



// Creat The Main UL Element 

var paginationElement = document.createElement('ul');

// Set ID on created Ul Element 

paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based on Slides count

for (let i = 1; i <= sliderCount; i++) {

    // create the LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute  

    paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    // Append Items to the main ul List 

    paginationElement.appendChild(paginationItem);

}

// Add the created ul to the page 
document.querySelector('.indicator').appendChild(paginationElement);

// get The new created ul
var paginationCreated = document.getElementById('pagination-ul')

var paginationbullets = Array.from(document.querySelectorAll('#pagination-ul li'))

for (var i = 0; i < paginationbullets.length; i++) {
    paginationbullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

//Functions

previous.addEventListener('click', () => {
    if (previous.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        checker();
    }
})
next.addEventListener('click', () => {
    if (next.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        checker();
    }
})

checker()
// Trigger the checker funtion 
function checker() {

    //Set the slide number
    slideNumber.textContent = 'Slide ' + (currentSlide) + ' of ' + (sliderCount);

    removeAllActive();
    //Set active class on current slide
    sliderImages[currentSlide - 1].classList.add('active');
    //Set active class on current Pagination Item

    paginationCreated.children[currentSlide - 1].classList.add('ind');

    //Check if current slide is the first
    if (currentSlide == 1) {

        // Add disabled class on Previous button
        previous.classList.add('disabled');

    } else {
        previous.classList.remove('disabled');
    }
    if (currentSlide == 5) {

        // Add disabled class on Previous button
        next.classList.add('disabled');

    } else {
        next.classList.remove('disabled');
    }
}


// Remove All active classes from images and Pagination
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach((img) => {
        img.classList.remove('active');
    })

    // loop through pagination bullets
    paginationbullets.forEach((bullets) => {
        bullets.classList.remove('ind')
    })

}