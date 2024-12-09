const balletClassHeader: HTMLElement = document.createElement('header');
const balletClassNav: HTMLElement = document.createElement('nav');

const balletClassUl: HTMLElement = document.createElement('ul');
const balletClassLinks = [
    {href: "../index.html", text: "Home"},
    {href: "../history.html", text: "History"},
    {href: "../teachers.html", text: "Teachers"},
    {href: "../gallery.html", text: "Gallery"}
];
balletClassLinks.forEach(link => {
    const balletClassLi: HTMLLIElement = document.createElement("li");
    const balletClassA: HTMLAnchorElement = document.createElement("a");
    balletClassA.href = link.href;
    balletClassA.textContent = link.text;
    balletClassLi.appendChild(balletClassA);
    balletClassUl.appendChild(balletClassLi);
});
balletClassNav.appendChild(balletClassUl);
balletClassHeader.appendChild(balletClassNav)

const balletClassTitle: HTMLHeadingElement = document.createElement("h1");
balletClassTitle.textContent = "Ballet Class";
balletClassHeader.appendChild(balletClassTitle);

document.body.appendChild(balletClassHeader);


const firstStep: HTMLElement = document.createElement('section');

const firstStepTitle: HTMLElement = document.createElement('h4');
firstStepTitle.textContent = 'Your first step on the path to a career a classical baller dancer';

const firstStepContent: HTMLElement =document.createElement("div");

const firstStepTextGrid: HTMLElement = document.createElement('div');
firstStepTextGrid.classList.add('first-step-text');

const firstStepTexts = [
    "Classical ballet is the principal dance discipline taught at the School. The School's  own carefully constructed Sytemof Training covering all aspects of training, from first entering the School in Year 7 to final Upper School graduate year. It is tehe means by which students are prepared for a career with the world's top dance companies.",
    'To complement the classicla curriculum, White Lodge students learn Comtemporary. Character and English folk dances; All of these form part of the basic dance curriculum essential to any vocational dance training.',
    'Rhythm and co-ordination are fundamental to dancers. In Year 7, young students gain a through grounding in their basics through Dalcroze-based techniques wich internalise rhythm and timing in a physical way.'
];

firstStepTexts.forEach(t => {
    const firstStepText: HTMLElement = document.createElement('p');
    firstStepText.textContent = t;
    firstStepTextGrid.appendChild(firstStepText);
})
firstStepContent.appendChild(firstStepTextGrid);

const firstStepImage: HTMLImageElement = document.createElement('img');
firstStepImage.src = '../assets/FirstStep-BS(BalletClass).png';
firstStepContent.appendChild(firstStepImage);

firstStep.appendChild(firstStepContent);

document.body.appendChild(firstStep);

const areas: HTMLElement = document.createElement('section');
areas.classList.add('Areas');

const areasContent: HTMLElement = document.createElement('div');
areasContent.classList.add('areas-content');

const areasImage: HTMLImageElement = document.createElement('img');
areasImage.src = '../assets/Areas-BS(BalletClass).png'
areasContent.appendChild(areasImage);

const areasTextGrid: HTMLElement = document.createElement('div');
areasTextGrid.classList.add('areas-text');

const areasTitle: HTMLElement = document.createElement('h4');
areasTitle.textContent = "Ares of Teaching";
areasTextGrid.appendChild(areasTitle);

const areasTeaching: HTMLElement = document.createElement('ul');
const teachingAreas = [
    'CLASSICAL',
    'PAS DE DEUX',
    'POINTE WORK',
    'CHARACTEER',
    'COMTEMPORARY',
    'GYMNASTICS',
    'FOLK DANCES',
    'CHOREOGRAPHICS'
]

teachingAreas.forEach(a => {
    const listAreas: HTMLElement = document.createElement('li');
    listAreas.textContent = a;
    areasTeaching.appendChild(listAreas);
});
areasTextGrid.appendChild(areasTeaching);

const areasTexts = [
    'Pointe work for the girls is introduced gradually from Year 7 and evolves over the years as feet and ankles strengthen.',
    'Body conditioning is taught to boys in Year 10 and 11 to increase strength in core stability, preparing them for the demands of pas de deux.',
    'Pas de deux is introduced in Year 11 with supported adage. These classes are an early introduction to pas de deux, which allow young students to become familiar with the complexities of partnering.'
]   

areasTexts.forEach(t => {
    const areasText: HTMLElement = document.createElement('p');
    areasText.textContent = t;
    areasTextGrid.appendChild(areasText)
});
areasContent.appendChild(areasTextGrid);

areas.appendChild(areasContent);

document.body.appendChild(areas);


