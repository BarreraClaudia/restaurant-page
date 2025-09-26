import './styles.css';
import { homeContent } from './home';
import { menuContent } from './menu';
import { contactContent } from './contact';

const contentContainer = document.querySelector('#content');

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', switchContent);

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', switchContent);

const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', switchContent);

function defaultContent() {
  contentContainer.appendChild(homeContent);
  homeBtn.classList.add('active');
}

defaultContent();

function switchContent(event) {
  contentContainer.replaceChildren(); // empties all its children

  if (event.target.classList.contains('home-btn')) {
    contentContainer.appendChild(homeContent);
    homeBtn.classList.add('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  } else if (event.target.classList.contains('menu-btn')) {
    contentContainer.appendChild(menuContent);
    menuBtn.classList.add('active');
    homeBtn.classList.remove('active');
    contactBtn.classList.remove('active');
  } else if (event.target.classList.contains('contact-btn')) {
    contentContainer.appendChild(contactContent);
    contactBtn.classList.add('active');
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
  }
}
