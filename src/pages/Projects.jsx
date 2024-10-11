import { projects } from '../mocks/projects';

export function Projects() {
  return (
    <ul id="projects" className="container h-screen flex flex-col gap-5">
      {projects.length > 0 && (
        projects.map((project) => (
          <li key={project.name} className="group flex flex-col lg:flex-row gap-5 p-5 rounded-lg hover:bg-transparent">
            <img src={project.imagePath} alt={project.name} className="h-16 w-28 rounded border-solid border-2 border-transparent group-hover:border-gray"/>
            <div>
              <h3 className="text-xl group-hover:text-green">{project.name}</h3>
              <p className="text-gray my-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-2">
                {project.techs.map((tech) => (
                  <span key={tech} className="inline-block text-green bg-greenTransparent py-1 px-3 rounded-full">{tech}</span>
                ))}
              </div>
              <a href={project.url} target="_blank" className="group-hover:underline underline-offset-8 group-hover:text-green">Ver projeto ➡️</a>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
