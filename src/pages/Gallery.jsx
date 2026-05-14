import { motion } from 'framer-motion';
import { useState } from 'react';
import img1 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.23 AM.jpeg';
import img2 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.24 AM.jpeg';
import img3 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.24 Ak.jpeg';
import img4 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.25 AM.jpeg';
import img5 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.26 AM.jpeg';

import img7 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.13 PM.jpeg';
import img8 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.14 PM.jpeg';
import img9 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.15 PM.jpeg';
import img10 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.15 PM1.jpeg';


export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Real gallery data
  const galleryItems = [
    { id: 1, category: 'campus', image: img1, title: 'Staff Portrait' },
    { id: 2, category: 'campus', image: img2, title: 'Staff Portrait' },
    { id: 3, category: 'events', image: img3, title: 'Staff Ceremony' },
    { id: 4, category: 'events', image: img4, title: 'Annual Gathering' },
    { id: 5, category: 'events', image: img5, title: 'Event Moments' },
   
    { id: 7, category: 'sports', image: img7, title: 'Student Achievement' },
    { id: 8, category: 'sports', image: img8, title: 'Student Achievement' },
    { id: 9, category: 'admissions', image: img9, title: 'Admissions Open' },
    { id: 10, category: 'classroom', image: img10, title: 'Classroom Learning' },
  ];

  const categories = ['all', 'campus', 'events', 'sports', 'admissions', 'classroom'];

  // Filter items based on category
  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-40">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-blue-600 rounded-3xl mx-4 lg:mx-auto max-w-[96%] mt-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our Campus Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Explore life at United Public Sen. Sec. School through these captivating moments
          </motion.p>
        </div>
      </section>

      {/* Gallery Filters */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-12 flex justify-center gap-4 flex-wrap"
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            variants={fadeInUp}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              selectedCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-7xl mx-auto px-4 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            variants={fadeInUp}
            layout
            className="aspect-square relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div
              className="absolute inset-0 flex items-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            >
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                <p className="text-sm text-blue-300 font-medium uppercase tracking-wider">{item.category}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}