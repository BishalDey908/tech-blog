import "./App.css";
import ArticleGrid from "./components/blogs/ArticleGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Seo from "./components/seo/Seo";

function App() {
  return (
    <>
      {/* <Seo
        title="Tech Blog – React, JavaScript & Web Development"
        description="Explore modern web development articles, tutorials, and insights for React and JavaScript developers."
        image="https://res.cloudinary.com/dzk2q7sk2/image/upload/v1769696977/ChatGPT_Image_Jan_29_2026_07_58_23_PM_eghprn.png"
        url="https://yourdomain.com/blog"
      /> */}

      <Seo
        title="Tech Blog – React, JavaScript & Web Development"
        description="A modern tech blog sharing React, JavaScript, and full-stack web development tutorials."
      />

      <Header />
      <Hero />
      <ArticleGrid />
      <Footer />
    </>
  );
}

export default App;
