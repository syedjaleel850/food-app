// Handle form submission
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
  
    // Display confirmation message
    alert(`Thank you, ${name}! Your booking for ${guests} guests on ${date} at ${time} has been confirmed.`);
  
    // Reset form
    document.getElementById('bookingForm').reset();
  });