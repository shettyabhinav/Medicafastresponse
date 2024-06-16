const suggestions = [
    
    "St. John's Health Centre",
    "Lifeline Hospital - doctors nursing ultrasound home care x-ray blood test ecg echo diagnostics",
    "Sri Sri Ayurveda Hospital - NABH accredited Multi Specialty Ayurveda Hospital in Bengaluru",
    "M1",
    "M2",
    "m3"
  ];
  
  document.getElementById('search-input').addEventListener('input', function() {
    const input = this.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = 'none';
  
    if (input) {
      const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(input));
  
      if (filteredSuggestions.length) {
        filteredSuggestions.forEach(suggestion => {
          const suggestionItem = document.createElement('div');
          suggestionItem.textContent = suggestion;
          suggestionItem.classList.add('suggestion-item');
          suggestionItem.addEventListener('click', function() {
            document.getElementById('search-input').value = suggestion;
            suggestionsContainer.innerHTML = '';
            suggestionsContainer.style.display = 'none';
          });
          suggestionsContainer.appendChild(suggestionItem);
        });
  
        suggestionsContainer.style.display = 'block';
      }
    }
  });
  