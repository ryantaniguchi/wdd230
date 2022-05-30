// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// Optional paramters being set for the intersectionalObserver
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

// first check to see if Intersection Observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target)
            }
        })
    }, imgOptions);

    // Loop through each img to check the status and load the image if necessary
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

else { // Load all the images if it is not supported.
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}