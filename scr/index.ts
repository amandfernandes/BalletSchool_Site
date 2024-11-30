const header: HTMLElement = document.createElement('header');
const nav: HTMLElement = document.createElement('nav');

const ul: HTMLElement = document.createElement('ul');
const links = [
    {href: "", text: "Home"},
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
