import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectApp1 from './project1/ProjectApp1';
import ProjectApp2 from './project2/ProjectApp2';
import ProjectApp from './ProjectApp';

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectApp />}>
          <Route index element={<div>Welcome to the Homepage</div>} />
          <Route path="project1" element={<ProjectApp1 />} />
          <Route path="project2" element={<ProjectApp2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;


