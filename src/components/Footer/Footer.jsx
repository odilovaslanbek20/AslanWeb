// components/Footer/Footer.tsx
import { FaInstagram, FaGithub, FaTelegram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-6">
			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
				<div className="mb-4 md:mb-0 text-center md:text-left">
					<p className="text-lg font-semibold">© 2025 Aslanbek Portfolio</p>
					<p className="text-sm text-gray-400">Frontend Developer</p>
				</div>

				<div className="flex space-x-4">
					<a
						href="https://github.com/odilovaslanbek20"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400 transition"
					>
						<FaGithub size={24} />
					</a>
					<a
						href="https://t.me/@aslanbek_odilov" 
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400 transition"
					>
						<FaTelegram size={24} />
					</a>
					<a
						href="https://www.instagram.com/aslanbek8987"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400 transition"
					>
						<FaInstagram size={24} />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
