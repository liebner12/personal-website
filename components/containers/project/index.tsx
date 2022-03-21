import { FaGithub } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';

const ProjectText = () => {
  <div className="my-4 ml-2 mr-4 flex flex-col relative">
    <div className="absolute top-0 right-0 flex gap-2">
      <div className="p-1 backdrop-blur-sm bg-blockBg rounded-md">
        <FaGithub className="w-5 h-5 text-white" />
      </div>
      <div className="p-1 backdrop-blur-sm bg-blockBg rounded-md">
        <MdOpenInNew className="w-5 h-5 text-white" />
      </div>
    </div>
    <h2 className="text-xs font-semibold text-emeraldLight mb-2">
      First React app
    </h2>
    <h3 className="text-white font-bold text-2xl mb-3">StyczneTury</h3>
    <p className="text-grey my-2">
      My first project in React. I created it to learn about fundamentals of
      this library and also it was my first time with Bootstrap.
    </p>
    <ul className="flex text-emeraldLight text-sm mt-2 gap-6">
      <li>React</li>
      <li>Bootstrap</li>
      <li>React Router</li>
    </ul>
  </div>;
};

export default ProjectText;
