
// Update date and time
function updateDateTime() {
  const dateTimeElement = document.getElementById('dateTime');
  const now = new Date();
  dateTimeElement.textContent = now.toLocaleDateString() + ' | ' + now.toLocaleTimeString();
}

// Initial call and set interval
updateDateTime();
setInterval(updateDateTime, 1000);

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Search form
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  
  if (city) {
    // In a real app, this would fetch weather data from an API
    // For demo purposes, we'll just update the location
    locationElement.textContent = city;
    
    // Generate a random temperature between 50 and 90
    const randomTemp = Math.floor(Math.random() * 40) + 50;
    temperatureElement.textContent = `${randomTemp}°F`;
    
    searchInput.value = '';
  }
});