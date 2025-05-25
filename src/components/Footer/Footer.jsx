import { FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="w-full mt-auto px-4 fixed bottom-[15px]">
			<div className="bg-gray-900 text-white py-6 rounded-[30px] max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 border border-white/20 transition-all duration-500 hover:shadow-[0_0_20px_2px_#34d399]">
				<div className="text-center md:text-left">
					<p className="text-lg font-semibold">© 2025 Aslanbek Portfolio</p>
					<p className="text-sm text-white/60">Frontend Developer</p>
				</div>

				<div className="flex space-x-6">
					<a
						href="https://github.com/odilovaslanbek20"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#34d399] transition duration-200"
					>
						<FaGithub size={24} />
					</a>
					<a
						href="https://t.me/aslanbek_odilov"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#34d399] transition duration-200"
					>
						<FaTelegram size={24} />
					</a>
					<a
						href="https://www.instagram.com/aslanbek8987"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-[#34d399] transition duration-200"
					>
						<FaInstagram size={24} />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
