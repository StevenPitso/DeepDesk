Here's your beautifully formatted `README.md` file, fully cleaned up, consistent in style, and ready for GitHub or any markdown viewer:

---

```markdown
# 🧠 DeepDesk AI

**DeepDesk AI** is a desktop tool that automatically organizes `.txt` files into folders based on their **content** using a lightweight AI-powered classifier.  
It's my **first deep learning project**, and it brings a touch of automation magic to messy file systems!

---

## 🚀 Features

- 🔍 Scans a folder for `.txt` files
- 🧠 Predicts the category of each file using a trained model
- 📁 Automatically creates and sorts files into folders
- ⚙️ Lightweight CLI-based workflow using **Python + JavaScript**

---

## 🛠 Tech Stack

- **Python** – For training and prediction
- **Scikit-learn** – Naive Bayes text classifier
- **Joblib** – Model serialization
- **Node.js** – File handling and integration with the Python predictor

---

## 🧪 How It Works

1. Add training data inside the `data/` folder.  
   Each subfolder name becomes a category (e.g., `Finance/`, `School/`, `Health/`), and should contain relevant `.txt` files.

2. Run the training script:

   ```bash
   python train_model.py
   ```

---

## 🧪 Testing

3. Drop random `.txt` files into `testDir\`.

4. Sort them with:

   ```bash
   node sorter.js
   ```

5. Files are automatically sorted into folders like `Finance/`, `School/`, `UJ/`, etc., based on their content.

---

## 📂 Folder Structure

```plaintext
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
```

---

## 🧰 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/smart-sort-ai.git
cd smart-sort-ai
```

### 2. Set Up Python Environment

```bash
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
```

> If `requirements.txt` doesn’t exist yet, install these manually:
> ```bash
> pip install scikit-learn joblib
> ```

### 3. Train the Model

```bash
python train_model.py
```

### 4. Sort Files

```bash
node sorter.js
```

---

## 📚 Learning Goals

- ✅ Train a basic text classification model  
- ✅ Use AI to automate desktop tasks  
- ✅ Connect Python and JavaScript using `child_process`  
- ✅ Handle files dynamically and sort them with logic  

---

## 🌟 Future Improvements

- 🖼 Support for image classification  
- 🧠 Upgrade to deep learning models (e.g., BERT)  
- 🖥 Desktop GUI with Electron  
- ⏪ File undo/rollback feature  

---

## 📜 License

MIT License – Free for personal and commercial use.

---

## 🤝 Acknowledgments

Huge shoutout to open-source tools like [Scikit-learn](https://scikit-learn.org/) and [Node.js](https://nodejs.org/)  
for making this kind of project so accessible to beginners like me.
```

---

Let me know if you want to include badges, GitHub actions, or turn this into a documentation site later!