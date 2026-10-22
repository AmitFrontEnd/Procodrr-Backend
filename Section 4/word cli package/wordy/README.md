Markdown
# 📝 Wordy CLI

A blazing-fast, simple, and powerful Command Line Interface (CLI) tool to count words in any text file. Built with Node.js.

## ✨ Features

- 📊 **Full File Analysis:** Get the frequency of every single word in a text file instantly.
- 🔍 **Specific Word Search:** Search for a particular word to get its exact count.
- 🧠 **Smart Case Handling:** Intelligently handles lowercase, uppercase, and sentence case variants to give you accurate results.
- 🚀 **Zero Dependencies:** Pure Node.js. Lightweight and extremely fast.

## 📦 Installation

You can run it directly without installing using `npx`:

```bash
npx wordy-cli-amit notes.txt
Or install it globally to use the wordy command anywhere on your system:

Bash
npm install -g wordy-cli-amit
🚀 Usage
Make sure you are in the same directory as your text file, then run:

1. Count all words in a file
If you want to see the frequency of all words inside a file, simply provide the filename:

Bash
wordy notes.txt
Output: Returns a complete JSON object with all words and their respective counts.

2. Find the count of a specific word
Pass the word as the second argument to get its exact occurrence count:

Bash
wordy notes.txt hello
Output: 4 (Returns 0 if the word is not found).

🛠️ Requirements
Node.js (v14 or higher)

👨‍💻 Author
Built with ❤️ by Amit Kumar

📄 License
This project is licensed under the MIT License.
