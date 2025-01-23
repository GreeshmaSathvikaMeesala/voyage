document.getElementById("tripForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const weather = document.getElementById("weather").value;
    let tips = '';

    if (weather === 'hot') {
        tips = "Stay hydrated, pack sunscreen, and take rehydration salts to avoid dehydration.";
    } else if (weather === 'cold') {
        tips = "Carry warm clothing, pack hand warmers, and take cold medication like cough syrups or decongestants.";
    } else if (weather === 'humid') {
        tips = "Use mosquito repellent, pack breathable clothes, and take antihistamines for any allergies.";
    } else if (weather === 'rainy') {
        tips = "Carry a waterproof jacket, pack anti-slip shoes, and take a first aid kit with antiseptic creams.";
    }

    document.getElementById("tips").innerHTML = `<p>${tips}</p>`;
});

// Search Bar Logic
function filterTrips() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const tripList = document.getElementById("tripList");
    const li = tripList.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        const txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const destinationSuggestions = document.querySelector('.destination-suggestions');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const suggestionsList = destinationSuggestions.querySelector('ul');
  suggestionsList.innerHTML = '';

  if (searchTerm.length > 0) {
    const suggestions = ['Paris, France', 'Rome, Italy', 'New York, USA', 'Tokyo, Japan', 'Zurich, Switzerland'].filter(suggestion => suggestion.toLowerCase().includes(searchTerm));

    suggestions.forEach(suggestion => {
      const listItem = document.createElement('li');
      listItem.textContent = suggestion;
      suggestionsList.appendChild(listItem);
    });

    destinationSuggestions.style.display = 'block';
  } else {
    destinationSuggestions.style.display = 'none';
  }
});

searchButton.addEventListener('click', () => {
  // Handle the search query here (e.g., perform a search on your website)
  console.log('Search query:', searchInput.value);
});
        function displayMedicationTips() {
            // Prevent the form from submitting
            event.preventDefault();

            // Get the selected weather value
            var weather = document.getElementById('weather').value;

            // Get the tips div
            var tipsDiv = document.getElementById('tips');

            // Update the tips based on the selected weather
            if (weather === 'hot') {
                tipsDiv.innerHTML = `
                    <h3>Hot Weather Tips:</h3>
                    <ul>
                        <li>Stay hydrated: Drink plenty of water.</li>
                        <li>Use sunscreen to protect against sunburn.</li>
                        <li>Wear light, breathable clothing.</li>
                        <li>Carry electrolyte tablets or drinks.</li>
                        <li>Bring a hat and sunglasses to protect against the sun.</li>
                    </ul>
                `;
            } else if (weather === 'cold') {
                tipsDiv.innerHTML = `
                    <h3>Cold Weather Tips:</h3>
                    <ul>
                        <li>Carry cold-weather medication such as ibuprofen for muscle pain.</li>
                        <li>Keep hand warmers and layered clothing for warmth.</li>
                        <li>Apply moisturizer to avoid dry skin in cold weather.</li>
                        <li>Carry cough drops in case of a sore throat.</li>
                        <li>Pack vitamins to boost immunity.</li>
                    </ul>
                `;
            } else if (weather === 'humid') {
                tipsDiv.innerHTML = `
                    <h3>Humid Weather Tips:</h3>
                    <ul>
                        <li>Carry anti-fungal creams to prevent rashes.</li>
                        <li>Use talcum powder to stay dry and prevent chafing.</li>
                        <li>Pack mosquito repellents and anti-itch creams.</li>
                        <li>Wear loose-fitting clothes to prevent sweat buildup.</li>
                        <li>Bring electrolyte solutions to maintain hydration.</li>
                    </ul>
                `;
            } else if (weather === 'rainy') {
                tipsDiv.innerHTML = `
                    <h3>Rainy Weather Tips:</h3>
                    <ul>
                        <li>Bring waterproof clothing and shoes to stay dry.</li>
                        <li>Carry antihistamines for any allergies triggered by rain.</li>
                        <li>Pack a first aid kit in case of slippery accidents.</li>
                        <li>Carry insect repellents as bugs tend to increase during rains.</li>
                        <li>Bring medications for colds and flu as wet weather increases the risk.</li>
                    </ul>
                `;
            } else {
                tipsDiv.innerHTML = 'Please select a weather condition for tips.';
            }
        }
    
