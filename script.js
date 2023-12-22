function submitForm() {
    const formData = {
      participantID: document.getElementById('patientID').value,
      name: document.getElementById('name').value,
      timestamp: document.getElementById('timestamp').value,
      age: document.getElementById('age').value,
      gender: document.getElementById('gender').value,
      // Add more fields based on the form
    };
  
    // Send the formData to the server using fetch API
    fetch('/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data.message);
      alert('Form submitted successfully');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error submitting form');
    });
  }
  