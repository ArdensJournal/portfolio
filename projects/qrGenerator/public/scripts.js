document.addEventListener('DOMContentLoaded', function() {
    const urlForm = document.getElementById('urlForm');
    const urlInput = document.getElementById('urlInput');
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const downloadSection = document.getElementById('downloadSection');
    const downloadBtn = document.getElementById('downloadBtn');
    
    let currentQrUrl = '';

    urlForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const url = urlInput.value.trim();
        
        if (!url) {
            showError('Please enter a valid URL! 🔗');
            urlInput.focus();
            return;
        }
        
        // Validate URL format
        if (!isValidUrl(url)) {
            showError('Please enter a valid URL (e.g., https://example.com) 🚫');
            urlInput.focus();
            return;
        }
        
        console.log(`Form submitted with URL: ${url}`);
        generateQrCode(url);
    });

    function generateQrCode(url) {
        // Show loading state
        showLoading();
        
        fetch('/generate-qr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ URL: url }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(`Received response: ${JSON.stringify(data)}`);
            showQrCode(data.qrCodeUrl, url);
        })
        .catch(error => {
            console.error('Error:', error);
            showError('Failed to generate QR code. Please try again! ⚠️');
        });
    }

    function showLoading() {
        qrCodeContainer.innerHTML = `
            <div class="loading">
                <div class="qr-placeholder">⏳</div>
                <p>Generating your QR code...</p>
            </div>
        `;
        downloadSection.style.display = 'none';
    }

    function showQrCode(qrCodeUrl, originalUrl) {
        currentQrUrl = qrCodeUrl;
        
        qrCodeContainer.innerHTML = `
            <div class="qr-result">
                <img id="qrCodeImg" src="${qrCodeUrl}" alt="QR Code for ${originalUrl}">
                <p class="qr-info">
                    <strong>QR Code generated for:</strong><br>
                    <span class="url-display">${originalUrl}</span>
                </p>
            </div>
        `;
        
        downloadSection.style.display = 'block';
        
        // Add success animation
        const qrImg = document.getElementById('qrCodeImg');
        qrImg.addEventListener('load', function() {
            this.style.animation = 'fadeInScale 0.5s ease-out';
        });
    }

    function showError(message) {
        qrCodeContainer.innerHTML = `
            <div class="error">
                <div class="qr-placeholder" style="color: #f44336;">❌</div>
                <p style="color: #f44336;">${message}</p>
            </div>
        `;
        downloadSection.style.display = 'none';
    }

    function isValidUrl(string) {
        try {
            // Add protocol if missing
            const urlWithProtocol = string.includes('://') ? string : 'https://' + string;
            new URL(urlWithProtocol);
            return true;
        } catch (_) {
            return false;
        }
    }

    // Download functionality
    downloadBtn.addEventListener('click', function() {
        if (currentQrUrl) {
            const link = document.createElement('a');
            link.href = currentQrUrl;
            link.download = `qr-code-${Date.now()}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = 'Downloaded! ✅';
            this.style.backgroundColor = '#4CAF50';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 2000);
        }
    });

    // Enter key support
    urlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            urlForm.dispatchEvent(new Event('submit'));
        }
    });

    // Auto-focus on input
    urlInput.focus();

    // Clear error when user starts typing
    urlInput.addEventListener('input', function() {
        if (qrCodeContainer.innerHTML.includes('error')) {
            qrCodeContainer.innerHTML = `
                <div class="placeholder">
                    <div class="qr-placeholder">📱</div>
                    <p>Your QR code will appear here</p>
                </div>
            `;
        }
    });

    // Add URL format helper
    urlInput.addEventListener('blur', function() {
        let value = this.value.trim();
        if (value && !value.includes('://')) {
            this.value = 'https://' + value;
        }
    });
});

// Add additional CSS for new elements
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .loading {
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    .qr-result {
        text-align: center;
    }
    
    .qr-info {
        margin-top: 1rem;
        padding: 1rem;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 1rem;
        border: 1px solid #ddd;
    }
    
    .url-display {
        word-break: break-all;
        color: #0066cc;
        font-family: monospace;
        font-size: 0.9rem;
    }
    
    .error {
        color: #f44336;
    }
`;
document.head.appendChild(additionalStyles);
  