import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={article.image_url}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          Oleh: {article.author} | {new Date(article.date * 1000).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4">{article.summary}</p>
        <button className="bg-main-900 text-white px-4 py-2 rounded-md">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
