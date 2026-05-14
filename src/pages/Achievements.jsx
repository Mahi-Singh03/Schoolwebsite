import { motion } from 'framer-motion';

export default function Achievements() {
  const achievements = [
    { year: 2026, title: "Infrastructure Upgradation", category: "Facilities" },
    { year: 2025, title: "New Athletic Track Preparation", category: "Sports" },
    { year: 2024, title: "Cultural Arts Program Initialized", category: "Arts" },
    { year: 2023, title: "Best Competence Enhancement Initiative", category: "Academic" },
  ];

  const milestones = [
    { number: "100%", label: "Focus on Learning" },
    { number: "50+", label: "Qualified Staff" },
    { number: "2-3", label: "Years to CBSE Upgradation" },
    { number: "2026", label: "Session Open" },
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
            Our Legacy of Excellence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-white opacity-90"
          >
            Celebrating decades of academic and extracurricular achievements at United Public Sen. Sec. School
          </motion.p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg text-center border-b-4 border-blue-600"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {milestone.number}
              </div>
              <div className="text-gray-600 font-medium">{milestone.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Notable Achievements & Milestones</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-blue-200 h-full transform -translate-x-1/2" />
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`mb-8 w-full md:w-1/2 ${index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'}`}
              >
                <div className="relative pl-8 md:pl-0">
                  <div className="absolute w-6 h-6 bg-blue-600 border-4 border-white rounded-full left-[-11px] md:left-auto md:right-[-12px] top-6 z-10" />
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ml-4 md:ml-0 md:mr-8 border-l-4 md:border-l-0 md:border-r-4 border-blue-600">
                    <div className="text-blue-600 font-bold text-xl mb-1">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{achievement.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-4 py-1 rounded-full text-sm">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}