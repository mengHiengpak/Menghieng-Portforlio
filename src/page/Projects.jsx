import Project from '../components/Project'
import { myProject } from '../constants/index'

function Projects() {
  return (
    <section id="projects" className="relative c-space selection-space scroll-mt-10">
      <h1 className="text-4xl md:pl-25 md:pt-10 pl-15 pt-10 ">Select My Project</h1>
      <div className='pl-25 pr-25'>
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-10 h-[1px] w-full"></div>
        <div className="mt-10">
          {myProject.map((project) => (<Project key={project.id} {...project} />))}
        </div>
      </div>
    </section>
  )
}

export default Projects
