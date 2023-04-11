// import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import 'photoswipe/style.css';

import PhotoSwipeLightbox from 'photoswipe/dist/photoswipe-lightbox.esm.js';
import PhotoSwipe from 'photoswipe/dist/photoswipe.esm.js';

import 'photoswipe/dist/photoswipe.css';

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
const navigationLinksContainer = document.querySelector(
  '#navigation-links-container'
);
const navigationLogo = document.querySelector('#navigation-logo');
const navigationCaption = document.querySelector('#navigation-caption');
const header = document.querySelector('#header');
const headerContent = document.querySelector('#header-content');
const headerText = document.querySelector('#header-text');

const hamburgerLinksContainer = document.querySelector(
  '#hamburger-links-container'
);

const hamburgerLinks = hamburgerLinksContainer.getElementsByClassName(
  'hamburger-navigation-link'
);

console.log('Hamburger Links', hamburgerLinks);

for (const link of hamburgerLinks) {
  link.onclick = () => {
    hamburgerMenu.classList.add('hidden');

    header.classList.add('mt-16');
    header.classList.remove('mt-[42rem]');
  };
}

hamburgerOpen.onclick = () => {
  hamburgerMenu.classList.remove('hidden');
  hamburgerMenu.classList.add('flex');

  header.classList.remove('mt-16');
  header.classList.add('mt-[42rem]');
  console.log('Hamburger OPEN!');
};

hamburgerClose.onclick = () => {
  hamburgerMenu.classList.remove('flex');
  hamburgerMenu.classList.add('hidden');

  header.classList.add('mt-16');
  header.classList.remove('mt-[42rem]');
  console.log('Hamburger CLOSED!');
};

window.addEventListener('resize', () => {
  if (window.matchMedia('(max-width: 640px)').matches) {
    console.log('Mobile View');
  }

  if (window.matchMedia('(min-width: 641px)').matches) {
    console.log('Desktop View');
    hamburgerMenu.classList.remove('flex');
    hamburgerMenu.classList.add('hidden');

    header.classList.add('mt-16');
    header.classList.remove('mt-[42rem]');
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

  if (window.matchMedia('(max-width: 1200px)').matches) {
    headerContent.classList.add('flex-col');
    headerText.classList.remove('lg:ml-16');
  } else {
    headerText.classList.add('lg:ml-16');
    headerContent.classList.remove('flex-col');
  }
});

const API_KEY = '94b7ca400ebd4960b48cd8a7c1774799';

let articles;

const cardContainer = document.querySelector('#card-container');

fetch(
  // `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=3&page=1&apiKey=${API_KEY}`
  `https://newsapi.org/v2/everything?sources=bbc-news&pageSize=3&page=1&apiKey=94b7ca400ebd4960b48cd8a7c1774799`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    articles = data.articles;
  })
  .then(() => {
    console.log('Articles: ', articles);

    for (const article of articles) {
      const originalArticleDate = new Date(article.publishedAt).toDateString();

      const articleYear = originalArticleDate.slice(11, 15);
      const articleMonth = originalArticleDate.slice(4, 7);
      const articleDay = originalArticleDate.slice(8, 10);

      // console.log(originalArticleDate);
      console.log(articleYear);
      console.log(articleMonth);
      console.log(articleDay);

      const articleDate =
        articleDay + 'th' + ' ' + articleMonth + ' ' + articleYear;
      console.log(articleDate);

      // const formattedArticleDate =
      //   articleDate.getDate() +
      //   'th ' +
      //   articleDate.getMonth() +
      //   articleDate.Year();
      // console.log(formattedArticleDate);

      const articleComponent = `
<div class="w-[28rem] h-[33rem] px-16 bg-violet-900 flex flex-col justify-between items-start mx-2">
<div class="h-[24rem] w-[20rem]">
  <h2 class="bg-orange-600 px-8 py-4 text-gray-100 self-start w-[14rem]">${articleDate}</h2>
  <h1 class="text-3xl font-bold text-gray-100 mt-8">${article.title}</h1>
</div>
<div class="flex flex-row mb-16 w-48 items-center">
  <img src="./assets//svg/news-circle.svg" class="w-4 h-4" />
  <h3 class="text-gray-100 font-semibold text-lg ml-2">${article.source.Name}</h3>
</div>
</div>
`;

      cardContainer.innerHTML += articleComponent;
      console.log(article);
    }
  })
  .catch((err) => console.error(err));
  
  // const lightbox = new PhotoSwipeLightbox({
  //   // gallery: '#my-gallery',
  //   gallery: '#my-gallery',
  //   children: 'a',
  //   pswpModule: () => import('photoswipe'),
  // });

  const options = {
    gallerySelector: '#my-gallery',
    childSelector: 'a',
    pswpModule: PhotoSwipe
  };
  const lightbox = new PhotoSwipeLightbox(options);
  lightbox.init();
  
