export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  return (
    <div className="search-bar text-center my-4">
      <input
        type="text"
        placeholder="🔍 Buscar publicación..."
        onChange={(e) => onSearch(e.target.value)}
        className="form-control shadow-sm rounded-pill w-50 px-4 py-2"
      />
    </div>
  );
}
