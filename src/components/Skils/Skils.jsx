import { IoLogoVercel } from "react-icons/io5";
import { SiShadcnui } from "react-icons/si";

function Skills() {
	const skills = [
		{ id: 1, name: 'HTML', image: 'html.png', category: 'language' },
		{ id: 2, name: 'CSS', image: 'css.png', category: 'language' },
		{ id: 3, name: 'SCSS', image: 'scss.png', category: 'language' },
		{ id: 4, name: 'JavaScript', image: 'javadcript.png', category: 'language' },
		{ id: 5, name: 'TypeScript', image: 'ts.jpg', category: 'language' },
		{ id: 6, name: 'Tailwind CSS', image: 'tailwind.png', category: 'library' },
		{ id: 7, name: 'Bootstrap', image: 'bootstrap.png', category: 'library' },
		{ id: 8, name: 'React JS', image: 'React.webp', category: 'library' },
		{ id: 9, name: 'Next JS', image: 'next.png', category: 'library' },
		{ id: 10, name: 'Redux', image: 'redux.png', category: 'library' },
		{ id: 11, name: 'Zustand', image: 'zustand.png', category: 'library' },
		{ id: 12, name: 'Ant Design', image: 'antdesingimg.png', category: 'library' },
		{ id: 13, name: 'Magic UI', image: 'megicui.png', category: 'library' },
		{ id: 14, name: 'Material UI', image: 'materialui.png', category: 'library' },
		{ id: 15, name: 'Shadcn/UI', image: <SiShadcnui className='text-white text-[60px]'/>, category: 'library' },
		{ id: 16, name: 'i18next', image: 'i18n.png', category: 'library' },
		{ id: 17, name: 'Git', image: 'git.png', category: 'tool' },
		{ id: 18, name: 'GitHub', image: 'github.png', category: 'tool' },
		{ id: 19, name: 'VS Code', image: 'vscode.png', category: 'tool' },
		{ id: 20, name: 'Figma', image: 'figmaimg.png', category: 'tool' },
		{ id: 21, name: 'Vercel', image: <IoLogoVercel className='text-white text-[64px]' />, category: 'tool' },
		{ id: 22, name: 'Netlify', image: 'netlify.png', category: 'tool' },
		{ id: 23, name: 'Postman', image: 'postmanimg.png', category: 'tool' },
		{ id: 24, name: 'Prettier', image: 'pretter.png', category: 'tool' },
	];

	const categories = {
		language: 'Programming Languages',
		library: 'Libraries & Frameworks',
		tool: 'Tools & Software',
	};

	return (
		<section className='max-w-[1100px] mx-auto py-16 max-[768px]:pb-[90px] px-4 max-[500px]:px-0'>
			<h2 className='text-white text-center text-4xl font-bold mb-12'>My Skills</h2>

			{Object.keys(categories).map(category => (
				<div key={category} className='mb-12'>
					<h3 className='text-white text-2xl font-semibold mb-6'>
						{categories[category]}
					</h3>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
						{skills
							.filter(skill => skill.category === category)
							.map(skill => (
								<div
									key={skill.id}
									className='bg-white/20 dark:bg-gray-800/30 backdrop-blur-md border border-white/20 hover:shadow-[0_0_20px_2px_#34d399] rounded-xl p-4 transition duration-300 flex flex-col items-center'
								>
									{typeof skill.image === 'string' ? (
										<img
											src={skill.image}
											alt={skill.name}
											className='w-16 h-16 object-contain mb-4'
										/>
									) : (
										<div className='w-16 h-16 mb-4 flex items-center justify-center'>
											{skill.image}
										</div>
									)}
									<h4 className='text-white text-lg font-medium'>{skill.name}</h4>
								</div>
							))}
					</div>
				</div>
			))}
		</section>
	);
}

export default Skills;
