export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
    return (
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar publicación..."
          onChange={(e) => onSearch(e.target.value)}
          className="form-control shadow-sm rounded-pill"
        />
      </div>
    );
  }
  