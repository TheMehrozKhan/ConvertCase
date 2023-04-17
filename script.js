function toCapitalizedCase(text) {
    return text.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

  document.getElementById('capitalized-case-button').addEventListener('click', function() {
    // Get the text from the textarea
    var text = document.getElementById('text-input').value;
  
    // Transform the text to Capitalized case
    var transformedText = toCapitalizedCase(text);
  
    // Update the textarea with the transformed text
    document.getElementById('text-input').value = transformedText;
  });
 
  function toUpperCase(text) {
    return text.toUpperCase();
  }

  document.getElementById('upper-case-button').addEventListener('click', function() {
    // Get the text from the textarea
    var text = document.getElementById('text-input').value;
  
    // Transform the text to UPPER CASE
    var transformedText = toUpperCase(text);
  
    // Update the textarea with the transformed text
    document.getElementById('text-input').value = transformedText;
  });

  function toAlternatingCase(text) {
    return text.split('').map(function(char, index) {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  }
      
  document.getElementById('alternating-case-button').addEventListener('click', function() {
    // Get the text from the textarea
    var text = document.getElementById('text-input').value;
  
    // Transform the text to aLtErNaTiNg cAsE
    var transformedText = toAlternatingCase(text);
  
    // Update the textarea with the transformed text
    document.getElementById('text-input').value = transformedText;
  });

  function toLowerCase(text) {
    return text.toLowerCase();
  }

  document.getElementById('lower-case-button').addEventListener('click', function() {
    // Get the text from the textarea
    var text = document.getElementById('text-input').value;
  
    // Transform the text to UPPER CASE
    var transformedText = toLowerCase(text);
  
    // Update the textarea with the transformed text
    document.getElementById('text-input').value = transformedText;
  });