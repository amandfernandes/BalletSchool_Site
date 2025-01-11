const historyHeader: HTMLElement = document.createElement('header');
const historyNav: HTMLElement = document.createElement('nav');

const historyUl: HTMLElement = document.createElement('ul');
const historyLinks = [
    {href: "../index.html", text: "Home"},
    {href: "#", text: "History"},
    {href: "../teachers.html", text: "Teachers"},
    {href: "../gallery.html", text: "Gallery"}
];
historyLinks.forEach(link => {
    const historyLi: HTMLLIElement = document.createElement("li");
    const historyA: HTMLAnchorElement = document.createElement("a");
    historyA.href = link.href;
    historyA.textContent = link.text;
    historyLi.appendChild(historyA);
    historyUl.appendChild(historyLi);
});
historyNav.appendChild(historyUl);
historyHeader.appendChild(historyNav)

const historyTitle: HTMLHeadingElement = document.createElement("h1");
historyTitle.textContent = "HISTORY";
historyHeader.appendChild(historyTitle);

document.body.appendChild(historyHeader);


const historyContent: HTMLElement = document.createElement('section');
historyContent.classList.add('historyContent');

function createHistory(img: string, year: string, title: string, text: string[]): HTMLElement {
    const historyGrid: HTMLElement = document.createElement('div');
    historyGrid.classList.add('history-grid');

    const historyImg: HTMLImageElement = document.createElement('img');
    historyImg.src = img;
    historyGrid.appendChild(historyImg);

    const historyYear: HTMLElement = document.createElement('h2');
    historyYear.textContent = year;
    historyGrid.appendChild(historyYear)

    const historyTextContent: HTMLElement = document.createElement('div');
    historyTextContent.classList.add('history-text');

    const historyMomentTitle: HTMLElement = document.createElement('h3');
    historyMomentTitle.textContent = title;
    historyTextContent.appendChild(historyMomentTitle);

    text.forEach(t => {
        const historyText: HTMLElement = document.createElement('p');
        historyText.textContent = t;
        historyTextContent.appendChild(historyText);
    });
    historyGrid.appendChild(historyTextContent);

    return historyGrid;
};

const addHistory = [
    createHistory(
        '../assets/History-2.png',
        '1926',
        'Founding of the School',
        [
            'The School was founded in 1926, when Dame Ninette de Valois opened her Academy of Choreographic Art. Inspired to create a repertory ballet company and school, she collaborated with Lilian Baylis, lessee and Manager of the Old Vic Theatre.',
            'When Lilian Baylis acquired the Sadler\'s Wells Theatre, de Valois moved the School there in 1931 and it became The Vic-Wells Ballet School feeding dancers into The Vic-Wells Ballet Company. In 1939 the school was renamed The Sadler\'s Wells Ballet School and the Company became The Sadler\'s Wells Ballet.'
        ]
    ),

    createHistory(
        '../assets/History-1.png',
        '1946',
        'Nive to Cover Garden',
        [
            "In 1946 The Sadler's Wells ballet moved to a permanent home at the Royal Opera House, Convent Garden. A second company was formed, The Sadler's Wells Theater Ballet. In 1947 the School moved from Sandler's Wells Theater to Barons Court and general education was combined with vocational ballet training.",
            'The first five yonger years of the School moved to White Lodge, Richmond Park in 1955/56 and becamee residential, combining general education nd voocational ballet training. The final three years of study for older students continued to be based at Barons Court.'
        ]
    ),

    createHistory(
        '../assets/History-3.png',
        '1990',
        'A Royal Charter',
        [
            "The Royal Charter was granted in October 1959 and the School and companies were renamed The Royal Ballet School, The Royal Ballet and the Sadler's Wells Royal Ballet (later renamed Birmingham Royal Ballet following its move there in 1990).",
            'From that time the School has become both the leading classical ballet school in the United Kingdom earning government support and an international institution which attracts the very best ballet students worldwide. The calibre of students graduating from the school is a self-evident - see our list of notable alumni.'
        ]
    ),

    createHistory(
        '../assets/History-4.png',
        '2003',
        'Move to Floral Street',
        [
            "In January 2003 the Barons Court campus moved to teh new premises in Floral Street, alongside London's Royal Opera House in Covent Garden. The state-of-the art studs are now linked to The Royal Ballet by the awars winnig Bridge of Aspiration, fulfilling Dame Ninette's dream to have Company and School side by side int the centre of London."
                
        ]
    )
];
addHistory.forEach(g => historyContent.appendChild(g));

document.body.appendChild(historyContent);


const historyFooter: HTMLElement = document.createElement('footer');

const historyFooterContent: HTMLElement = document.createElement('div');
historyFooterContent.classList.add('footer-content');

const historyFooterInfo: HTMLElement = document.createElement('div');
historyFooterInfo.classList.add('footer-right');

const historyAddress: HTMLElement = document.createElement('p');
historyAddress.textContent = 'White Lodge, Richmond Park, Richmond, Surrey TW10 5HR, UK';
historyFooterInfo.appendChild(historyAddress);

const historyPhone: HTMLElement = document.createElement('p');
historyPhone.textContent = '+44 (0)20 8390 8440';
historyFooterInfo.appendChild(historyPhone);

historyFooterContent.appendChild(historyFooterInfo);

const historyFooterTitle: HTMLElement = document.createElement('h3');
historyFooterTitle.textContent = 'BLACK SWAN';
historyFooterContent.appendChild(historyFooterTitle);

historyFooter.appendChild(historyFooterContent);

document.body.appendChild(historyFooter);


