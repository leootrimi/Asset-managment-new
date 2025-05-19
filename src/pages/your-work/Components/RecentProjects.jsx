import { useNavigate } from "react-router-dom";
import { memo } from 'react';
import { useProjectStore } from "../../../stores/projectStore";

function RecentProjects({projects}) {

  return (
    <div className="font-sans py-2">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-blue-900 text-xl font-semibold m-0">Recent projects</h2>
        <a href="#" className="text-blue-600 font-medium no-underline">
          View all projects
        </a>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default memo(RecentProjects);

function ProjectCard({ project }) {

  const navigate = useNavigate();
  const setSelectedProject = useProjectStore((state) => state.setSelectedProject);

  const icons = ["🏢", "🏗️", "🏬", "🏛️", "🏠", "🏭", "🏣"];
  const bgColors = ['bg-red-50', 'bg-blue-50', 'bg-green-50', 'bg-yellow-50'];
  const hoverBorderMap = {
    'bg-red-500': 'hover:border-red-700',
    'bg-blue-500': 'hover:border-blue-700',
    'bg-green-500': 'hover:border-green-700',
    'bg-yellow-500': 'hover:border-yellow-700',
  };

  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomIcon() {
    return icons[Math.floor(Math.random() * icons.length)];
  }  
  
  const randomBgColor = getRandomItem(bgColors);
  const randomHoverClass = hoverBorderMap[randomBgColor] || '';

  function navigateToProject() {
    setSelectedProject(project.company)
    navigate(`/dashboard?company=${project.company}`)
  }

  return (
    <div
    onClick={navigateToProject}
     className={`${randomBgColor} ${hoverBorderMap[randomBgColor] || ''} rounded-lg border border-gray-200 w-[280px] min-w-[280px] overflow-hidden shadow-sm hover: cursor-pointer`}>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-xl shadow-sm">
            {getRandomIcon()}
          </div>
          <div>
            <h3 className="m-0 text-base font-semibold text-blue-900">{project.company}</h3>
            <p className="mt-1 mb-0 text-sm text-gray-600">Company-managed software</p>
          </div>
        </div>
      </div>

      <div className="px-4">
        <p className="text-sm font-medium text-gray-600 my-2">Quick links</p>

        <div className="flex justify-between py-2 text-sm">
          <a href="#" className="text-gray-600 no-underline">
            My open work items
          </a>
          <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs text-gray-600">
            {project.openItems}
          </span>
        </div>

        <div className="flex justify-between py-2 text-sm border-b border-gray-200">
          <a href="#" className="text-gray-600 no-underline">
            Done work items
          </a>
        </div>
      </div>

      <div className="p-3 px-4">
        <button className="bg-transparent border-0 text-gray-600 text-sm cursor-pointer flex items-center p-0">
          {project.boards} boards <span className="ml-1">▼</span>
        </button>
      </div>
    </div>
  )
}
