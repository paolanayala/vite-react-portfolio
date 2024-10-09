import React from 'react';

// import Header from '././components/PortfolioContainer.jsx';
// import Footer from '././components/PortfolioContainer.jsx';

export default function Resume() {
  return (
    <div style={styles.container}>
    <h1 style={styles.heading}>Resume</h1>
    <div style={styles.imageContainer}>
      <img 
        src="path_to_your_resume_image.jpg" 
        alt="Resume" 
        style={styles.resumeImage} 
      />
    </div>
  </div>
    );
}   

// styling generated using Xpert Learning Assistant
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#333',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resumeImage: {
    width: '100%',        // Image takes up full width of the container
    height: 'auto',       // Maintain aspect ratio
    maxWidth: '100%',     // Ensures it doesn't overflow on large screens
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Adds a slight shadow
    borderRadius: '10px',  // Rounded corners
  },
};