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
balletClassTitle.textContent = "BALLET CLASS";
balletClassHeader.appendChild(balletClassTitle);

document.body.appendChild(balletClassHeader);


const firstStep: HTMLElement = document.createElement('section');
firstStep.classList.add('first-step');

const firstStepTitle: HTMLElement = document.createElement('h4');
firstStepTitle.textContent = 'Your first step on the path to a career a classical baller dancer';
firstStep.appendChild(firstStepTitle)

const firstStepContent: HTMLElement =document.createElement("div");
firstStepContent.classList.add('first-step-content');

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

const education: HTMLElement = document.createElement("section");
education.classList.add("education");

const educationContent: HTMLElement = document.createElement("div");
educationContent.classList.add('education-content');

const educationTextGrid: HTMLElement = document.createElement("div");
educationTextGrid.classList.add("education-text");

const educationTitle: HTMLElement = document.createElement("h4");
educationTitle.textContent = 'Dance education';
educationTextGrid.appendChild(educationTitle);

const educationText: HTMLElement = document.createElement('p');
educationText.textContent = 'Full-time students of The Royal Ballet School receive a broas education, designed to give them experience of a wide range of roles within the dance sector. Students are taught choreography alongside their classical training and take part in The Creative Artist Programme, making them well-rounded artist ready to enter a competitive industry.';
educationTextGrid.appendChild(educationText);

educationContent.appendChild(educationTextGrid);

const educationImage: HTMLImageElement = document.createElement("img");
educationImage.src = "../assets/Education-BS(BalletClass).png";
educationContent.appendChild(educationImage);

education.appendChild(educationContent);

document.body.appendChild(education);

const audition: HTMLElement = document.createElement('section');
audition.classList.add('audition');

const auditionContent: HTMLElement = document.createElement("div");
auditionContent.classList.add('audition-content');

const auditionTitle: HTMLElement = document.createElement('h5');
auditionTitle.textContent = 'APPLY FOR AN AUDITION';
auditionContent.appendChild(auditionTitle);

const auditionForm: HTMLElement = document.createElement('form');

const nameInput: HTMLInputElement = document.createElement("input");
nameInput.placeholder = 'Name';
nameInput.type = 'text';
nameInput.name = 'name';
auditionForm.appendChild(nameInput);

const phoneInput: HTMLInputElement = document.createElement('input');
phoneInput.type = 'text';
phoneInput.placeholder = 'Number';
phoneInput.name = 'number';
auditionForm.appendChild(phoneInput);

const submitButton: HTMLButtonElement = document.createElement("button");
submitButton.type = 'submit';
submitButton.textContent = 'Send';
auditionForm.appendChild(submitButton);

auditionContent.appendChild(auditionForm);

audition.appendChild(auditionContent);

document.body.appendChild(audition);

const balletClassFooter: HTMLElement = document.createElement('footer');

const balletClassFooterContent: HTMLElement = document.createElement('div');
balletClassFooterContent.classList.add('footer-content');

const balletClassFooterInfo: HTMLElement = document.createElement('div');
balletClassFooterInfo.classList.add('footer-right');

const balletClassAddress: HTMLElement = document.createElement('p');
balletClassAddress.textContent = 'White Lodge, Richmond Park, Richmond, Surrey TW10 5HR, UK';
balletClassFooterInfo.appendChild(balletClassAddress);

const balletClassPhone: HTMLElement = document.createElement('p');
balletClassPhone.textContent = '+44 (0)20 8390 8440';
balletClassFooterInfo.appendChild(balletClassPhone);

balletClassFooterContent.appendChild(balletClassFooterInfo);

const balletClassFooterTitle: HTMLElement = document.createElement('h3');
balletClassFooterTitle.textContent = 'BLACK SWAN';
balletClassFooterContent.appendChild(balletClassFooterTitle);

balletClassFooter.appendChild(balletClassFooterContent);

document.body.appendChild(balletClassFooter);


