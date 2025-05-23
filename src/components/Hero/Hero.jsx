import { Typewriter } from 'react-simple-typewriter'

function Hero() {
	return (
		<section
			className='w-full bg-cover bg-center flex items-center justify-center'
			style={{ backgroundImage: "url('/bg.jpg')" }}
		>
			<div className='absolute inset-0 bg-black/60 z-0 w-full h-full' />

			<div className='relative z-10 container mx-auto px-6 max-[500px]:px-0 py-16 flex flex-col items-center justify-center text-center gap-6'>
				<img
					src='/Me.jpg'
					alt='My Photo'
					className='rounded-full w-40 h-40 object-cover border-4 border-cyan-400 shadow-lg mb-6'
				/>

				<h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight'>
					Hi, I am <br />
					<span className='text-cyan-400'>
						<Typewriter
							words={['Odilov Aslanbek']}
							loop={1}
							cursor
							cursorStyle='|'
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</h1>

				<p className='text-lg sm:text-xl text-gray-300 font-medium'>
					<Typewriter
						words={['Frontend Developer']}
						loop={1}
						cursor
						cursorStyle='_'
						typeSpeed={80}
						deleteSpeed={50}
						delaySpeed={1500}
					/>
				</p>

					<a
						href='/Resume.pdf'
						download
						className='inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 cursor-pointer'
					>
						Download CV
					</a>
			</div>
		</section>
	)
}

export default Hero
