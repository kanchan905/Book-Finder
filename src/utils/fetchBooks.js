export default async function fetchBooks(title) {
  const response = await fetch(
    `https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`
  );
  const data = await response.json();
  return data.docs ? data.docs.slice(0, 20) : [];
}
