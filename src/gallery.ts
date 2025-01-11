const galleryHeader: HTMLElement = document.createElement('header');
const galleryNav: HTMLElement = document.createElement('nav');

const galleryUl: HTMLElement = document.createElement('ul');
const galleryLinks = [
    {href: "../index.html", text: "Home"},
    {href: "../history.html", text: "History"},
    {href: "../teachers.html", text: "Teachers"},
    {href: "#", text: "Gallery"}
];
galleryLinks.forEach(link => {
    const galleryLi: HTMLLIElement = document.createElement("li");
    const galleryA: HTMLAnchorElement = document.createElement("a");
    galleryA.href = link.href;
    galleryA.textContent = link.text;
    galleryLi.appendChild(galleryA);
    galleryUl.appendChild(galleryLi);
});
galleryNav.appendChild(galleryUl);
galleryHeader.appendChild(galleryNav)

const galleryTitle: HTMLHeadingElement = document.createElement("h1");
galleryTitle.textContent = "GALLERY";
galleryHeader.appendChild(galleryTitle);

document.body.appendChild(galleryHeader);

const gallery: HTMLElement = document.createElement('section');
gallery.classList.add('gallery');

const galleryContent: HTMLElement = document.createElement('div');
galleryContent.classList.add('gallery-content');

const galleryImages = [
    {src: '../assets/SwanLake-Photo1.png'},
    {src: '../assets/SwanLake-Photo2.png'},
    {src: '../assets/SwanLake-Photo3.png'},
    {src: '../assets/SwanLake-Photo4.png'},
    {src: '../assets/SwanLake-Photo5.png'},
    {src: '../assets/SwanLake-Photo6.png'},
    {src: '../assets/Theatre-Photo1.png'},
    {src: '../assets/Theatre-Photo2.png'},
    {src: '../assets/Theatre-Photo3.png'},
    {src: '../assets/Theatre-Photo4.png'},
    {src: '../assets/Theatre-Photo5.png'},
    {src: '../assets/Theatre-Photo6.png'},
];

galleryImages.forEach((img, i) => {
    const galleryItem: HTMLElement = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const galleryImage : HTMLImageElement =document.createElement('img');
    galleryImage.src = img.src;
    galleryImage.dataset.index = i.toString();
    galleryImage.addEventListener('click', () => openImage(i));
    galleryItem.appendChild(galleryImage);

    galleryContent.appendChild(galleryItem);
});

gallery.appendChild(galleryContent);

document.body.appendChild(gallery);



let currentImageIndex = 0;

const openImage = (i: number) => {
    currentImageIndex = i;
    imageBig.src = galleryImages[currentImageIndex].src;
    imageContent.classList.add('active');
};

const closeImage = () => {
    imageContent.classList.remove('active');
};


const prevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    imageBig.src = galleryImages[currentImageIndex].src;
};

const nextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    imageBig.src = galleryImages[currentImageIndex].src;
};

const imageContent: HTMLElement = document.createElement('div');
imageContent.classList.add('image-content');

const imageBig: HTMLImageElement = document.createElement('img');
imageContent.appendChild(imageBig);

const imageControls : HTMLElement = document.createElement('div');
imageControls.classList.add('image-controls');

const prevButtonImage: HTMLButtonElement = document.createElement('button');
prevButtonImage.textContent = '<';
imageControls.appendChild(prevButtonImage);
prevButtonImage.addEventListener('click', prevImage);

const nextButtonImage: HTMLButtonElement = document.createElement('button');
nextButtonImage.textContent ='>';
imageControls.appendChild(nextButtonImage);
nextButtonImage.addEventListener('click', nextImage);

const closeButtonImage: HTMLButtonElement = document.createElement("button");
closeButtonImage.textContent = 'X';
imageControls.appendChild(closeButtonImage);
closeButtonImage.addEventListener('click', closeImage);

imageContent.appendChild(imageControls);
document.body.appendChild(imageContent);


const galleryFooter: HTMLElement = document.createElement('footer');

const galleryFooterContent: HTMLElement = document.createElement('div');
galleryFooterContent.classList.add('footer-content');

const galleryFooterLeft: HTMLElement = document.createElement('div');
galleryFooterLeft.classList.add('footer-left');

const gallerySubscribeText: HTMLElement = document.createElement('p');
gallerySubscribeText.textContent = 'Subscribe to the newsletter';
galleryFooterLeft.appendChild(gallerySubscribeText);

const gallerySubscribeForm: HTMLFormElement = document.createElement('form');

const gallerySubscribeInput: HTMLInputElement = document.createElement('input');
gallerySubscribeInput.type = 'email';
gallerySubscribeInput.placeholder = 'Email';
gallerySubscribeForm.appendChild(gallerySubscribeInput);

const gallerySubscribeButton: HTMLButtonElement = document.createElement('button');
gallerySubscribeButton.type = 'submit';
gallerySubscribeButton.textContent = 'Subscribe';
gallerySubscribeForm.appendChild(gallerySubscribeButton);

galleryFooterLeft.appendChild(gallerySubscribeForm);

galleryFooterContent.appendChild(galleryFooterLeft);

const galleryFooterRight: HTMLElement = document.createElement('div');
galleryFooterRight.classList.add('footer-right');

const galleryAddress: HTMLElement = document.createElement('p');
galleryAddress.textContent = 'White Lodge, Richmond Park, Richmond, Surrey TW10 5HR, UK';
galleryFooterRight.appendChild(galleryAddress);

const galleryPhone: HTMLElement = document.createElement('p');
galleryPhone.textContent = '+44 (0)20 8390 8440';
galleryFooterRight.appendChild(galleryPhone);

galleryFooterContent.appendChild(galleryFooterRight);

const galleryFooterTitle: HTMLElement = document.createElement('h3');
galleryFooterTitle.textContent = 'BLACK SWAN';
galleryFooterContent.appendChild(galleryFooterTitle);

galleryFooter.appendChild(galleryFooterContent);

document.body.appendChild(galleryFooter);