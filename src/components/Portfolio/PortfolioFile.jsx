import { useState, useEffect } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GoHeart } from 'react-icons/go'

const projects = [
  { id: 'books-shop', title: 'Books Shop', description: 'A modern and responsive book store page. Minimalistic design and user-friendly interface.', link: 'https://book-shop-ia12.vercel.app/#', image: 'booksshop.png' },
  { id: 'eco-bozor', title: 'Eco Bozor', description: 'A market page for eco-friendly products. Light/Dark mode with mobile-friendly layout.', link: 'https://eco-bozor-web.vercel.app', image: 'ecobozor.png' },
  { id: 'green-shop', title: 'Green Shop', description: 'An online store based on green-themed colors. Showcases eco products and services.', link: 'https://7-oy-imthon.vercel.app/', image: 'greenshop.png' },
  { id: 'books-magazin', title: 'Books Magazin', description: 'A dedicated web page for books. Clean design and intuitive navigation.', link: 'https://books-magazin.vercel.app/', image: 'bookshop.png' },
  { id: 'to-do-list', title: 'To Do List', description: 'A task management app. Helps plan and manage daily tasks with a simple interface.', link: 'https://to-do-list-seven-alpha-39.vercel.app/', image: 'to-do-list.png' },
  { id: 'crud-app', title: 'CRUD App', description: 'A full-featured CRUD application to Create, Read, Update, and Delete data.', link: 'https://crud-app-two-vert.vercel.app/', image: 'crud.png' },
]

function Portfolio() {
  const [likedProjects, setLikedProjects] = useState({})

  useEffect(() => {
    // Sahifa yuklanganda localStorage'dan o'qish
    const storedLikes = localStorage.getItem('likedProjects')
    if (storedLikes) {
      setLikedProjects(JSON.parse(storedLikes))
    }
  }, [])

  const toggleLike = (id) => {
    const updatedLikes = {
      ...likedProjects,
      [id]: !likedProjects[id], // holatni invert qilish
    }
    setLikedProjects(updatedLikes)
    localStorage.setItem('likedProjects', JSON.stringify(updatedLikes)) // localStorage'ga saqlash
  }

  return (
    <section className='max-w-[90%] m-auto py-10 pb-[100px] max-[768px]:pb-[140px]'>
      <h2 className='text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white'>
        Portfolio
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div
            key={project.id}
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
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
              </div>
              <div className='mt-auto flex items-center justify-between'>
                <button
                  onClick={() => toggleLike(project.id)}
                  className={`text-[25px] transition-colors duration-300 ${
                    likedProjects[project.id] ? 'text-white' : 'text-red-400 hover:text-red-600'
                  }`}
                  aria-label={`Like ${project.title}`}
                >
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
