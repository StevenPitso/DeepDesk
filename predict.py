

# predict.py  " filePath/txt file"

import sys 
import joblib

model = joblib.load("model/text_model.pkl")


text = sys.argv[1]
modelPrediction = model.predict([text])[0]
# we need to see the output at some point
print( modelPrediction )

