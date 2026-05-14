import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Activities() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const activities = [
    { 
      title: "Classical Music & Gurbani Sangeet", 
      category: "arts",
      description: "Indian classical music and religious music training",
      schedule: "Every Wednesday 3-5 PM"
    },
    { 
      title: "Painting & Drawing", 
      category: "arts",
      description: "Expressive arts and visual creative learning",
      schedule: "Every Friday 4-6 PM"
    },
    { 
      title: "Competitive Sports", 
      category: "sports",
      description: "Training targeting competitive sports with upcoming athletic track",
      schedule: "Every Tuesday & Thursday 4-6 PM"
    },
    { 
      title: "Career Counselling & Personality Development", 
      category: "academic",
      description: "Special classes arranged for career guidance",
      schedule: "Twice a month, Saturdays"
    },
    { 
      title: "MS Office & AI", 
      category: "stem",
      description: "Basic computer skills and introduction to modern Artificial Intelligence",
      schedule: "Every Monday 3-5 PM"
    },
  ];

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'stem', label: 'STEM & Tech' },
    { id: 'arts', label: 'Arts & Culture' },
    { id: 'academic', label: 'Academic & Career' },
    { id: 'sports', label: 'Sports' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-blue-600 rounded-3xl mx-4 lg:mx-auto max-w-[96%] mt-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Student Life & Activities
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white opacity-90"
          >
            Explore diverse cultural, art, sports and academic programs at United Public Sen. Sec. School
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities
            .filter(activity => activeCategory === 'all' || activity.category === activeCategory)
            .map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border-t-4 border-blue-600"
              >
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 font-semibold px-3 py-1 rounded-full text-sm mb-3">
                    {activity.category.toUpperCase()}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                  <div className="flex items-center text-gray-500 font-medium">
                    <span className="mr-2">⏰</span>
                    {activity.schedule}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 bg-gray-100 mb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Events</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Annual Sports Meet",
                date: "November 15-17, 2026 | New Athletic Track"
              },
              {
                title: "Cultural Arts Fest",
                date: "December 5, 2026 | School Auditorium"
              },
              {
                title: "CBSE Upgradation Orientation",
                date: "January 10, 2027 | Seminar Hall"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-600"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600 font-medium">{event.date}</p>
                  </div>
                  <button className="bg-blue-100 text-blue-600 font-semibold px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors shrink-0">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}