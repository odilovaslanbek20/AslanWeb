function About() {
	return (
		<section className="border border-white/20 transition-all duration-500 hover:shadow-[0_0_20px_2px_#34d399] w-[90%] max-[768px]:w-full mx-auto py-8 px-6 max-[500px]:px-[15px] bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl">
			<h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">About Me</h2>

			<div className="flex flex-col md:flex-row items-center gap-8 mb-8">
				<div className="w-full md:w-1/3 flex justify-center">
					<img
						src="/Me.jpg"
						alt="Aslanbek"
						className="w-48 h-48 object-cover rounded-full border-4 border-[#34d399] shadow-lg"
					/>
				</div>

				<div className="w-full md:w-2/3 text-center md:text-left">
					<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Aslanbek Odilov</h3>
					<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
						I am a passionate <strong>Frontend Developer</strong> with a strong focus on creating interactive and responsive user interfaces using technologies like <span className="text-[#34d399] font-semibold">React</span>, <span className="text-[#34d399] font-semibold">TypeScript</span>, and <span className="text-[#34d399] font-semibold">Tailwind CSS</span>. I love building clean and functional web experiences that provide value and great user experience.
					</p>
				</div>
			</div>

			<div className="text-gray-800 dark:text-gray-300 text-base leading-relaxed bg-white/20 dark:bg-gray-700/30 p-6 rounded-xl shadow-inner backdrop-blur-sm">
				<p>
					Hello! My name is <strong>Odilov Aslanbek</strong>, and I was born on <strong>December 20, 2008</strong>. I work in the field of programming, with a strong focus on front-end development and creating excellent user experiences.
				</p>
				<br />
				<p>
					My goal is to deliver modern, intuitive, and high-quality websites for every client through the projects I build. I constantly strive to improve my knowledge and keep up with the latest technologies.
				</p>
				<br />
				<p>
					I also highly value teamwork and collaboration. For me, every project is a new opportunity to explore creative and innovative solutions. My services go beyond just website design — I aim to enhance your online presence by building interactive and functional digital systems.
				</p>
			</div>
		</section>
	)
}

export default About;
