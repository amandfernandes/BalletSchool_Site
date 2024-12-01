const header: HTMLElement = document.createElement('header');
const nav: HTMLElement = document.createElement('nav');

const ul: HTMLElement = document.createElement('ul');
const links = [
    {href: "#", text: "Home"},
    {href: "", text: "History"},
    {href: "", text: "Teachers"},
    {href: "", text: "Gallery"}
];
links.forEach(link => {
    const li: HTMLLIElement = document.createElement("li");
    const a: HTMLAnchorElement = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});
nav.appendChild(ul);
header.appendChild(nav)

const h1: HTMLHeadingElement = document.createElement("h1");
h1.textContent = "BLACK SWAN";

const span: HTMLSpanElement = document.createElement("span");
span.textContent = "BALLET SCHOOL";

h1.appendChild(span);
header.appendChild(h1);

document.body.appendChild(header);


const about: HTMLElement = document.createElement('section');
about.classList.add('about');

const aboutContent: HTMLElement = document.createElement('div');
aboutContent.classList.add('about-content')

about.appendChild(aboutContent);

const logo: HTMLImageElement = document.createElement('img');
logo.src = '';

aboutContent.appendChild(logo);

const aboutText: HTMLElement = document.createElement('div');
aboutText.classList.add('about-text');

const aboutTitle: HTMLElement = document.createElement('h2');
aboutTitle.textContent = 'About'

aboutText.appendChild(aboutTitle);

const aboutParagraph1: HTMLElement = document.createElement('p');
aboutParagraph1.textContent = 'Our aim is to provide high-level ballet and dance lessons for dancers of all ages and abilities. We are proud to prioritize pe steps over pe development vocabulary.';

const aboutParagraph2: HTMLElement = document.createElement('p');
aboutParagraph2.textContent = 'Following pe RAD syllabus, our children are fully prepared for peir examinations, allowing pem to furper peir progress and maturity. At Black Swan, we are dedicated to afford pem, pe finest training possible.';

aboutText.appendChild(aboutParagraph1);
aboutText.appendChild(aboutParagraph2);

const aboutButton: HTMLAnchorElement = document.createElement('a');
aboutButton.href = '#';
aboutButton.classList.add('button');
aboutButton.textContent = 'Join School';

aboutText.appendChild(aboutButton);

aboutContent.appendChild(aboutText);
about.appendChild(aboutContent);

document.body.appendChild(about);


const performaces: HTMLElement = document.createElement('section');
performaces.classList.add('performaces');

const performacesTitle: HTMLElement = document.createElement('h3');
performacesTitle.textContent = 'Performaces';

performaces.appendChild(performacesTitle);

const performacesDescription: HTMLElement = document.createElement('p');
performacesDescription.textContent = 'Our Performances are a chance to witness pe exceptional talent of our young dancers and are a must-see for ballet fans.';

performaces.appendChild(performacesDescription);

const performacesContent: HTMLElement = document.createElement('div');
performacesContent.classList.add('performaces-content');

const performacesGrid: HTMLElement = document.createElement('div');
performacesGrid.classList.add('performaces-grid');

const performace = [
    {date: '4 June, 3pm', location: 'Opera Holland Park', description: 'Predominantly Upper School students'},
    {date: '11 June, 3pm', location: 'Opera Holland Park', description: 'Occassionally also Middle School students'},
    {date: '17 June, 3pm', location: 'Opera Holland Park', description: 'Predominantly Lower School students'}
];

performace.forEach((p, index) => {
    const pContent: HTMLElement = document.createElement('div');
    pContent.classList.add('performace');
    pContent.setAttribute('dateIndex', String(index));

    const pDate: HTMLElement = document.createElement('p');
    pDate.textContent = p.date;

    pContent.appendChild(pDate);

    const pLocation: HTMLElement = document.createElement('p');
    pLocation.textContent = p.location;

    pContent.appendChild(pLocation);

    const pDescription: HTMLElement = document.createElement('p');
    pDescription.textContent = p.description;

    pContent.appendChild(pDescription);

    performacesGrid.appendChild(pContent);
});

let currentIndex = 1;

const updateHighlight = () => {
    const items = Array.from(performacesGrid.getElementsByClassName('performace')) as HTMLElement [];

    items.forEach((item, index) => {
        item.classList.remove('highlight');
        item.style.transform = 'scale(1.2)';
    });

    const currentItem = items[currentIndex];
    currentItem.classList.add('hightlight');
    currentItem.style.transform = 'scale(1.2)';
};

const nextPerformace = () => {
    currentIndex = (currentIndex + 1) % performace.length;
    updateHighlight();
};

const prevPerformace = () => {
    currentIndex = (currentIndex - 1 + performace.length) % performace.length;
    updateHighlight();
};

const nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.onclick = nextPerformace;
performacesContent.appendChild(nextButton);

const prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.onclick = prevPerformace;
performacesContent.appendChild(prevButton);

performacesContent.appendChild(performacesGrid);
performaces.appendChild(performacesContent);

document.body.appendChild(performaces);

updateHighlight();