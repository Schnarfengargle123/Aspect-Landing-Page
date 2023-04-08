const navigationLinks = document.getElementsByClassName('navigation-link');

for (const link of navigationLinks) {
  link.onfocus = () => {
    link.nextElementSibling.setAttribute(
      'class',
      'self-center w-8 border-b-4 border-violet-950'
    );
    link.classList.remove('mb-1');
  };
  link.onblur = () => {
    link.nextElementSibling.setAttribute('class', '');
    link.classList.add('mb-1');
  };
}

const navElement = document.querySelector('#navigation');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');
const navigationLinksContainer = document.querySelector('#navigation-links-container');
const navigationLogo = document.querySelector('#navigation-logo');
const navigationCaption = document.querySelector('#navigation-caption');

hamburgerOpen.onclick = () => {
  hamburgerMenu.classList.remove('hidden');
  hamburgerMenu.classList.add('flex');
  console.log('Hamburger OPEN!');
};

hamburgerClose.onclick = () => {
  hamburgerMenu.classList.remove('flex');
  hamburgerMenu.classList.add('hidden');
  console.log('Hamburger CLOSED!');
};

window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 640px)').matches) {
    console.log("Mobile View");
  }

  if (window.matchMedia('(max-width: 940px)').matches) {
    navigationLinksContainer.classList.add('w-72');
    navigationLinksContainer.classList.add('mr-4');

    navigationLinksContainer.classList.remove('ml-6');
    navigationLinksContainer.classList.remove('w-96');

    navigationLogo.classList.remove('sm:ml-16');
    navigationLogo.classList.add('sm:ml-4');

    navigationCaption.classList.remove('sm:mr-36');
    navigationCaption.classList.add('sm:mr-24');
  } else {
    navigationLinksContainer.classList.remove('w-72');
    navigationLinksContainer.classList.add('w-96');

    navigationLinksContainer.classList.add('ml-6');
    navigationLinksContainer.classList.add('w-96');

    navigationLogo.classList.add('sm:ml-16');
    navigationLogo.classList.remove('sm:ml-4');

    navigationCaption.classList.add('sm:mr-36');
    navigationCaption.classList.remove('sm:mr-24');
  }

  if (window.matchMedia('(min-width: 641px)').matches) {
    console.log("Desktop View");
    hamburgerMenu.classList.remove('flex');
    hamburgerMenu.classList.add('hidden');
  }
});
