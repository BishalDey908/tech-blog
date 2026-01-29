import { useEffect } from "react";
import ArticleSchema from "../seo/ArticleSchema";

const ArticleModal = ({ article, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!article) return null;

  return (
    <>
      {/* SEO Schema */}
      <ArticleSchema
        article={{
          title: article.title,
          content_html: article.content_html,
          photo_url: article.photo_url,
          created_at: article.created_at,
          updated_at: article.updated_at,
        }}
      />

      <article
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm px-4"
      >
        {/* Modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto
                   bg-white rounded-2xl shadow-2xl
                   animate-in fade-in zoom-in duration-300"
        >
          {/* Hero Image */}
          <div className="relative h-64">
            <img
              src={article.photo_url}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 text-white
                       w-9 h-9 rounded-full flex items-center justify-center
                       hover:bg-black/70 transition"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-3xl font-bold leading-tight">
                {article.title}
              </h2>
              <p className="text-sm text-gray-200 mt-2">
                {article.author || "Admin"} • {article.created_at}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {article.content_text}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ArticleModal;
