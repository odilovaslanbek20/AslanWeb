import { FaExternalLinkAlt } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'

const projects = [
	{
		title: 'Kids Doktor',
		description:
			'Bolalar klinikasi uchun landing sahifa. Light/Dark rejim, responsive dizayn.',
		link: 'https://kidsdoktor.example.com',
		image: 'eco-bozor.png',
	},
	{
		title: 'Huarong Avto',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://huarongavto.example.com',
		image: 'book-shop.png',
	},
	{
		title: 'Huarong Avto',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://huarongavto.example.com',
		image: 'book-shop.png',
	},
	{
		title: 'Huarong Avto',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://huarongavto.example.com',
		image: 'book-shop.png',
	},
	{
		title: 'Huarong Avto',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://huarongavto.example.com',
		image: 'book-shop.png',
	},
	{
		title: 'Huarong Avto',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://huarongavto.example.com',
		image: 'book-shop.png',
	},
]

function Portfolio() {
	return (
		<section className='max-w-[90%] m-auto py-10'>
			<h2 className='text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white'>
				Portfolio
			</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col'
					>
						<div className='w-full h-48 overflow-hidden'>
							<img
								src={project.image}
								alt={project.title}
								className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
							/>
						</div>
						<div className='p-5 flex flex-col justify-between flex-1'>
							<div>
								<h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
									{project.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-300 mb-4'>
									{project.description}
								</p>
							</div>
							<div className='mt-auto flex items-center justify-between'>
								<button className='text-red-500 hover:text-red-600 text-[25px]'>
									<GoHeart />
								</button>
								<a
									href={project.link}
									target='_blank'
									rel='noopener noreferrer'
									className='inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition'
								>
									Saytga o'tish <FaExternalLinkAlt size={14} />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='flex justify-center mt-8'>
				<a
					href='/learn-more'
					className='inline-block bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white px-8 py-4 rounded-full text-xl font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300'
				>
					Learn More
				</a>
			</div>
		</section>
	)
}

export default Portfolio
