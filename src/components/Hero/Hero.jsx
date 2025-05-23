export default function Hero() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 max-[400px]:px-0 sm:px-8 md:px-12 lg:px-16 py-20 flex flex-col items-center md:items-start text-center md:text-left space-y-10">
      <div className="space-y-6 max-w-xl">
        <h2 className="text-teal-500 font-semibold uppercase tracking-widest text-sm sm:text-base md:text-lg">
          Hello & Welcome
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-gray-100 leading-snug">
          I'm <span className="text-emerald-600 dark:text-emerald-400">Aslanbek</span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl">
          Passionate Frontend Developer building sleek, fast, and accessible websites.
          Expert in React, Next.js, and Tailwind CSS for modern web solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8 mt-6">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold
              hover:bg-emerald-700 transition-colors focus:outline-none focus:ring-4
              focus:ring-emerald-300 dark:focus:ring-emerald-500 text-center"
          >
            See My Work
          </a>

          <a
            href="#contact"
            className="px-8 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold
              hover:bg-emerald-600 hover:text-white transition-colors focus:outline-none focus:ring-4
              focus:ring-emerald-300 dark:border-emerald-400 dark:text-emerald-400
              dark:hover:bg-emerald-400 dark:hover:text-gray-900 dark:focus:ring-emerald-500 text-center"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
    </section>
  )
}
