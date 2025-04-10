# DeepDesk

# 🧠DeepDesk AI

**DeepDesk AI** is a desktop tool that automatically organizes `.txt` files into folders based on their **content** using a lightweight AI-powered classifier. It's my first deep learning project, and it brings a touch of automation magic to messy file systems!

---

## 🚀 Features

- 🔍 Scans a folder for `.txt` files
- 🧠 Predicts the category of each file using a trained model
- 📁 Automatically creates and sorts files into folders
- ⚙️ Lightweight CLI-based workflow using Python + JavaScript

---

## 🛠 Tech Stack

- **Python** – For training and prediction
- **Scikit-learn** – Naive Bayes text classifier
- **Joblib** – Model serialization
- **Node.js** – File handling and integration with the Python predictor

---

## 🧪 How It Works

1. Add training data inside the `data/` folder. Each subfolder name is a category (e.g., `Finance/`, `School/`, `Health/`), and should contain relevant `.txt` files.
2. Run the training script:
   ```bash
   python train_model.py

## 🧪 Testing 

3. Drop random `.txt` files into `testDir\`

4.  Sort them with:
  ```bash
  node ai_sorter.js
 ```
5. Files are Sorted into Folders liike `Finance/`, `School/` , `UJ/` etc, based on prediction content.
---

### 📂 Folder Structure 
  
    DEEPDESK/
    ├── data/                 # Training data (organized by category)
    │   ├── Finance/
    │   ├── Health/
    │   └── School/
    ├── model/                # Saved ML model and label metadata
    │   ├── text_model.pkl
    │   └── labels.json
    ├── testDir/              # Unsorted .txt files for prediction
    ├── train_model.py        # Trains and saves the model
    ├── predict.py            # Loads model and predicts text categories
    ├── sorter.js             # Node.js script to sort files by prediction
    ├── README.md             # You're reading it! 

### Setup Instructions

#### 1.Clone the reposity
 ```bash
  git clone https://github.com/StevenPitso/DeepDesk.git
  cd DeepDesk
 ```
#### 2.Set up Python enviroment (a)
- Download and install Python from the [official Python website](https://www.python.org/downloads/).
- Verify installation by running:


  ```bash
    python -m venv venv
    .\venv\Scripts\activate  # On Windows
    pip install -r requirements.txt
```
### 2.Set up Node.js enviroment (b)

- Go to the [Node.js download page](https://nodejs.org/) and install the latest stable version.
- After installing, verify the installation by running:
  ```bash
  node -v  // validate
#### 3.Train the Model
  ``` bash
     python train_model.py
```
#### 4.Sort the files
  ```bash
    node ai_sorter.js
```
---


### 📚 Learning Goals

- ✅ Train a basic text classification model

- ✅ Use AI to automate desktop tasks

- ✅  Format and Write a README.md file.

- ✅ Connect Python and JavaScript using child_process

- ✅ Handle files dynamically and sort them with logic

---
### Future Improvements

- 🖼 Support for image classification

- 🖥 Desktop GUI with Electron

- ⏪ File undo/rollback feature

---

### License
**MIT License** – Free for personal and commercial use.
---
### Acknowlegdments

Huge shoutout to open-source tools like **Scikit-learn** ((https://scikit-learn.org/)) and **Node.js** (https://nodejs.org/) for making this kind of project so accessible to beginners like me.

#### tools used:

- Chatgpt & deepseek (learning and research)
- Nodepad++ (basic scripting and planning)
- VsCode (development and deployment to github)


