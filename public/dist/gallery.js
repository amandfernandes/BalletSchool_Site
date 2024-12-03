var galleryHeader = document.createElement('header');
var galleryNav = document.createElement('nav');
var galleryUl = document.createElement('ul');
var galleryLinks = [
    { href: "../index.html", text: "Home" },
    { href: "../history.html", text: "History" },
    { href: "../teachers.html", text: "Teachers" },
    { href: "#", text: "Gallery" }
];
galleryLinks.forEach(function (link) {
    var galleryLi = document.createElement("li");
    var galleryA = document.createElement("a");
    galleryA.href = link.href;
    galleryA.textContent = link.text;
    galleryLi.appendChild(galleryA);
    galleryUl.appendChild(galleryLi);
});
galleryNav.appendChild(galleryUl);
galleryHeader.appendChild(galleryNav);
var galleryTitle = document.createElement("h1");
galleryTitle.textContent = "Gallery";
galleryHeader.appendChild(galleryTitle);
document.body.appendChild(galleryHeader);
var gallery = document.createElement('section');
gallery.classList.add('gallery');
var galleryContent = document.createElement('div');
galleryContent.classList.add('gallery-content');
var galleryImages = [
    { src: '../assets/SwanLake-Photo1.png' },
    { src: '../assets/SwanLake-Photo2.png' },
    { src: '../assets/SwanLake-Photo3.png' },
    { src: '../assets/SwanLake-Photo4.png' },
    { src: '../assets/SwanLake-Photo5.png' },
    { src: '../assets/SwanLake-Photo6.png' },
    { src: '../assets/Theatre-Photo1.png' },
    { src: '../assets/Theatre-Photo2.png' },
    { src: '../assets/Theatre-Photo3.png' },
    { src: '../assets/Theatre-Photo4.png' },
    { src: '../assets/Theatre-Photo5.png' },
    { src: '../assets/Theatre-Photo6.png' },
];
galleryImages.forEach(function (img, i) {
    var galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    var galleryImage = document.createElement('img');
    galleryImage.src = img.src;
    galleryImage.dataset.index = i.toString();
    galleryImage.addEventListener('click', function () { return openImage(i); });
    galleryItem.appendChild(galleryImage);
    galleryContent.appendChild(galleryItem);
});
gallery.appendChild(galleryContent);
document.body.appendChild(gallery);
var currentImageIndex = 0;
var openImage = function (i) {
    currentImageIndex = i;
    imageBig.src = galleryImages[currentImageIndex].src;
    imageContent.classList.add('active');
};
var closeImage = function () {
    imageContent.classList.remove('active');
};
var prevImage = function () {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    imageBig.src = galleryImages[currentImageIndex].src;
};
var nextImage = function () {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    imageBig.src = galleryImages[currentImageIndex].src;
};
var imageContent = document.createElement('div');
imageContent.classList.add('image-content');
var imageBig = document.createElement('img');
imageContent.appendChild(imageBig);
var imageControls = document.createElement('div');
imageControls.classList.add('image-controls');
var prevButtonImage = document.createElement('button');
prevButtonImage.textContent = '<';
imageControls.appendChild(prevButtonImage);
prevButtonImage.addEventListener('click', prevImage);
var nextButtonImage = document.createElement('button');
nextButtonImage.textContent = '>';
imageControls.appendChild(nextButtonImage);
nextButtonImage.addEventListener('click', nextImage);
var closeButtonImage = document.createElement("button");
closeButtonImage.textContent = 'X';
imageControls.appendChild(closeButtonImage);
closeButtonImage.addEventListener('click', closeImage);
imageContent.appendChild(imageControls);
document.body.appendChild(imageContent);
var galleryFooter = document.createElement('footer');
var galleryFooterContent = document.createElement('div');
galleryFooterContent.classList.add('footer-content');
var galleryFooterTitle = document.createElement('h3');
galleryFooterTitle.textContent = 'BLACK SWAN';
galleryFooterContent.appendChild(galleryFooterTitle);
var galleryFooterLeft = document.createElement('div');
galleryFooterLeft.classList.add('footer-left');
var gallerySubscribeText = document.createElement('p');
gallerySubscribeText.textContent = 'Subscribe to the newsletter';
galleryFooterLeft.appendChild(gallerySubscribeText);
var gallerySubscribeForm = document.createElement('form');
var gallerySubscribeInput = document.createElement('input');
gallerySubscribeInput.type = 'email';
gallerySubscribeInput.placeholder = 'Email';
gallerySubscribeForm.appendChild(gallerySubscribeInput);
var gallerySubscribeButton = document.createElement('button');
gallerySubscribeButton.type = 'submit';
gallerySubscribeButton.textContent = 'Subscribe';
gallerySubscribeForm.appendChild(gallerySubscribeButton);
galleryFooterLeft.appendChild(gallerySubscribeForm);
galleryFooterContent.appendChild(galleryFooterLeft);
var galleryFooterRight = document.createElement('div');
galleryFooterRight.classList.add('footer-right');
var galleryAddress = document.createElement('p');
galleryAddress.textContent = 'White Lodge, Richmond Park, Richmond, Surrey TW10 5HR, UK';
galleryFooterRight.appendChild(galleryAddress);
var galleryPhone = document.createElement('p');
galleryPhone.textContent = '+44 (0)20 8390 8440';
galleryFooterRight.appendChild(galleryPhone);
galleryFooterContent.appendChild(galleryFooterRight);
galleryFooter.appendChild(galleryFooterContent);
document.body.appendChild(galleryFooter);
