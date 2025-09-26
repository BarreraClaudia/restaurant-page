import addressIconSrc from './assets/imgs/address-icon.png';
import phoneIconSrc from './assets/imgs/phone-icon.png';
import emailIconSrc from './assets/imgs/email-icon.png';
import { createPhotoCreditEl } from './photo-credit';

const contactContent = document.createElement('div');

// Heading section
const titleContainer = document.createElement('div');
titleContainer.classList.add('heading-container', 'contact-heading');

const titleEl = document.createElement('h1');
titleEl.textContent = 'Contact Us';

titleContainer.appendChild(titleEl);

contactContent.appendChild(titleContainer);

// Contact section
const contactContainer = document.createElement('div');
contactContainer.classList.add('contact-container');

const contactEl = document.createElement('div');
contactEl.classList.add('contact');

function addContactItem(iconSrc, info) {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('contact-item-container');

  const icon = document.createElement('img');
  icon.classList.add('contact-icon');
  icon.src = iconSrc;
  itemContainer.appendChild(icon);

  const infoEl = document.createElement('p');
  infoEl.textContent = info;
  itemContainer.appendChild(infoEl);

  contactEl.appendChild(itemContainer);
}

addContactItem(addressIconSrc, '123 Street, City, State 12345');
addContactItem(phoneIconSrc, '(123) 456- 7890');
addContactItem(emailIconSrc, 'email@email.com');

contactContainer.appendChild(contactEl);

const weekdayHoursEl = document.createElement('p');
weekdayHoursEl.textContent = 'Monday - Thursday: 6:00 am - 2:00 pm';
contactEl.appendChild(weekdayHoursEl);

const weekendHoursEl = document.createElement('p');
weekendHoursEl.classList.add('weekend-hours');
weekendHoursEl.textContent = 'Friday - Sunday: 8:00 am - 4:00 pm';
contactEl.appendChild(weekendHoursEl);

contactContent.appendChild(contactContainer);

// Photo credits
const footer = document.createElement('footer');

const logoCredit = createPhotoCreditEl(
  'https://www.freepik.com/icon/food_14696506#fromView=search&page=3&position=32&uuid=44bfc7e6-5246-4e68-bfc0-e3aa89634de9',
  'Icon by Irakun'
);
footer.appendChild(logoCredit);

const headingBackgroundCredit = createPhotoCreditEl(
  'https://unsplash.com/photos/filled-white-ceramic-cups-and-saucers-7loiOoCP72g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  'Photo by Cesira Alvarado on Unsplash'
);
footer.appendChild(headingBackgroundCredit);

const iconsCredit = createPhotoCreditEl(
  'https://www.freepik.com/author/iconfield/icons',
  'Icons by iconfield'
);
footer.appendChild(iconsCredit);

contactContent.appendChild(footer);

export { contactContent };
