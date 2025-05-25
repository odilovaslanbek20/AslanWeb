function Contact() {
  return (
    <section className="max-[768px]:mb-[150px] border border-white/20 transition-all duration-500 hover:shadow-[0_0_20px_2px_#34d399] w-[90%] max-[768px]:w-full mx-auto py-8 px-6 max-[500px]:px-[15px] bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Contact Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <form className="space-y-4 text-gray-800 dark:text-white">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#34d399]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#34d399]"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                required
                className="w-full px-4 py-2 rounded-lg bg-white/70 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#34d399]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#34d399] hover:bg-[#2dd4bf] text-white font-semibold px-6 py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left text-gray-700 dark:text-gray-300">
          <p className="mb-4">
            Feel free to reach out to me for any collaboration, project ideas, or just to say hi! I'm always open to discussing new opportunities in web development.
          </p>
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> <a href="mailto:aslanbekodilov524@gmail.com" className="text-[#34d399] hover:underline">aslanbekodilov524@gmail.com</a>
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+998992662880" className="text-[#34d399] hover:underline">+998(99)266-2880</a>
            </p>
            <p>
              <strong>Telegram:</strong> <a href="https://t.me/aslanbek_odilov" className="text-[#34d399] hover:underline">@aslanbek_odilov</a>
            </p>
            <p>
              <strong>Location:</strong> Uzbekistan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
