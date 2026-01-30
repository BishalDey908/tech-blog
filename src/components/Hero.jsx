const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full">
            🚀 Learn • Build • Scale
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Insights for Modern
            <span className="text-blue-500"> Developers</span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Practical tutorials, system design insights, and real-world coding
            experiences to help you grow as a developer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition">
              <a href="#articales">Explore Articles</a>
            </button>
            <button className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-medium transition">
               <a href="#articales">Subscribe</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
