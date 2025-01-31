export class CreateCalendar {
  
  constructor(year, month) {
    this.year = year;
    this.month = month;
  };
  
  getMondayFirst(date) {
    let weekDay = date;
    
    if (weekDay === 0) {
      weekDay = 7
    };
    
    return weekDay - 1;
  };
  
  renderPreviousMonthDays() {
    const mainCalendar = document.querySelector('.calendar');
    const firstDay = new Date(this.year, this.month, 1).getDay();
    const previousMonth = new Date(this.year,  this.month, 0).getDate();
    const correctedMonday = this.getMondayFirst(firstDay);

    if (correctedMonday !== 0) {
      let divWithEmptyCells = '';
      
      for (let i = correctedMonday; i > 0; i--) {
        divWithEmptyCells += `
            <div class="calendar__day calendar__day--inactive">
              ${previousMonth + 1 - i}
            </div>
          `;
      };

      mainCalendar.insertAdjacentHTML('beforeend', divWithEmptyCells);
    };
  };
  
  renderNextMonthDays() {
    const mainCalendar = document.querySelector('.calendar');
    let calendarDays = document.querySelectorAll('.calendar__day');

    for (let i = 1; calendarDays.length < 49; i++) {
      let divWithEmptyCells = `
          <div class="calendar__day calendar__day--inactive">
            ${i}
          </div>
        `;
      mainCalendar.insertAdjacentHTML("beforeend", divWithEmptyCells);
      
      calendarDays = document.getElementsByClassName('calendar__day');
    };
  };

  render() {
    const mainCalendar = document.querySelector('.calendar');
    mainCalendar.innerHTML = `
        <div class="calendar__day calendar__day--inactive week">Mon</div>
        <div class="calendar__day calendar__day--inactive week">Tue</div>
        <div class="calendar__day calendar__day--inactive week">Wed</div>
        <div class="calendar__day calendar__day--inactive week">Thu</div>
        <div class="calendar__day calendar__day--inactive week">Fri</div>
        <div class="calendar__day calendar__day--inactive week">Sat</div>
        <div class="calendar__day calendar__day--inactive week">Sun</div>
      `;

    this.renderPreviousMonthDays();
    
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
    
    let divWithDates = '';
    for (let day = 1; day <= daysInMonth; day++) {
      divWithDates += `
        <div class="calendar__day" data-current-day="${this.year}-${this.month}-${day}">
          ${day}
        </div>
      `;
    };
    
    mainCalendar.insertAdjacentHTML("beforeend", divWithDates);
    
    this.renderNextMonthDays();
  };
  
  checkElementClassForCurrentDay(currentYear, currentMonth, currentDate) {
    const daysList = document.querySelectorAll('[data-current-day]');
  
    daysList.forEach((element) => {
      let currentDateAttribute = element.getAttribute('data-current-day');
      
      if (currentDateAttribute === `${currentYear}-${currentMonth}-${currentDate}`) {
        element.classList.add('calendar__day--current');
      } else {
        element.classList.remove('calendar__day--current');
      };
    });
  };

  updateCalendar(months) {
    const headerMonth = document.querySelector('.change__month');
    const headerYear = document.querySelector('.change__year');
    const now = new Date();
    const hoursZero = now.getHours();
    const minutesZero = now.getMinutes();
    const secondsZero = now.getSeconds();
    
    if (hoursZero === 0 && minutesZero === 0 && secondsZero === 0 && 
        Number(headerYear.textContent) === now.getFullYear() && 
        headerMonth.textContent === months[now.getMonth()]) {
      
        this.currentCalendar();
    };
    
    const nextSecond = new Date(now.getTime() + 1000 - now.getMilliseconds());
    const timeToNextSecond = nextSecond.getTime() - now.getTime();

    setTimeout(() => this.updateCalendar(months), timeToNextSecond);
  };
  
  currentCalendar() {
    const months = [
      "January", "February", "March", "April", 
      "May", "June", "July", "August", 
      "September", "October", "November", "December"
    ];
  
    const headerMonth = document.querySelector('.change__month');
    const headerYear = document.querySelector('.change__year');

    const now = new Date();
    let currentDate = now.getDate();
    let currentMonth = now.getMonth();
    let currentYear = now.getFullYear();
    headerMonth.textContent = months[currentMonth];
    headerYear.textContent = currentYear;

    const createCalendar = new CreateCalendar(currentYear, currentMonth);
    createCalendar.render();
    createCalendar.checkElementClassForCurrentDay(currentYear, currentMonth, currentDate);
  
    this.updateCalendar(months);
  };
};