import React from 'react';
import AdviceCard from '../AdviceCard';

const Layout: React.FC = () => {
  return (
    <div className='layout'>
      <AdviceCard />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Nick Korintus</a>.
      </div>
    </div>
  );
};

export default Layout;
