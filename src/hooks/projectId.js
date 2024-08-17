import { useLocation } from 'react-router-dom';

const useProjectId = () => {
  const { pathname } = useLocation();

  const projectId = pathname.split('/portfolio/').filter((path) => path)[0];

  return projectId;
};

export default useProjectId;
