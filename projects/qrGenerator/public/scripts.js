document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const url = document.getElementById('urlInput').value;
    console.log(`Form submitted with URL: ${url}`);
  
    fetch('/generate-qr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ URL: url }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Received response: ${JSON.stringify(data)}`);
      const qrCodeContainer = document.getElementById('qrCodeContainer');
      qrCodeContainer.innerHTML = `<img src="${data.qrCodeUrl}" alt="QR Code">`;
    })
    .catch(error => console.error('Error:', error));
  });
  