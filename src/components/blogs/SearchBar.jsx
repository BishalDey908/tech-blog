const SearchBar = ({ value, onChange, count }) => {
  return (
    <div className="mb-6">
      <div className="relative w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search articles..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <p className="mt-2 text-sm text-gray-500">
        {count} result{count !== 1 && "s"} found
      </p>
    </div>
  );
};

export default SearchBar;
