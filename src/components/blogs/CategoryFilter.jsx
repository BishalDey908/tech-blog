const CategoryFilter = ({ categories, activeCategory, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={() => onChange("All")}
        className={`px-4 py-1.5 rounded-full text-sm border transition
          ${
            activeCategory === "All"
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-600 hover:bg-gray-100"
          }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-1.5 rounded-full text-sm border transition
            ${
              activeCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-100"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
