import { CreateCalendar } from '../../components/calendar/calendar.js';

const months = [
  "January", "February", "March", "April",
  "May", "June", "July", "August", 
  "September", "October", "November", "December"
];

const headerMonth = document.querySelector('.change__month');
const headerYear = document.querySelector('.change__year');
const now = new Date();

function checkInputIsCurrent(createCalendar) {
  if (now.getFullYear() === Number(headerYear.value) && now.getMonth() === months.indexOf(headerMonth.value)) {
    createCalendar.currentCalendar();
  };
};

function previousAndNextMonth() {
  const previousMonthBtn = document.querySelector('.change__previous-month');
  const nextMonthBtn = document.querySelector('.change__next-month');
};