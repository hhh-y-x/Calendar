import { CreateCalendar } from '../../components/calendar/calendar.js';
import { activateAllListeners } from '../../components/change/change.js';
import { searchMonthList } from '../../components/input/input__month-search/input__month-search.js';

const calendarCalendar = new CreateCalendar();
calendarCalendar.currentCalendar();

activateAllListeners();
searchMonthList();