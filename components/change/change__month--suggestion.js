export function searchMonthList() {
  const months = [
    "january", "february", "march", "april", 
    "may", "june", "july", "august", 
    "september", "october", "november", "december"
  ];

  const headerSearch = document.querySelector('.change__month');
  let headerSearchSuggestion = document.createElement('span');
  headerSearchSuggestion.classList.add('change__month--suggestion');

  let firstSuggWord;

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
        firstSuggWord = suggestionArrayElement[0];
        suggestion = suggestionArrayElement[0].slice(searchValue.length);
        
        headerSearchSuggestion = document.createElement('span');
        headerSearchSuggestion.classList.add('change__month--suggestion');
        headerSearchSuggestion.textContent = suggestion;
        headerSearch.append(headerSearchSuggestion);
      };
    };
  };

  function applySuggestion(event) {
    if (headerSearchSuggestion && headerSearchSuggestion.textContent !== '') {
      if (event.key === 'Tab' || event.key === ' ' || event.key === 'ArrowRight') {
        event.preventDefault();
        event.target.blur();

        headerSearchSuggestion.remove();
        headerSearch.textContent = `${firstSuggWord[0].toUpperCase()}${firstSuggWord.slice(1)}`;
      };
    };
  };
  
  headerSearch.addEventListener('input', updateSearchSuggestions);
  headerSearch.addEventListener('keydown', applySuggestion);
};