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
  
  emptyCellsInTheBeginning() {
    const mainCalendar = document.querySelector('.calendar');
    const firstDay = new Date(this.year, this.month, 1).getDay();
    const correctedMonday = this.getMondayFirst(firstDay);

    if (correctedMonday !== 0) {
      let divWithEmptyCells = '';
      
      for (var i = 1; i <= correctedMonday; i++) {
        divWithEmptyCells += `<div class="calendar__empty-cell"></div>`
      };
      
      mainCalendar.insertAdjacentHTML('beforeend', divWithEmptyCells);
    };
  };
  
  emptyCellsInTheEnd() {
    const mainCalendar = document.querySelector('.calendar');
    const lastDay = new Date(this.year, this.month + 1, 0).getDay();
    const correctedMonday = this.getMondayFirst(lastDay);
    
    if (correctedMonday !== 6) {
      let divWithEmptyCells = '';
      
      for (let i = 6 - correctedMonday; i > 0; i--) {
        divWithEmptyCells += `<div class="calendar__empty-cell"></div>`;
      };

      mainCalendar.insertAdjacentHTML("beforeend", divWithEmptyCells);
    };
  };
};