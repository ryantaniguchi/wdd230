// Selects all imgs with data-src attribute
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
    // Creates an imgObserver
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            // If the item is intersecting, load the images
            if(item.isIntersecting) {
                loadImages(item.target);
                // Once the image is loaded, stop observing it.
                imgObserver.unobserve(item.target)
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