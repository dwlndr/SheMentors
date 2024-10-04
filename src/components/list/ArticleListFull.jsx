import React, { useEffect, useState } from 'react';
import ArticleCard from '../card/ArticleCard';

const ArticleListFull = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://66ffd40a4da5bd2375522207.mockapi.io/article');
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-main-100">
      <h1 className="text-5xl font-bold text-main-950 text-center pt-6">Artikel Karir dan Tips</h1>
      <main className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
      </main>
    </div>
  );
};

export default ArticleListFull;
