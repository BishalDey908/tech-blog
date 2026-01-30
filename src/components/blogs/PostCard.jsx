const PostCard = ({
  title,
  description,
  image,
  tag,
  author,
  date,
  readTime,
}) => {
  return (
    <article
      className="group relative bg-white rounded-2xl border border-gray-200 
                 overflow-hidden transition-all duration-300
                 hover:-translate-y-1 hover:shadow-xl
                 flex flex-col h-full"
    >
      {/* Image (fixed height) */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 
                     group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t 
                        from-black/50 via-black/10 to-transparent 
                        opacity-0 group-hover:opacity-100 transition"
        />

        {/* Tag */}
        <span
          className="absolute top-4 left-4 px-3 py-1 text-xs font-medium 
                     bg-blue-600 text-white rounded-full shadow-md
                     group-hover:scale-105 transition"
        >
          {tag}
        </span>
      </div>

      {/* Content (flex-grow) */}
      <main className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-semibold text-gray-900 
                     group-hover:text-blue-600 transition line-clamp-2"
        >
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 line-clamp-3">{description}</p>

        {/* Push meta to bottom */}
        <div className="mt-auto">
          <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
            <div>
              <span className="font-medium text-gray-700">{author}</span>
              <span className="mx-2">•</span>
              <span>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <time>{readTime} min read</time>
          </div>

          {/* Read More */}
          <div
            className="mt-4 inline-flex items-center text-sm font-medium 
                       text-blue-600 opacity-0 group-hover:opacity-100 
                       transition"
          >
            Read article →
          </div>
        </div>
      </main>

      {/* Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl 
                   ring-1 ring-transparent group-hover:ring-blue-500/20 transition"
      />
    </article>
  );
};

export default PostCard;
