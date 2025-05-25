import { FaExternalLinkAlt } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'

const projects = [
	{
		title: 'Books Shop',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://book-shop-ia12.vercel.app/#',
		image: 'booksshop.png',
	},
	{
		title: 'Eco Bozor',
		description:
			'Bolalar klinikasi uchun landing sahifa. Light/Dark rejim, responsive dizayn.',
		link: 'https://eco-bozor-web.vercel.app',
		image: 'ecobozor.png',
	},
	{
		title: 'Green Shop',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://7-oy-imthon.vercel.app/',
		image: 'greenshop.png',
	},
	{
		title: 'Books magazin',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://books-magazin.vercel.app/',
		image: 'bookshop.png',
	},
	{
		title: 'To Do List',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://to-do-list-seven-alpha-39.vercel.app/',
		image: 'to-do-list.png',
	},
	{
		title: 'Crud App',
		description:
			'Yengil va yuk mashinalar uchun kompaniya sayti. Vizitka dizayni asosida.',
		link: 'https://crud-app-two-vert.vercel.app/',
		image: 'crud.png',
	},
]

function Portfolio() {
	return (
		<section className='max-w-[90%] m-auto py-10 pb-[100px] max-[768px]:pb-[140px]'>
			<h2 className='text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white'>
				Portfolio
			</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='bg-white/30 dark:bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:shadow-[0_0_20px_2px_#34d399] flex flex-col'
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
		</section>
	)
}

export default Portfolio
