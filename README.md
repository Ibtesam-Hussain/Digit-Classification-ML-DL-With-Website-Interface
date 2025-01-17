
# Digit Classification using Deep Learning with Website Interface Integration 

MNIST Digit Classification by the help of Artificial Neural Network (ANN) is used for predicting the image of any digit from 0 to 9 whether it is any unique handwritting style. This Project have MNIST Dataset from Keras Library, having 60,000 pictures for training and 10,000 pictures for testing with a total of 70,000 pictures in their pixelated form present in the dataset.




## Math Intuition Behind the ANN

It is a bit messy but hope this will help you to understand the mathematical intuition to correctly classify the digits. 

![App Screenshot](https://github.com/user-attachments/assets/0677d7a3-64bd-4acf-a3d1-30c3dcac3deb)
## Training and Testing Results

With a batch size = 512 and after epoch = 10

| Training Accuracy             | Training Loss                                                                |
| ----------------- | ------------------------------------------------------------------ |
| 96.82% | 0.1043% |


| Testing Accuracy             | Testing Loss                                                                |
| ----------------- | ------------------------------------------------------------------ |
| 97.25% | 0.0903% |



## Website Integration

- Frontend is built using HTML, CSS, and JavaScript.  
- Backend is developed using Flask.  
- API endpoints are used to enable communication between the frontend and backend.  
- Users upload a picture of a handwritten digit on the website.  
- The image is sent to the backend for processing.  
- A trained model in `.h5` format predicts the digit.  
- The prediction is returned as a JSON string.  
- The JSON response is converted into text and displayed on the frontend.




## To run the Flask Server

To install necessary Libraries

```bash
  pip install Flask tensorflow numpy
```
Run your Flask App
```bash
  python app.py
```

Make sure to run on your port number 
```bash
  app.run(debug=True, port=YOUR_PORT_NUMBER)
```
Make sure to change your `BASE_DIR` and `trainedModel.h5` file destination
```bash
BASE_DIR = r"YOUR_BASE_DIR\ML Project"
```
```bash
model = load_model(r'C:\\Users\\MCA\\Desktop\\ML Project\\digit_classification_model.h5')
```
## Documentation

[MNIST Keras Documentation](https://keras.io/api/datasets/mnist/)

[MNIST Dataset](https://www.kaggle.com/datasets/hojjatk/mnist-dataset)

[Flask Documentation](https://flask.palletsprojects.com/en/stable/installation/)

[ANN Deep Learning Study Material](https://pypr.sourceforge.net/ann.html)
