export function searchMonthList() {
  const months = [
    "january", "february", "march", "april", 
    "may", "june", "july", "august", 
    "september", "october", "november", "december"
  ];

  const headerSearch = document.querySelector('.change__month');
  let headerSearchSuggestion = document.createElement('span');
  headerSearchSuggestion.classList.add('change__month--suggestion');
};