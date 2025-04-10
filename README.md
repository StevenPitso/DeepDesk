# DeepDesk
 DeepLearning File sorter 
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
