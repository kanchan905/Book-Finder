# 📘 Book Finder

A simple React web application that allows users to search for books by title using the **Open Library API**. Built with **React** and **TailwindCSS**, this app demonstrates clean UI design, modular architecture, and responsive layout.

---

## 🚀 Features

* 🔍 Search books by title using Open Library API
* 🖼️ Displays book cover, title, author, and year
* ⚠️ Handles empty and error states gracefully
* ⏳ Loading indicator while fetching data
* 📱 Responsive design for mobile and desktop
* 🧩 Modular React component structure

---

## 🧱 Folder Structure

```
src/
├── App.jsx                # Main entry
├── components/
│   ├── SearchBar.jsx      # Handles input + search button
│   ├── BookGrid.jsx       # Displays all BookCards
│   ├── BookCard.jsx       # Each book tile
│   ├── Loader.jsx         # Loading spinner
│   └── ErrorMessage.jsx   # Error + empty state display
├── index.css          # Tailwind setup
└── utils/
    └── fetchBooks.js      # Fetching logic
```

---

## 🧩 Tech Stack

* **Frontend:** React 18+
* **Styling:** TailwindCSS
* **Data Source:** [Open Library API](https://openlibrary.org/developers/api)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-finder.git
cd book-finder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` (if using Vite) or your terminal-provided URL.

### 4. Build for Production

```bash
npm run build
```

---

## 🌐 Deploy Online

You can easily deploy this app using any of these free platforms:

* **CodeSandbox:** Upload your project folder or import from GitHub
* **StackBlitz:** Paste your repo URL or drag & drop the files
* **Vercel / Netlify:** Deploy directly with one click from your GitHub repo

---

## 🧠 API Reference

**Endpoint:**

```
https://openlibrary.org/search.json?title={bookTitle}
```

**Example:**

```
https://openlibrary.org/search.json?title=harry+potter
```

Returns a JSON response containing an array of book objects with fields like:

* `title`
* `author_name`
* `first_publish_year`
* `cover_i`

---

## 🪄 Future Improvements

* Add dark mode toggle 🌙
* Allow saving favorites (local storage)
* Add book details modal with description
* Search filters (year, author, etc.)

---

## 👨‍💻 Author

Developed by **Kanchan** for the UI Take-Home Challenge.



---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
