import { Helmet } from "react-helmet-async";

// title: article.title,
//           content_html: article.content_html,
//           photo_url: article.photo_url,
//           created_at: article.created_at,
//           updated_at: article.updated_at,

const ArticleSchema = ({ article }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.content_html,
    "image": article.photo_url,
    "publisher": {
      "@type": "Organization",
      "name": "Tech Blog",
    },
    "datePublished": article.created_at,
    "dateModified": article.updated_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default ArticleSchema;
