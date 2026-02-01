import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blogs.css';

const Blogs = () => {
  const { t } = useTranslation();
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
      title: "Livestock & Agriculture Management in Modern Times",
      author: "Emma Williams",
      date: "March 5, 2024",
      excerpt: "Modern livestock and agriculture management practices that improve animal welfare and farm productivity. We discuss nutrition, housing, and health monitoring systems.",
      category: "Livestock & Agriculture",
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


  return (
    <div className="blogs">
      <div className="container">
        <section className="marketplace-section">
          <div className="marketplace-cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
            {blogs.map(blog => (
              <article key={blog.id} className="marketplace-card">
                <div className="marketplace-card-image" style={{ height: '200px', background: '#f0f0f0' }}>
                  <div style={{ 
                    width: '100%', 
                    height: '100%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '3rem'
                  }}>
                    {blog.category === 'Sustainability' ? '🌱' : 
                     blog.category === 'Organic Farming' ? '🌾' :
                     blog.category === 'Livestock & Agriculture' ? '🐄' :
                     blog.category === 'Climate' ? '🌍' :
                     blog.category === 'Technology' ? '💻' :
                     blog.category === 'Farming Techniques' ? '🚜' :
                     blog.category === 'Pest Management' ? '🐛' :
                     blog.category === 'Business' ? '💼' : '📰'}
                  </div>
                  <div className="marketplace-card-overlay">
                    <h3 className="marketplace-card-title">{blog.category}</h3>
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', color: '#1f5a3a', marginBottom: '1rem', fontWeight: 700 }}>{blog.title}</h2>
                  <p style={{ color: '#7f8c8d', lineHeight: '1.6', marginBottom: '1rem', fontSize: '0.95rem' }}>{blog.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.85rem', color: '#7f8c8d' }}>
                    <span>{t('blogsPage.by')} {blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>{blog.date}</span>
                    <button className="btn-gold" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>{t('blogsPage.readMore')}</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;

