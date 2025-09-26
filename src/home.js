import mimosaImg from './assets/imgs/mimosa.jpg';
import { createPhotoCreditEl } from './photo-credit';

const homeContent = document.createElement('div');

// Heading section
const titleContainer = document.createElement('div');
titleContainer.classList.add('heading-container', 'home-heading');

const titleEl = document.createElement('h1');
titleEl.textContent = 'Brunch Spot';

titleContainer.appendChild(titleEl);

homeContent.appendChild(titleContainer);

// Welcome section
const welcomeContainer = document.createElement('div');
welcomeContainer.classList.add('welcome-container');

const welcomeTextContainer = document.createElement('div');
const welcomeHeader = document.createElement('h2');
const welcomePara = document.createElement('p');

welcomeHeader.textContent = 'Welcome to our brunch restaurant!';
welcomePara.textContent =
  'We pride ourselves on offering a diverse menu that caters to all tastes, featuring both classic favorites and innovative dishes crafted from fresh, locally sourced ingredients. Whether you are seeking a leisurely weekend meal or a quick weekday bite, our inviting space and attentive service ensure a delightful dining experience. Join us to savor the perfect blend of flavors and enjoy the vibrant ambiance that makes brunch a cherished occasion.';

welcomeTextContainer.appendChild(welcomeHeader);
welcomeTextContainer.appendChild(welcomePara);

welcomeContainer.appendChild(welcomeTextContainer);

const mimosaImgEl = document.createElement('img');
mimosaImgEl.src = mimosaImg;
mimosaImgEl.classList.add('mimosa-img');
welcomeContainer.appendChild(mimosaImgEl);

homeContent.appendChild(welcomeContainer);

// Photo credits
const footer = document.createElement('footer');

const logoCredit = createPhotoCreditEl(
  'https://www.freepik.com/icon/food_14696506#fromView=search&page=3&position=32&uuid=44bfc7e6-5246-4e68-bfc0-e3aa89634de9',
  'Icon by Irakun'
);
footer.appendChild(logoCredit);

const headingBackgroundCredit = createPhotoCreditEl(
  'https://unsplash.com/photos/brown-and-black-cake-on-white-ceramic-plate-QrotI-03FeA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  'Photo by Micheile Henderson on Unplash'
);
footer.appendChild(headingBackgroundCredit);

const mimosaPhotoCredit = createPhotoCreditEl(
  'https://unsplash.com/photos/a-couple-of-people-holding-up-wine-glasses-9Bth_LiiMoo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  'Photo by Ecaterina Tanase on Unplash'
);
footer.appendChild(mimosaPhotoCredit);

homeContent.appendChild(footer);

export { homeContent };
