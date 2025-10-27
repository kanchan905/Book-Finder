import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookGrid from './components/BookGrid';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import fetchBooks from './utils/fetchBooks';


export default function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError('');
    setBooks([]);
    try {
      const results = await fetchBooks(query);
      if (results.length === 0) setError('No books found. Try another title.');
      setBooks(results);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <header className="w-full max-w-3xl text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">📘 Book Finder</h1>
        <p className="text-gray-600">Find books by title using the Open Library API</p>
      </header>

      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      <BookGrid books={books} />

      <footer className="mt-10 text-gray-500 text-sm">
        © 2025 Book Finder — Powered by Open Library
      </footer>
    </div>
  );
}
