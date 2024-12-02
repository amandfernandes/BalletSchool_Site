var header = document.createElement('header');
var nav = document.createElement('nav');
var ul = document.createElement('ul');
var links = [
    { href: "#", text: "Home" },
    { href: "../history.html", text: "History" },
    { href: "../teachers.html", text: "Teachers" },
    { href: "../gallery.html", text: "Gallery" }
];
links.forEach(function (link) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
});
nav.appendChild(ul);
header.appendChild(nav);
var h1 = document.createElement("h1");
h1.textContent = "BLACK SWAN";
var span = document.createElement("span");
span.textContent = "BALLET SCHOOL";
h1.appendChild(span);
header.appendChild(h1);
document.body.appendChild(header);
var about = document.createElement('section');
about.classList.add('about');
var aboutContent = document.createElement('div');
aboutContent.classList.add('about-content');
about.appendChild(aboutContent);
var logo = document.createElement('img');
logo.src = '';
aboutContent.appendChild(logo);
var aboutText = document.createElement('div');
aboutText.classList.add('about-text');
var aboutTitle = document.createElement('h2');
aboutTitle.textContent = 'About';
aboutText.appendChild(aboutTitle);
var aboutParagraph1 = document.createElement('p');
aboutParagraph1.textContent = 'Our aim is to provide high-level ballet and dance lessons for dancers of all ages and abilities. We are proud to prioritize pe steps over pe development vocabulary.';
var aboutParagraph2 = document.createElement('p');
aboutParagraph2.textContent = 'Following pe RAD syllabus, our children are fully prepared for peir examinations, allowing pem to furper peir progress and maturity. At Black Swan, we are dedicated to afford pem, pe finest training possible.';
aboutText.appendChild(aboutParagraph1);
aboutText.appendChild(aboutParagraph2);
var aboutButton = document.createElement('a');
aboutButton.href = '#';
aboutButton.classList.add('button');
aboutButton.textContent = 'Join School';
aboutText.appendChild(aboutButton);
aboutContent.appendChild(aboutText);
about.appendChild(aboutContent);
document.body.appendChild(about);
var performaces = document.createElement('section');
performaces.classList.add('performaces');
var performacesTitle = document.createElement('h3');
performacesTitle.textContent = 'Performaces';
performaces.appendChild(performacesTitle);
var performacesDescription = document.createElement('p');
performacesDescription.textContent = 'Our Performances are a chance to witness pe exceptional talent of our young dancers and are a must-see for ballet fans.';
performaces.appendChild(performacesDescription);
var performacesContent = document.createElement('div');
performacesContent.classList.add('performaces-content');
var performacesGrid = document.createElement('div');
performacesGrid.classList.add('performaces-grid');
var performace = [
    { date: '4 June, 3pm', location: 'Opera Holland Park', description: 'Predominantly Upper School students' },
    { date: '11 June, 3pm', location: 'Opera Holland Park', description: 'Occassionally also Middle School students' },
    { date: '17 June, 3pm', location: 'Opera Holland Park', description: 'Predominantly Lower School students' }
];
performace.forEach(function (p, index) {
    var pContent = document.createElement('div');
    pContent.classList.add('performace');
    pContent.setAttribute('dateIndex', String(index));
    var pDate = document.createElement('p');
    pDate.textContent = p.date;
    pContent.appendChild(pDate);
    var pLocation = document.createElement('p');
    pLocation.textContent = p.location;
    pContent.appendChild(pLocation);
    var pDescription = document.createElement('p');
    pDescription.textContent = p.description;
    pContent.appendChild(pDescription);
    performacesGrid.appendChild(pContent);
});
var currentIndex = 1;
var updateHighlight = function () {
    var items = Array.from(performacesGrid.getElementsByClassName('performace'));
    items.forEach(function (item, index) {
        item.classList.remove('highlight');
        item.style.transform = 'scale(1.2)';
    });
    var currentItem = items[currentIndex];
    currentItem.classList.add('hightlight');
    currentItem.style.transform = 'scale(1.2)';
};
var nextPerformace = function () {
    currentIndex = (currentIndex + 1) % performace.length;
    updateHighlight();
};
var prevPerformace = function () {
    currentIndex = (currentIndex - 1 + performace.length) % performace.length;
    updateHighlight();
};
var nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.onclick = nextPerformace;
performacesContent.appendChild(nextButton);
var prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.onclick = prevPerformace;
performacesContent.appendChild(prevButton);
performacesContent.appendChild(performacesGrid);
performaces.appendChild(performacesContent);
document.body.appendChild(performaces);
updateHighlight();
var classes = document.createElement('section');
classes.classList.add('classes');
var classesTitle = document.createElement('h3');
classesTitle.textContent = 'Classes';
classes.appendChild(classesTitle);
var classesGrid = document.createElement('div');
classesGrid.classList.add('classes-grid');
var classroom = [
    { href: './public/balletClass.html', img: './public/assets/', text: 'Ballet Class' },
    { href: '#', img: './public/assets/', text: 'Theatre Dance Class' },
    { href: '#', img: './public/assets/', text: 'Comtemporary Class' },
    { href: '#', img: './public/assets/', text: 'Stretchind Class' }
];
classroom.forEach(function (classItem) {
    var classCard = document.createElement('div');
    classCard.classList.add('class-card');
    if (classItem.href) {
        var link = document.createElement('a');
        link.href = classItem.href;
        var classImg = document.createElement('img');
        classImg.src = classItem.img;
        classImg.classList.add('class-img');
        link.appendChild(classImg);
        classCard.appendChild(classImg);
    }
    var classTitle = document.createElement('p');
    classTitle.textContent = classItem.text;
    classCard.appendChild(classTitle);
    classesGrid.appendChild(classCard);
});
classes.appendChild(classesGrid);
document.body.appendChild(classes);
var trialLesson = document.createElement('section');
trialLesson.classList.add('trial-lesson');
var trialContent = document.createElement('div');
trialContent.classList.add('trial-content');
var trialTitle = document.createElement('p');
trialTitle.textContent = 'SIGN UP A FREE TRIAL LESSON';
trialContent.appendChild(trialTitle);
var trialButton = document.createElement('a');
trialButton.href = '#';
trialButton.classList.add('bottun-trial');
trialButton.textContent = 'Join School';
trialContent.appendChild(trialButton);
trialLesson.appendChild(trialContent);
document.body.appendChild(trialLesson);
var teachers = document.createElement('section');
teachers.classList.add('teachers');
var teachersContent = document.createElement('div');
teachersContent.classList.add('teachers-content');
var teachersTitle = document.createElement('h3');
teachersTitle.textContent = 'Teachers';
teachersContent.appendChild(teachersTitle);
var teachersGrid = document.createElement('div');
teachersGrid.classList.add('teachers-grid');
var teacher = [
    { img: './public/assets/', name: 'Ana Botafogo' },
    { img: './public/assets/', name: 'Pyot Ilyich Tchaikovsky' },
    { img: './public/assets/', name: 'Ingrid Silva' }
];
teacher.forEach(function (t) {
    var teacherCard = document.createElement('div');
    teacherCard.classList.add('teacher-card');
    teachersGrid.appendChild(teacherCard);
    var teacherImg = document.createElement('img');
    teacherImg.src = t.img;
    teacherCard.appendChild(teacherImg);
    var teacherName = document.createElement('p');
    teacherName.textContent = t.name;
    teacherCard.appendChild(teacherName);
    teachersGrid.appendChild(teacherCard);
});
var teachersButton = document.createElement('a');
teachersButton.href = './public/teachers.html';
teachersButton.classList.add('button-teachers');
teachersButton.textContent = 'Show More';
teachersGrid.appendChild(teachersButton);
teachersContent.appendChild(teachersGrid);
teachers.appendChild(teachersContent);
document.body.appendChild(teachers);
var footer = document.createElement('footer');
var footerContent = document.createElement('div');
footerContent.classList.add('footer-content');
var footerTitle = document.createElement('h3');
footerTitle.textContent = 'BLACK SWAN';
footerContent.appendChild(footerTitle);
var footerLeft = document.createElement('div');
footerLeft.classList.add('footer-left');
var subscribeText = document.createElement('p');
subscribeText.textContent = 'Subscribe to the newsletter';
footerLeft.appendChild(subscribeText);
var subscribeForm = document.createElement('form');
var subscribeInput = document.createElement('input');
subscribeInput.type = 'email';
subscribeInput.placeholder = 'Email';
subscribeForm.appendChild(subscribeInput);
var subscribeButton = document.createElement('button');
subscribeButton.type = 'submit';
subscribeButton.textContent = 'Subscribe';
subscribeForm.appendChild(subscribeButton);
footerLeft.appendChild(subscribeForm);
footerContent.appendChild(footerLeft);
var footerRight = document.createElement('div');
footerRight.classList.add('footer-right');
var address = document.createElement('p');
address.textContent = 'White Lodge, Richmond Park, Richmond, Surrey TW10 5HR, UK';
footerRight.appendChild(address);
var phone = document.createElement('p');
phone.textContent = '+44 (0)20 8390 8440';
footerRight.appendChild(phone);
footerContent.appendChild(footerRight);
footer.appendChild(footerContent);
document.body.appendChild(footer);
