import React from 'react';

export default function BookCard({ book }) {
  // ✅ Use fallback cover if cover_i is missing
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div className="bg-white shadow-md rounded-xl p-3 hover:scale-105 transition-transform duration-200">
      <img
        src={coverUrl}
        alt={book.title}
        className="rounded-lg w-full h-48 object-cover mb-3"
      />
      <h3 className="font-semibold text-lg mb-1 text-gray-800 truncate">
        {book.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {book.author_name ? book.author_name.join(', ') : 'Unknown Author'}
      </p>
      <p className="text-gray-500 text-xs mt-1">
        Year: {book.first_publish_year || 'N/A'}
      </p>
    </div>
  );
}
