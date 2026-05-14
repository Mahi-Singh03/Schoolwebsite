import { motion } from 'framer-motion';
import chairmanImg from '../assets/images/UI/chairman.png';
import principalImg from '../assets/images/UI/principal.png';

export default function About() {
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
            United Public Sen. Sec. School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Affiliated to Punjab School Education Board | Session 2026-27<br/>
            Nurturing excellence through competence enhancement and learning based curriculum
          </motion.p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Our Core Values
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {['Excellence in Education', 'Holistic Development', 'Modern Facilities'].map((value, index) => (
              <motion.div
                key={value}
                variants={fadeInUp}
                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-blue-600 text-2xl">★</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value}</h3>
                <p className="text-gray-600">
                  {index === 0 && 'More emphasis on competence enhancement and learning based educational curriculum.'}
                  {index === 1 && 'Introduction of various cultural and art activities like Classical music, Painting, and more.'}
                  {index === 2 && 'Fully equipped with neat classrooms, pure drinking water, washrooms, medical check up and dedicated staff.'}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Leadership Team
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="bg-gray-300 aspect-square rounded-xl mb-6 overflow-hidden max-w-[250px] mx-auto">
                <img src={chairmanImg} alt="Jasvir Singh" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Jasvir Singh</h3>
              <p className="text-blue-600 mb-4 font-semibold text-lg">Chairman</p>
              <p className="text-gray-600">Young and dynamic leadership focusing on improved infrastructure and facilities.</p>
              <p className="text-sm font-bold text-gray-800 mt-2">M: 73476-23250</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="bg-gray-300 aspect-square rounded-xl mb-6 overflow-hidden max-w-[250px] mx-auto">
                <img src={principalImg} alt="Gagandeep Singh" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Gagandeep Singh</h3>
              <p className="text-blue-600 mb-4 font-semibold text-lg">Principal</p>
              <p className="text-gray-600">Dedicated to providing each student with an opportunity to have an exposure to excellence.</p>
              <p className="text-sm font-bold text-gray-800 mt-2">Mob: 90418-98480</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}