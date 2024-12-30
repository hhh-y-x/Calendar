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
  
  function handlePreviousMonth() {
    let presentInputYear = Number(headerYear.value);
    let changedMonth = months.indexOf(headerMonth.value) - 1;
    
    if (changedMonth < 0) {
      changedMonth = 11;
      presentInputYear -= 1;
    };
    
    headerMonth.value = months[changedMonth];
    headerYear.value = presentInputYear;
    
    const createCalendar = new CreateCalendar(presentInputYear, changedMonth);
    createCalendar.render();
    
    checkInputIsCurrent(createCalendar);
  };

  function handleNextMonth() {
    let presentInputYear = Number(headerYear.value);
    let changedMonth = months.indexOf(headerMonth.value) + 1;
    
    if (changedMonth > 11) {
      changedMonth = 0;
      presentInputYear += 1;
    };
    
    headerMonth.value = months[changedMonth];
    headerYear.value = presentInputYear;
    
    const createCalendar = new CreateCalendar(presentInputYear, changedMonth);
    createCalendar.render();
    
    checkInputIsCurrent(createCalendar);
  };
};