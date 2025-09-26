import { createPhotoCreditEl } from './photo-credit';

const menuContent = document.createElement('div');

// Heading section
const titleContainer = document.createElement('div');
titleContainer.classList.add('heading-container', 'menu-heading');

const titleEl = document.createElement('h1');
titleEl.textContent = 'Menu';

titleContainer.appendChild(titleEl);

menuContent.appendChild(titleContainer);

// Menu section
const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');

const menuEl = document.createElement('div');
menuEl.classList.add('menu');

function createMenuItemEl(name, description, price) {
  const menuItem = document.createElement('h2');
  menuItem.textContent = name;
  menuEl.appendChild(menuItem);

  const menuDescription = document.createElement('p');
  menuDescription.textContent = description;
  menuEl.appendChild(menuDescription);

  const menuPrice = document.createElement('p');
  menuPrice.classList.add('menu-price');
  menuPrice.textContent = price;
  menuEl.appendChild(menuPrice);
}

createMenuItemEl(
  'Chorizo Benny',
  'Poached eggs, chorizo, hollandaise sauce, avocado, english muffins',
  '$15'
);

createMenuItemEl(
  'Omelette',
  'Eggs, onion, tomato, jalapeno, cheese, bacon',
  '$14'
);

createMenuItemEl('Mimosa', 'Champagne and orange juice', '$10');

createMenuItemEl(
  'Iced Coffee',
  'Coffee, oat milk, vanilla syrup, cold foam',
  '$8'
);

menuContainer.appendChild(menuEl);

menuContent.appendChild(menuContainer);

// Photo credits
const footer = document.createElement('footer');

const logoCredit = createPhotoCreditEl(
  'https://www.freepik.com/icon/food_14696506#fromView=search&page=3&position=32&uuid=44bfc7e6-5246-4e68-bfc0-e3aa89634de9',
  'Icon by Irakun'
);
footer.appendChild(logoCredit);

const headingBackgroundCredit = createPhotoCreditEl(
  'https://unsplash.com/photos/sliced-bread-on-white-ceramic-plate-7N8amvEYF-0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
  'Photo by Colin Michel on Unsplash'
);
footer.appendChild(headingBackgroundCredit);

menuContent.appendChild(footer);

export { menuContent };
