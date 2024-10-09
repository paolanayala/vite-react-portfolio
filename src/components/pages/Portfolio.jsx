import React from 'react';

// import Header from '././components/PortfolioContainer.jsx';
// import Footer from '././components/PortfolioContainer.jsx';

//do I have to make footer and header components in their own file and import them onto each page? return to this

export default function Portfolio() {
  return (
<div style={styles.container}>
      <h1 style={styles.heading}>Projects</h1>
      <div style={styles.projectsContainer}>
        <div style={styles.project}>
          <img src="img/basic-portfolio-form.png" alt="basic homepage with a form to fill out your full name and leave a text message" style={styles.image} />
          <h3>Basic Homepage</h3>
          <p>This was a basic homepage with a form to fill out your first and last name, offering users the ability to send a personalized message.</p>
        </div>
        <div style={styles.project}>
          <img src="img/Jungle-Pairs-gameboard.png" alt="memory card matching game with teal background" style={styles.image} />
          <h3>Jungle Pairs</h3>
          <p>Jungle Pairs was a collaborative effort amongst a group of 4 new developers to create a children's memory game while learning to identify jungle animals.</p>
        </div>
        <div style={styles.project}>
          <img src="././img/ScubaScrubeers.png" alt="basic webpage with a video for a promo of a game about pollution" style={styles.image} />
          <h3>Scuba Scrubbers</h3>
          <p>Scuba Scrubbers was a basic website made to showcase a game I created with a team that taught children about the effects of pollution on the natural ecosystems in the water systems around NYC.</p>
        </div>
      </div>
    </div>
  );
};


// styling generated using Xpert Learning Assistant

const styles = {
  container: {
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '40px',
    fontSize: '2.5rem',
    color: '#333',
  },
  projectsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // Allows wrapping on smaller screens
    gap: '20px', // Space between project cards
  },
  project: {
    flex: '1 1 30%',
    maxWidth: '30%',
    textAlign: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};