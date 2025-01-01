export function searchMonthList() {
  const months = [
    "january", "february", "march", "april", 
    "may", "june", "july", "august", 
    "september", "october", "november", "december"
  ];

  const headerSearch = document.querySelector('.change__month');
  let headerSearchSuggestion = document.createElement('span');
  headerSearchSuggestion.classList.add('change__month--suggestion');

  function disableSpaceKey(event) {
    if (event.key === ' ') event.preventDefault();
  };

  function updateSearchSuggestions() {
    headerSearchSuggestion.remove()
    
    const searchValue = Array.from(headerSearch.childNodes)
    .filter(node => node.nodeType === Node.TEXT_NODE)
    .map(node => node.textContent.trim())
    .join('');

    if (searchValue) {
      const suggestionArrayElement = months.filter((month) => month.startsWith(searchValue.toLocaleLowerCase()));
      let suggestion; 
      
      if (suggestionArrayElement[0]) {
        suggestion = suggestionArrayElement[0].slice(searchValue.length);
        
        headerSearchSuggestion = document.createElement('span');
        headerSearchSuggestion.classList.add('change__month--suggestion');
        headerSearchSuggestion.textContent = suggestion;
        headerSearch.append(headerSearchSuggestion);
      };
    };
  };
};