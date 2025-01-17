from flask import Flask, render_template, send_from_directory, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import os


BASE_DIR = r"C:\Users\MCA\Desktop\ML Project"

app = Flask(__name__, static_folder=BASE_DIR, template_folder=BASE_DIR)

# Load the trained model
model = load_model(r'C:\\Users\\MCA\\Desktop\\ML Project\\digit_classification_model.h5')

# Route to serve the homepage
@app.route('/')
def homepage():
    return render_template('frontend.html')

# Serve static files (CSS, JS)
@app.route('/<path:filename>')
def serve_static_files(filename):
    return send_from_directory(BASE_DIR, filename)

# Route to handle image upload and prediction
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        # Load the image
        img = Image.open(file).convert('L')  # Convert to grayscale
        img = img.resize((28, 28))  # Ensure it's 28x28 pixels
        img_array = np.array(img).reshape(1, 784, 1) / 255.0  # Normalize and reshape

        # Make a prediction
        prediction = model.predict(img_array).argmax(axis=1)[0]  # Get the predicted digit

        # Send the prediction back to the frontend
        return jsonify({'prediction': int(prediction)})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5500)
