const express = require('express');
const bodyParser = require('body-parser');
const qr = require('qr-image');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/generate-qr', (req, res) => {
  const url = req.body.URL;
  console.log(`Received URL: ${url}`);
  const qr_svg = qr.imageSync(url, { type: 'png' });
  const qrCodePath = path.join(__dirname, 'public', 'qr_img.png');
  
  fs.writeFileSync(qrCodePath, qr_svg);
  console.log(`QR code saved at: ${qrCodePath}`);

  res.json({ qrCodeUrl: 'qr_img.png' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
