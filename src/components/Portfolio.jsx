import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
import Title from './Title';

function Portfolio() {
   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div>
            <Title>Projects</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {portfolio.map(project => (
                  <PortfolioItem 
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  Status={project.Status}
                  />
                  ))}
            </div>
         </div>
      </div>
   )
}

export default Portfolio;