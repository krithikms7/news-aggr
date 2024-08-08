import React, { useEffect, useState } from 'react';
import axios from 'axios';                                                                       
import './Home.css'; // Import your CSS file

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8d933e1228a847a5854ae38141ed1271');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };-

    fetchNews();
  }, []);

  return (
    
    <div className='full'>
    <div className="container">
      <h1 className="heading">Top News Headlines</h1>
      <ul className="articles-list">
        {articles.map(article => (
          <li key={article.url} className="article-item">
            <a href={article.url} className="article-title" target="_blank" rel="noopener noreferrer">{article.title}</a>
            <p className="article-description">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Home;
