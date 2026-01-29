import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "Tech Blog – Modern Web Development Insights",
  description = "Learn React, JavaScript, and modern web development with practical tutorials and real-world examples.",
  image = "https://res.cloudinary.com/dzk2q7sk2/image/upload/v1769696977/ChatGPT_Image_Jan_29_2026_07_58_23_PM_eghprn.png",
  url = "https://yourdomain.com",
}) => {
  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title.slice(0, 60)}</title>
      <meta name="description" content={description.slice(0, 160)} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
