import './PortfolioPage.css';
import React from 'react';

const projects = [
  {
    title: 'AI Chatbot Cryptocurrency Swapper',
    description: 'Developed a cryptocurrency swapping platform using Blockchain technology for secure transactions.',
    link: 'https://github.com/nayanpunmiya/crypto-swapper',
  },
  {
    title: 'Contact List Management App',
    description: 'Built a contact management system allowing users to add, edit, delete, and search contacts.',
    link: 'https://github.com/nayanpunmiya/contact-list-app',
  },
  {
    title: 'Python Sentiment Analysis',
    description: 'Created a sentiment analysis tool using NLTK and Hugging Face Transformers.',
    link: 'https://github.com/nayanpunmiya/sentiment-analysis',
  },
];

const PortfolioPage = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
