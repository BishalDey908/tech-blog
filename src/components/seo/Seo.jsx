import { Helmet } from "react-helmet-async";

const Seo = ({
  title = "Tech Blog – Modern Web Development Insights",
  description = "Learn React, JavaScript, and modern web development with practical tutorials and real-world examples.",
}) => {
  return (
    <Helmet>
      <title>{title.slice(0, 60)}</title>
      <meta name="description" content={description.slice(0, 160)} />
    </Helmet>
  );
};

export default Seo;
