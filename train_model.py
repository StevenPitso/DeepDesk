import os
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
import json


def loadData(basePath):
    text, labels = [] ,[]
    for label in os.listdir(basePath):
        folder = os.path.join(basePath,label)
        for file in os.listdir(folder):
            with open(os.path.join(folder,file), 'r', encoding='utf-8', errors='ignore' ) as f:
                text.append(f.read())
                labels.append(label)
    return text, labels


X, y = loadData("data")

# Creating  our model now 

model = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english')),
    ('clf', MultinomialNB())
])

model.fit(X, y)

#For in case ../model doesn't exit 

os.makedirs("model", exist_ok=True)
joblib.dump(model, "model/text_model.pkl")

#Save labels

with open("model/labels.json", "w") as f:
    json.dump(list(set(y)),f)

print(" \u279C  Model trained and saved \U0001F680 .")
