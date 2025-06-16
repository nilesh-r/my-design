import React from 'react';
import { newsArticles } from '../data/news';

const NewsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Latest</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="text-sm text-gray-400 mb-2">
                  {article.category} • {article.location} • {article.date}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                  {article.title}
                </h3>
                <div className="text-sm text-gray-400 mb-4">
                  {article.description}
                </div>
                <div className="text-red-500 text-sm">Read story</div>
              </div>
            </article>
          ))}
        </div>
        
        <button className="mt-8 bg-white text-black px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors">
          See all the latest
        </button>
      </div>
    </section>
  );
};

export default NewsSection;