import { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // This method is checking to see what the value of `currentPage` is.
  //Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  const Header = () => {
    return (
      <header>
        <h1>
          My Web Dev Portfolio
        </h1>
      </header>
    );
  };


  const Footer = () => {
    return (
      <footer>
        <p>My Web Developer Portfolio. All Rights Reserved</p>
        <span>
          <p>Find me on:<a href="https://www.github.com/paolanayala">Github</a> |<a href="https://www.linkedin.com/in/paola-ayala-98ab40a5/">LinkedIn</a></p>
        </span>
      </footer>
    );
  };
    return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}