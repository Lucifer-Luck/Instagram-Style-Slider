// ---------------------------------------------------- Start Inner Slide ----------------------------------------------------
const galleryItems = document.querySelectorAll('.gallery__items');
const totalgalleryItems = galleryItems.length;

const lightbox = document.querySelector('.lightbox');
const mainButton = document.querySelectorAll('.main__button');

let mainIndex = 0;


// Start Main Slide Function Here
function toggleLightbox() {
    lightbox.classList.toggle("open");
}

function changeMainSlide() {
    const lightboxItems = document.querySelectorAll('.lightbox__items');

    if (mainIndex >= lightboxItems.length) {
        mainIndex = 0;
    }
        else if (mainIndex < 0) {
            mainIndex = lightboxItems.length - 1;
        }

    lightboxItems.forEach(lightboxSlide => lightboxSlide.style.display = 'none');
    lightboxItems[mainIndex].style.display = 'flex';
}

function mainButtonClick() {
    if(this.id === "main__next") {
        mainIndex++;

        changeMainSlide();
    }
        else {
            mainIndex--;

            changeMainSlide();
        }
}
// End Main Slide Function Here


for(let i = 0; i < totalgalleryItems; i++) {
    galleryItems[i].addEventListener('click', () => {
        mainIndex = i;

        toggleLightbox();
        changeMainSlide();
    })
}

mainButton.forEach(mainBtn => mainBtn.addEventListener('click', mainButtonClick));
// ------------------------------------------------------ End Main Slide ------------------------------------------------------








// ----------------------------------------------------- Start Inner Slide -----------------------------------------------------

// Start Slide One
const slideOne = document.querySelector('#slide-one .image__side');
const slideItemsOne = document.querySelectorAll('#slide-one .image__side .image');
const buttonOne = document.querySelectorAll('#slide-one .button');
const navigatorOne = document.querySelectorAll('#slide-one .dots');

var indexOne = 1;
var indexNavOne = 0;
var sizeOne = slideItemsOne[indexOne].clientWidth;

updatingOne();

// Start Slide One Function Here
function updatingOne() {
    slideOne.style.transform = 'translateX(' + (-sizeOne * indexOne) + 'px)';

    navigatorOne.forEach(navDotsOne => navDotsOne.classList.remove("active"));
    navigatorOne[indexNavOne].classList.add("active");
}

function slidingOne() {
    slideOne.style.transition = 'transform .4s ease-in-out';

    updatingOne();
}

function buttonClickOne() {
    if (this.id === "next") {
        if(indexOne >= slideItemsOne.length - 1) return;
        indexOne++;

        if (indexNavOne === navigatorOne.length - 1) {
            indexNavOne = 0;
        }
            else {
                indexNavOne++;
            }
    }
        else {
            if (indexOne <= 0) return;
            indexOne--;

            if (indexNavOne === 0) {
                indexNavOne = navigatorOne.length - 1;
            }
                else {
                    indexNavOne--;
                }
        }

        slidingOne();
}

function navClickOne() {
    let i = Number(this.getAttribute("data-index"));
    indexNavOne = i;
    indexOne = i + 1;

    slidingOne();
}
// End Slide One Funtion Here


// Start Infinite One
slideOne.addEventListener('transitionend', () => {
    if(slideItemsOne[indexOne].id === "last-clone") {
        slideOne.style.transition = 'none';
        indexOne = slideItemsOne.length - 2;
        slideOne.style.transform = 'translateX(' + (-sizeOne * indexOne) + 'px)';
    }
        if(slideItemsOne[indexOne].id === "first-clone") {
            slideOne.style.transition = 'none';
            indexOne = slideItemsOne.length - indexOne;
            slideOne.style.transform = 'translateX(' + (-sizeOne * indexOne) + 'px)';
        }
});
// End Infinite One

buttonOne.forEach(btnOne => btnOne.addEventListener('click', buttonClickOne));
navigatorOne.forEach(navDotsOne => navDotsOne.addEventListener('click', navClickOne));
// End Slide One





// Start Slide Two
const slideTwo = document.querySelector("#slide-two .image__side");
const slideItemsTwo = document.querySelectorAll("#slide-two .image__side .image");
const buttonTwo = document.querySelectorAll("#slide-two .button");
const navigatorTwo = document.querySelectorAll("#slide-two .dots");

var indexTwo = 1;
var indexNavTwo = 0;
var sizeTwo = slideItemsTwo[indexTwo].clientWidth;

updatingTwo();

// Start Slide Two Function Here
function updatingTwo() {
    slideTwo.style.transform = 'translateX(' + (-sizeTwo * indexTwo) + 'px)';

    navigatorTwo.forEach(navDotsTwo => navDotsTwo.classList.remove("active"));
    navigatorTwo[indexNavTwo].classList.add("active");
}

function slidingTwo() {
    slideTwo.style.transition = 'transform .4s ease-in-out';

    updatingTwo();
}

function buttonClickTwo() {
    if (this.id === "next") {
        if (indexTwo >= slideItemsTwo.length - 1) return;
        indexTwo++;

        if (indexNavTwo === navigatorTwo.length - 1) {
            indexNavTwo = 0;
        }
            else {
                indexNavTwo++;
            }
    }
        else {
            if (indexTwo <= 0) return;
            indexTwo--;

            if (indexNavTwo === 0) {
                indexNavTwo = navigatorTwo.length - 1;
            }
                else {
                    indexNavTwo--;
                }
        }

    slidingTwo();
}

function navClickTwo() {
    let i = Number(this.getAttribute("data-index"));
    indexNavTwo = i;
    indexTwo = i + 1;

    slidingTwo();
}
// End Slide Two Function Here


// Start Infinite
slideTwo.addEventListener('transitionend', () => {
    if (slideItemsTwo[indexTwo].id === "last-clone") {
        slideTwo.style.transition = 'none';
        indexTwo = slideItemsTwo.length - 2;
        slideTwo.style.transform = 'translateX(' + (-sizeTwo * indexTwo) + 'px)';
    }
        if (slideItemsTwo[indexTwo].id === "first-clone") {
            slideTwo.style.transition = 'none';
            indexTwo = slideItemsTwo.length - indexTwo;
            slideTwo.style.transform = 'translateX(' + (-sizeTwo * indexTwo) + 'px)';
        }
})
// End Infinite


buttonTwo.forEach(btnTwo => btnTwo.addEventListener('click', buttonClickTwo));
navigatorTwo.forEach(navDotsTwo => navDotsTwo.addEventListener('click', navClickTwo));
// End Side Two





// Start Slide Three
const slideThree = document.querySelector('#slide-three .image__side');
const slideItemsThree = document.querySelectorAll('#slide-three .image__side .image');
const buttonThree = document.querySelectorAll('#slide-three .button');
const navigatorThree = document.querySelectorAll('#slide-three .dots');

var indexThree = 1;
var indexNavThree = 0;
var sizeThree = slideItemsThree[indexThree].clientWidth;

updatingThree();

// Start Slide Three Function Here
function updatingThree() {
    slideThree.style.transform = 'translateX(' + (-sizeThree * indexThree) + 'px)';

    navigatorThree.forEach(navDotsThree => navDotsThree.classList.remove("active"));
    navigatorThree[indexNavThree].classList.add("active");
}

function slidingThree() {
    slideThree.style.transition = 'transform .4s ease-in-out';

    updatingThree();
}

function buttonClickThree() {
    if(this.id === "next") {
        if (indexThree >= slideItemsThree.length - 1) return;
        indexThree++;

        if(indexNavThree === navigatorThree.length - 1) {
            indexNavThree = 0;
        }
            else {
                indexNavThree++;
            }
    }
        else {
            if (indexThree <= 0) return;
            indexThree--;

            if(indexNavThree === 0) {
                indexNavThree = navigatorThree.length - 1;
            }
                else {
                    indexNavThree--;
                }
        }

    slidingThree();
}

function navClickThree() {
    let i = Number(this.getAttribute("data-index"));
    indexNavThree = i;
    indexThree = i + 1;

    slidingThree();
}
// End SLide Three Function Here



// Start Infinite
slideThree.addEventListener('transitionend', () => {
    if(slideItemsThree[indexThree].id === "last-clone") {
        slideThree.style.transition = 'none';
        indexThree = slideItemsThree.length - 2;
        slideThree.style.transform = 'translateX(' + (-sizeThree * indexThree) + 'px)';
    }
        if(slideItemsThree[indexThree].id === "first-clone") {
            slideThree.style.transition = 'none';
            indexThree = slideItemsThree.length - indexThree;
            slideThree.style.transform = 'translateX(' + (-sizeThree * indexThree) + 'px)';
        }
})
// End Infinite


buttonThree.forEach(btnThree => btnThree.addEventListener('click', buttonClickThree));
navigatorThree.forEach(navDotsThree => navDotsThree.addEventListener('click', navClickThree));
// End Slide Three

// ------------------------------------------------------ End Inner Slide ------------------------------------------------------