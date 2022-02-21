
import Book from './modules/bookOperations.js';
import * as nav from './modules/nav.js';
// import addDate from './modules/addDate';
import { DateTime } from '../../node_modules/luxon/src/luxon.js';

document.getElementById('list').addEventListener('click', nav.listShow);
document.getElementById('addNew').addEventListener('click', nav.addShow);
document.getElementById('contact').addEventListener('click', nav.contactShow);
document.getElementById('logo').addEventListener('click', nav.homePage);

const newBook = new Book();
newBook.displayInfo();
document.getElementById('addButton').addEventListener('click', () => {
  newBook.add();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

const addDate = () => {
  const dateContainer = document.getElementById('time');
  dateContainer.textContent = '';
  const date = DateTime.now();
  dateContainer.append(
    date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS),
  );
};
window.setInterval(addDate, 1000);