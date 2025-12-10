import { articles } from "../data/tourData";
import { Calendar, Clock } from "lucide-react";

export default function RecentArticles() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Recent Articles & Posts</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div 
            key={article.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#203864] text-white text-xs font-bold uppercase py-1 px-2 rounded">
                {article.category}
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span className="flex items-center mr-4">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{article.date}</span>
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{article.readTime}</span>
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
              <a href={article.href} target="_blank" className="text-[#203864] font-medium text-sm hover:underline">Continue</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
