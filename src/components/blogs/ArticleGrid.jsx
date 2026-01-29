import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import ArticleModal from "./ArticleModal";

const ArticleGrid = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.blogs))
      .catch((err) => console.error(err));
  }, []);

  const categories = [
    ...new Set(articles.map((blog) => blog.category || "Tech")),
  ];

  const filteredArticles = articles.filter((blog) => {
    const matchesSearch = `${blog.title} ${blog.description} ${blog.content_text}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || blog.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>

      <SearchBar
        value={search}
        onChange={setSearch}
        count={filteredArticles.length}
      />

      <CategoryFilter
        categories={categories}
        activeCategory={category}
        onChange={setCategory}
      />

      {filteredArticles.length === 0 && (
        <p className="text-gray-500 mt-10 text-center">
          No articles found 😕
        </p>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedArticle(blog)}
            className="cursor-pointer"
          >
            <PostCard
              title={blog.title}
              description={blog.description}
              image={blog.photo_url}
              tag={blog.category || "Tech"}
              author={blog.author || "Admin"}
              date={blog.created_at}
              readTime={5}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
};

export default ArticleGrid;
