import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import Chevrons from '../components/Chevrons/';
import PortfolioList from '../components/Portfolio/PortfolioList';
import ProjectPage from '../components/Project/ProjectPage';
import Hallo from '../components/Hallo';
import Impressum from '../components/Impressum';

import './styles.scss';

const routes = [
  {
    path: '/',
    element: (
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='/portfolio' replace />,
      },
      {
        path: 'portfolio',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <PortfolioList />,
          },
          {
            path: ':id',
            element: (
              <>
                <Chevrons />
                <ProjectPage />
              </>
            ),
          },
        ],
      },
      {
        path: 'hallo',
        element: <Hallo />,
      },
      {
        path: 'impressum-datunschutz',
        element: <Impressum />,
      },
    ],
  },
];

export default routes;
