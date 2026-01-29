const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Tech<span className="text-blue-500">Blog</span>
            </h3>
            <p className="mt-4 text-sm text-gray-400">
              Sharing practical tutorials, developer insights, and modern web
              technologies.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase mb-4">
              Follow
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center text-gray-300">
          © 2026 TechBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
