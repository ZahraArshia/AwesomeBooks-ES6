// eslint-disable-next-line
import { DateTime } from '../../node_modules/luxon/src/luxon.js';

function addDate() {
  const dateContainer = document.getElementById('time');
  dateContainer.textContent = '';
  const date = DateTime.now();
  dateContainer.append(
    date.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS),
  );
}

export default addDate;
