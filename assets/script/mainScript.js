import { CreateCalendar } from '../../components/calendar/calendar.js';
import { activateAllListeners } from '../../components/change/change.js';
import { searchMonthList } from '../../components/change/change__month--suggestion.js';

const calendarCalendar = new CreateCalendar();
calendarCalendar.currentCalendar();

activateAllListeners();
searchMonthList();