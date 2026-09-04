import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import principalImg from '../assets/images/UI/principal.png';
import chairmanImg from '../assets/images/UI/chairman.png';
import galleryImg1 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.23 AM.jpeg';
import heroImg from '../assets/images/UI/WhatsApp Image 2026-03-26 at 11.16.08 AM.jpeg';
import galleryImg2 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.24 AM.jpeg';
import galleryImg2b from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.24 Ak.jpeg';
import galleryImg3 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.25 AM.jpeg';
import galleryImg4 from '../assets/images/gallery/WhatsApp Image 2026-03-26 at 10.37.26 AM.jpeg';
import galleryImg5 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.13 PM.jpeg';
import galleryImg6 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.14 PM.jpeg';
import galleryImg7 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.15 PM.jpeg';
import galleryImg8 from '../assets/images/gallery/WhatsApp Image 2026-05-14 at 1.40.15 PM1.jpeg';

// Icons
const BookIcon = () => (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>);
const SportsIcon = () => (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const ArtIcon = () => (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>);
const ComputerIcon = () => (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const GrowthIcon = () => (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>);
const HeartIcon = () => (<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>);
const QuoteIcon = () => (<svg className="w-10 h-10 text-blue-500/20 mb-4" fill="currentColor" viewBox="0 0 32 32"><path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" /></svg>);
const ChevronDownIcon = ({ className }) => (<svg className={`w-6 h-6 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>);

const AnimatedCounter = ({ to }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const end = parseInt(to, 10);
      if (start === end) return;
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end); // Ensure we end exactly on the target
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, to]);

  return <span ref={ref}>{count}</span>;
};

export default function Home() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const features = [
    { title: 'Learning Based Curriculum', description: 'Emphasis on competence enhancement and learning-based curriculum.', icon: BookIcon, color: 'text-blue-600', bg: 'bg-blue-100', border: 'border-blue-200' },
    { title: 'Sports & Playgrounds', description: 'Athletic track and playground for professional sports exposure.', icon: SportsIcon, color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' },
    { title: 'Cultural & Art', description: 'Classical music, folk dances, painting, drawing, and Indian arts.', icon: ArtIcon, color: 'text-purple-600', bg: 'bg-purple-100', border: 'border-purple-200' },
    { title: 'Special Classes', description: 'Career Counselling, Personality Development, MS Office & AI skills.', icon: ComputerIcon, color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-200' },
    { title: 'Future Upgradation', description: 'Working towards CBSE upgradation within the next 2-3 years.', icon: GrowthIcon, color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-200' },
    { title: 'Basic Facilities', description: 'Clean classrooms, pure drinking water, medical check-ups & library.', icon: HeartIcon, color: 'text-teal-600', bg: 'bg-teal-100', border: 'border-teal-200' }
  ];

  const leadershipData = {
    message: "Under the young and dynamic leadership of Chairman Jasvir Singh & Principal Gagandeep Singh, we offer much improved infrastructure and facilities aimed at providing each student with an opportunity to excel in academic, cultural, and sporting arenas.",
    leaders: [
      {
        name: "Jasbir Chhawla",
        role: "Chairman",
        image: chairmanImg,
        imageClassName: "object-cover object-top"
      },
      {
        name: "Gagandeep Singh",
        role: "Principal",
        image: principalImg,
        imageClassName: "object-cover object-top pt-8"
      }
    ]
  };

  const schoolStats = [
    { number: 2026, label: "Session Target", suffix: "" },
    { number: 50, label: "Qualified Staff", suffix: "+" },
    { number: 100, label: "Events & Activities", suffix: "+" },
    { number: 5, label: "Acres Campus", suffix: "+" }
  ];

  const faqs = [
    { question: "What's the admission process?", answer: "Admissions begin with an application followed by an assessment. Contact us at 73476-23250 for more details." },
    { question: "Are you affiliated to a board?", answer: "Yes, we are affiliated to the Punjab School Education Board (PSEB) and have future plans for upgradation to CBSE in the coming years." },
    { question: "What extracurriculars are available?", answer: "We focus heavily on overall development with sports, classical music, art classes, career counselling, AI, and basic computer skills." }
  ];

  const previewImages = [
    galleryImg1,
    galleryImg2,
    galleryImg2b,
    galleryImg3,
    galleryImg4,
    galleryImg5
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen mt-22 bg-[#F8FAFC] font-sans selection:bg-blue-200">

      {/* Hero Section */}
      <section className="relative pt-32 mt-22 pb-12 px-4 lg:px-8 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
        >
          <img
            src={heroImg}
            alt="School Admissions Poster"
            className="absolute inset-0 w-full h-full object-cover md:object-cover origin-center"
          />
          {/* Subtle overlay to blend the bottom edge with our floating stats */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>
      </section>

      {/* Floating Stats Bar */}
      <section className="relative -mt-16 md:-mt-24 z-20 px-4 max-w-6xl mx-auto mb-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-white/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {schoolStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.number === 2026 ? stat.number : <AnimatedCounter to={stat.number} />}
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium tracking-wide uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
                Welcome to the Future
              </span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              United Public Sen. Sec. School
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Affiliated to Punjab School Education Board. We are committed to providing a nurturing environment where your child can grow academically, culturally, and socially.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Our Facilities</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl border ${feature.border} transition-all duration-300 relative overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.bg.replace('bg-', 'from-').replace('-100', '-50')} to-transparent rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500`} />

                <div className={`${feature.bg} ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                  <feature.icon />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
        {/* Abstract decorative blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[80px] translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex items-center justify-center gap-4 sm:gap-8 min-h-[450px]"
          >
            {leadershipData.leaders.map((leader, index) => (
              <div 
                key={index}
                className={`relative w-1/2 max-w-[280px] transition-all duration-500 hover:-translate-y-3 group ${index === 0 ? '-top-6 md:-top-10' : 'top-6 md:top-10'}`}
              >
                {/* Decorative glows */}
                <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-tr ${index === 0 ? 'from-blue-500 to-cyan-400' : 'from-indigo-500 to-purple-500'} rounded-[3rem] blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
                
                {/* Polaroid Card */}
                <div className="relative bg-white p-3 sm:p-4 rounded-[2rem] shadow-2xl border border-white/60 z-10">
                  <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gray-50/50 border border-gray-100/50">
                    <img 
                      src={leader.image} 
                      alt={leader.role} 
                      className={`w-full h-full ${leader.imageClassName} transition-transform duration-700 group-hover:scale-105`} 
                    />
                    <div className="absolute inset-0 rounded-[1.5rem] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] pointer-events-none" />
                  </div>
                  
                  <div className="mt-5 mb-2 text-center px-1">
                    <div className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{leader.name}</div>
                    <div className="text-blue-600 font-semibold text-xs sm:text-sm mt-1 uppercase tracking-wider">{leader.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6 mt-8 md:mt-0"
          >
            <QuoteIcon />
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              A Message from <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Leadership</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic font-light border-l-4 border-blue-500 pl-6">
              "{leadershipData.message}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row justify-between items-end mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Campus Life</h2>
              <p className="text-gray-600 text-lg">A glimpse into our vibrant school environment.</p>
            </div>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4 md:mt-0" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewImages.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer ${index === 0 || index === 3 ? 'lg:col-span-2 aspect-[16/9]' : 'aspect-square'
                  }`}
              >
                <img src={imgSrc} alt={`Gallery ${index}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Image</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-blue-50/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about the admissions process and school facilities.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openQuestion === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-sm border ${isOpen ? 'border-blue-500' : 'border-gray-100'} overflow-hidden transition-colors duration-300`}
                >
                  <button
                    onClick={() => setOpenQuestion(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-transparent"
                  >
                    <span className={`text-lg font-semibold ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 ml-4 rounded-full p-1 ${isOpen ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                    >
                      <ChevronDownIcon />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 border-t-[8px] border-blue-600">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-4">
                United Public Sen. Sec. School
              </h3>
              <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
                Dedicated to academic excellence and whole child development with state-of-the-art facilities and a passionate leadership team.
              </p>
              <div className="flex gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <span className="block text-white font-medium">Chairman: Jasbir Chhawla</span>
                    <a href="tel:7347623250" className="hover:text-blue-400 transition-colors">73476-23250</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <span className="block text-white font-medium">Principal: Gagandeep Singh</span>
                    <a href="tel:9041898480" className="hover:text-blue-400 transition-colors">90418-98480</a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Career Opportunities</h4>
              <div className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50">
                <p className="text-slate-400 text-sm mb-3">Join our dedicated team! Interested teachers may send their resume to:</p>
                <a href="mailto:chhawlaj@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 mb-2 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  chhawlaj@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} United Public Sen. Sec. School. All rights reserved.</p>
            <p>Session 2026-27 | Affiliated to PSEB</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
