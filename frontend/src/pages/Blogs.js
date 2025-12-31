import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blogs.css';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Sustainable Agriculture",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      excerpt: "Exploring innovative farming techniques that reduce environmental impact while increasing crop yields. Learn about precision agriculture and smart irrigation systems.",
      category: "Sustainability",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Organic Farming: A Complete Guide for Beginners",
      author: "Michael Chen",
      date: "March 10, 2024",
      excerpt: "Discover the fundamentals of organic farming, from soil preparation to pest management. This comprehensive guide covers everything you need to start your organic journey.",
      category: "Organic Farming",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Livestock Management in Modern Times",
      author: "Emma Williams",
      date: "March 5, 2024",
      excerpt: "Modern livestock management practices that improve animal welfare and farm productivity. We discuss nutrition, housing, and health monitoring systems.",
      category: "Livestock",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Climate Change and Its Impact on Agriculture",
      author: "Dr. Robert Martinez",
      date: "February 28, 2024",
      excerpt: "Understanding how climate change affects farming practices worldwide. Explore adaptation strategies and resilient crop varieties for changing weather patterns.",
      category: "Climate",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Hydroponics: Growing Without Soil",
      author: "Lisa Anderson",
      date: "February 20, 2024",
      excerpt: "A deep dive into hydroponic systems and their benefits. Learn about nutrient solutions, growing mediums, and how to set up your own hydroponic garden.",
      category: "Technology",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Crop Rotation Strategies for Better Yields",
      author: "James Thompson",
      date: "February 15, 2024",
      excerpt: "Master the art of crop rotation to improve soil health and maximize productivity. We cover planning, timing, and the best crop combinations for your region.",
      category: "Farming Techniques",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Agricultural Technology: Drones and IoT",
      author: "David Kim",
      date: "February 10, 2024",
      excerpt: "How drones and Internet of Things devices are revolutionizing modern agriculture. From field monitoring to automated irrigation, technology is transforming farming.",
      category: "Technology",
      readTime: "9 min read"
    },
    {
      id: 8,
      title: "Pest Control: Natural vs Chemical Methods",
      author: "Dr. Maria Garcia",
      date: "February 5, 2024",
      excerpt: "Comparing natural and chemical pest control methods. Learn about integrated pest management and eco-friendly alternatives that protect both crops and environment.",
      category: "Pest Management",
      readTime: "7 min read"
    },
    {
      id: 9,
      title: "Water Conservation in Agriculture",
      author: "Thomas Brown",
      date: "January 30, 2024",
      excerpt: "Essential water-saving techniques for farmers. Discover drip irrigation, rainwater harvesting, and other methods to reduce water usage while maintaining crop quality.",
      category: "Sustainability",
      readTime: "6 min read"
    },
    {
      id: 10,
      title: "Farm-to-Table: Building Local Food Systems",
      author: "Jennifer Lee",
      date: "January 25, 2024",
      excerpt: "The benefits of local food systems and how to connect farmers directly with consumers. Explore community-supported agriculture and farmers' markets.",
      category: "Business",
      readTime: "5 min read"
    }
  ];

  const { t } = useTranslation();

  return (
    <div className="blogs">
      <div className="container">
        <div className="blogs-header glass-card">
          <div className="blogs-header-row blogs-header-row-1">
            <h1>Agricultural News & Insights</h1>
          </div>
          <div className="blogs-header-row blogs-header-row-2">
            <p>Stay updated with the latest trends, tips, and innovations in agriculture</p>
          </div>
        </div>
        <div className="blogs-grid">
          {blogs.map(blog => (
            <article key={blog.id} className="blog-card glass-card">
              <div className="blog-card-header">
                <span className="blog-category">{blog.category}</span>
                <span className="blog-read-time">{blog.readTime}</span>
              </div>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-author">By {blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
              <button className="blog-read-more">Read More</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

