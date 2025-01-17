// References to elements
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fileInput = document.getElementById('fileInput');
const clearButton = document.getElementById('clear');
const predictButton = document.getElementById('predict');
const predictionText = document.getElementById('predictionText');

// Draw placeholder text inside the canvas
function drawPlaceholder() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'; // Low opacity
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Upload Here', canvas.width / 2, canvas.height / 2);
}

// Trigger file input on canvas click
canvas.addEventListener('click', () => {
    fileInput.click();
});

// Handle file upload
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Draw image
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});

// Handle clear button to reset canvas and placeholder
clearButton.addEventListener('click', () => {
    drawPlaceholder();
    fileInput.value = ''; // Reset file input
    predictionText.textContent = 'No prediction yet.';
});

// Send the canvas image to the server for prediction
predictButton.addEventListener('click', async () => {
    canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('file', blob, 'canvas.png');

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (response.ok) {
                predictionText.textContent = `Predicted Digit: ${result.prediction}`;
            } else {
                predictionText.textContent = `Error: ${result.error}`;
            }
        } catch (error) {
            console.error('Error sending image to server:', error);
            predictionText.textContent = 'Error during prediction. Check console for details.';
        }
    });
});

// Initialize canvas with placeholder text
drawPlaceholder();
