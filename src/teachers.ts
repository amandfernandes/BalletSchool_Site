const teachersHeader: HTMLElement = document.createElement('header');
const teachersNav: HTMLElement = document.createElement('nav');

const teachersUl: HTMLElement = document.createElement('ul');
const teachersLinks = [
    {href: "../index.html", text: "Home"},
    {href: "../history.html", text: "History"},
    {href: "#", text: "Teachers"},
    {href: "../gallery.html", text: "Gallery"}
];
teachersLinks.forEach(link => {
    const teachersLi: HTMLLIElement = document.createElement("li");
    const teachersA: HTMLAnchorElement = document.createElement("a");
    teachersA.href = link.href;
    teachersA.textContent = link.text;
    teachersLi.appendChild(teachersA);
    teachersUl.appendChild(teachersLi);
});
teachersNav.appendChild(teachersUl);
teachersHeader.appendChild(teachersNav)

const teachersTitle: HTMLHeadingElement = document.createElement("h1");
teachersTitle.textContent = "TEACHERS";
teachersHeader.appendChild(teachersTitle);

document.body.appendChild(teachersHeader);

const teachers: HTMLElement = document.createElement('section');
teachers.classList.add('teachers')

const teachersContent: HTMLElement = document.createElement("div");
teachersContent.classList.add('teachers-content');

const teachersGrid: HTMLElement = document.createElement('div');
teachersGrid.classList.add('teachers-grid');

const teachersImage = [
    {img: '../assets/', name: 'Anna Pavlova', info: 'breve descrição'},
    {img: '../assets/Professor-2.png', name: 'Pyot Ilyich Tchaikovsky', info:'breve descrição'},
    {img: '../assets/', name: 'Sylvie Guillem', info: 'breve descrição'},
    {img: '../assets/', name: 'Pierre Beauchamps', info: 'breve descrição'},
    {img: '../assets/', name: 'Madame Theodore', info: 'breve descrição'}
];

const teacherDetailsCard: HTMLElement = document.createElement('div');
teacherDetailsCard.classList.add('teacher-details-card');
teacherDetailsCard.style.display ='none';
teachersContent.appendChild(teacherDetailsCard);

const teacherDetailsImage: HTMLImageElement = document.createElement('img');
teacherDetailsCard.appendChild(teacherDetailsImage);

const teacherDetailsName: HTMLElement = document.createElement('h3');
teacherDetailsCard.appendChild(teacherDetailsName);

const teacherDetailsInfo: HTMLElement = document.createElement('p');
teacherDetailsCard.appendChild(teacherDetailsInfo);

const teacherDetails = (i: number) => {
    const teacher = teachersImage[i];

    teacherDetailsImage.src = teacher.img;
    teacherDetailsName.textContent = teacher.name;
    teacherDetailsInfo.textContent = teacher.info;

    teacherDetailsCard.style.display = 'block'
};

teachersImage.forEach((t, i) => {
    const teachersCard: HTMLElement = document.createElement('div');
    teachersCard.classList.add('teacher-card');
    

    const teachersImg: HTMLImageElement = document.createElement('img');
    teachersImg.src = t.img;
    teachersImg.dataset.index = i.toString();
    teachersCard.appendChild(teachersImg);


    const teachersName: HTMLElement = document.createElement('p');
    teachersName.textContent = t.name;
    teachersCard.appendChild(teachersName);

    teachersCard.addEventListener('click', () => teacherDetails(i));

    teachersGrid.appendChild(teachersCard);
});

teachersContent.appendChild(teachersGrid);
teachers.appendChild(teachersContent);

const teachersFooter: HTMLElement = document.createElement('footer');

const teachersFooterContent: HTMLElement = document.createElement('div');
teachersFooterContent.classList.add('footer-content');

const teachersFooterInfo: HTMLElement = document.createElement('div');
teachersFooterInfo.classList.add('footer-right');

const teachersAddress: HTMLElement = document.createElement('p');
teachersAddress.textContent = 'White Lodge, Richmond Park, Richmond, Surrey TW10 5HR, UK';
teachersFooterInfo.appendChild(teachersAddress);

const teachersPhone: HTMLElement = document.createElement('p');
teachersPhone.textContent = '+44 (0)20 8390 8440';
teachersFooterInfo.appendChild(teachersPhone);

teachersFooterContent.appendChild(teachersFooterInfo);

const teachersFooterTitle: HTMLElement = document.createElement('h3');
teachersFooterTitle.textContent = 'BLACK SWAN';
teachersFooterContent.appendChild(teachersFooterTitle);

teachersFooter.appendChild(teachersFooterContent);

document.body.appendChild(teachersFooter);


