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
  const headerMonthUpperFirstLetter = headerMonth.textContent.charAt(0).toLocaleUpperCase() + headerMonth.textContent.slice(1).toLocaleLowerCase();
  
  if (now.getFullYear() === Number(headerYear.textContent) && now.getMonth() === months.indexOf(headerMonthUpperFirstLetter)) {
    createCalendar.currentCalendar();
  };
};

export function activateAllListeners() {
  previousAndNextMonth();
  previousAndNextYear();
  setCalendarFromInput();
  returnToCurrentCalendar();
};

function returnToCurrentCalendar() {
  const returnToCurrent = document.querySelector('.return__button');

  returnToCurrent.addEventListener('click', () => {
    const createCalendar = new CreateCalendar();
    createCalendar.currentCalendar();
  });
};

function previousAndNextMonth() {
  const previousMonthBtn = document.querySelector('.change__previous-month');
  const nextMonthBtn = document.querySelector('.change__next-month');
  
  function handlePreviousMonth() {
    const headerMonthUpperFirstLetter = headerMonth.textContent.charAt(0).toLocaleUpperCase() + headerMonth.textContent.slice(1).toLocaleLowerCase();
    let presentInputYear = Number(headerYear.textContent);
    let changedMonth = months.indexOf(headerMonthUpperFirstLetter) - 1;
    
    if (changedMonth < 0) {
      changedMonth = 11;
      presentInputYear -= 1;
    };
    
    headerMonth.textContent = months[changedMonth];
    headerYear.textContent = presentInputYear;
    
    const createCalendar = new CreateCalendar(presentInputYear, changedMonth);
    createCalendar.render();
    
    checkInputIsCurrent(createCalendar);
  };

  function handleNextMonth() {
    const headerMonthUpperFirstLetter = headerMonth.textContent.charAt(0).toLocaleUpperCase() + headerMonth.textContent.slice(1).toLocaleLowerCase();
    let presentInputYear = Number(headerYear.textContent);
    let changedMonth = months.indexOf(headerMonthUpperFirstLetter) + 1;
    
    if (changedMonth > 11) {
      changedMonth = 0;
      presentInputYear += 1;
    };
    
    headerMonth.textContent = months[changedMonth];
    headerYear.textContent = presentInputYear;
    
    const createCalendar = new CreateCalendar(presentInputYear, changedMonth);
    createCalendar.render();
    
    checkInputIsCurrent(createCalendar);
  };

  nextMonthBtn.addEventListener('click', handleNextMonth);
  previousMonthBtn.addEventListener('click', handlePreviousMonth);
};

function previousAndNextYear() {
  const previousYearBtn = document.querySelector('.change__previous-year');
  const nextYearBtn = document.querySelector('.change__next-year');

  function handlePreviousYear() {
    let presentInputYear = Number(headerYear.textContent) - 1;
    headerYear.textContent = presentInputYear;
    
    const monthInputPresetIndex = months.indexOf(headerMonth.textContent);
    
    const createCalendar = new CreateCalendar(presentInputYear, monthInputPresetIndex);
    createCalendar.render();
    
    checkInputIsCurrent(createCalendar);
  };

  function handleNextYear() {
    let presentInputYear = Number(headerYear.textContent) + 1;
    headerYear.textContent = presentInputYear;
    
    const monthInputPresetIndex = months.indexOf(headerMonth.textContent);
    
    const createCalendar = new CreateCalendar(presentInputYear, monthInputPresetIndex);
    createCalendar.render();
    
    checkInputIsCurrent(createCalendar);
  };
  
  previousYearBtn.addEventListener('click', handlePreviousYear);
  nextYearBtn.addEventListener('click', handleNextYear);
};

function setCalendarFromInput() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === 'Go') {
      event.preventDefault();
    
      const headerMonthUpperFirstLetter = headerMonth.textContent.charAt(0).toLocaleUpperCase() + headerMonth.textContent.slice(1).toLocaleLowerCase();
      headerMonth.textContent = headerMonthUpperFirstLetter;
      
      const createCalendar = new CreateCalendar(Number(headerYear.textContent), months.indexOf(headerMonthUpperFirstLetter));
      createCalendar.render();
      
      checkInputIsCurrent(createCalendar);
    };
  });
};