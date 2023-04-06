const navigationLinks = document.getElementsByClassName("navigation-link");
// console.log(navigationLinks);
// console.log(typeof navigationLinks);

for (const link of navigationLinks) {
    // link.onclick = () => console.log("Beans");
    link.onfocus = () => link.nextElementSibling.setAttribute('class', 'self-center w-8 border-b-4 border-violet-950');
    link.onblur = () => link.nextElementSibling.setAttribute('class', '');
    // link.onfocus = () => console.log(link.nextElementSibling);
    // link.onclick = console.log('Beans');
    // console.log("Beans Again");
    // link.innerHTML = "Beans";
}