import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import './DashboardLayout.scss';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {

  return (
    <div className="dashboard-page">
     <DashboardHeader/>
      <div className='container'>
        <div className="dashboard-layout">
         <DashboardSidebar/>
          <div className="dashboard-main">
            <div className="dashboard-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;