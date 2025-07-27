import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter, 
  FaDiscord, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaPhone
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

const CONTACT = {
  github: "https://github.com/inglepawan",
  linkedin: "https://linkedin.com/in/pawan-ingle-732357243",
  email: "mailto:contact@pawaningle.com",
  location: "Chandigarh, India",
  phone: "+91 8882257703",
};

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovering, setIsHovering] = useState(Array(4).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const handleHover = (index, value) => {
    const newHovering = [...isHovering];
    newHovering[index] = value;
    setIsHovering(newHovering);
  };

  const handleEmailClick = (e) => {
  
    if (window.getSelection().toString().length > 0) {
      return;
    }
    window.location.href = CONTACT.email;
  };

  const socialLinks = [
    { icon: <FaGithub />, href: CONTACT.github, color: "hover:text-purple-400", label: "GitHub" },
    { icon: <FaLinkedin />, href: CONTACT.linkedin, color: "hover:text-blue-400", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-sky-400", label: "Twitter" },
    { icon: <FaDiscord />, href: "#", color: "hover:text-indigo-400", label: "Discord" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-stone-700/50 pt-24 pb-12 px-6 bg-gradient-to-b from-stone-900/30 to-stone-950">
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(39, 39, 42, 0.9)',
              boxShadow: '0 0 15px rgba(192, 132, 252, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 bg-stone-800/80 backdrop-blur-sm border border-stone-700/50 p-3 rounded-full shadow-lg z-50 flex items-center justify-center"
            aria-label="Back to top"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowUp className="text-xl text-stone-300" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer  */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact  */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold text-stone-100 mb-6 flex items-center gap-2">
              <motion.span 
                className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              Contact Me
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-stone-400 mt-1 flex-shrink-0" />
                <div 
                  onClick={handleEmailClick}
                  className="text-stone-300 hover:text-white transition hover:pl-2 block cursor-pointer select-all"
                  title="Click to email or select to copy"
                >
                  contact@pawaningle.com
                </div>
              </motion.li>
              
              {CONTACT.phone && (
                <motion.li 
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaPhone className="text-stone-400 mt-1 flex-shrink-0" />
                  <a 
                    href={`tel:${CONTACT.phone.replace(/\D/g, '')}`} 
                    className="text-stone-300 hover:text-white transition hover:pl-2 block select-all"
                    title="Click to call or select to copy"
                  >
                    {CONTACT.phone}
                  </a>
                </motion.li>
              )}
              
              <motion.li 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-stone-400 mt-1 flex-shrink-0" />
                <span className="text-stone-300 hover:text-white transition hover:pl-2 block">
                  {CONTACT.location}
                </span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: "-50px" }}
          >
            <h3 className="text-xl font-semibold text-stone-100 mb-6 flex items-center gap-2">
              <motion.span 
                className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3
                }}
              />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: false }}
                >
                  <a 
                    href={link.href} 
                    className="text-stone-300 hover:text-white transition hover:pl-2 block group"
                  >
                    <motion.span
                      className="relative inline-block"
                      whileHover={{ 
                        x: 5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: false, margin: "-50px" }}
            className="lg:-ml-12 xl:-ml-16"
          >
            <h3 className="text-xl font-semibold text-stone-100 mb-6 flex items-center gap-2">
              <motion.span 
                className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6
                }}
              />
              Connect With Me
            </h3>
            
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: isHovering[index] ? 1.15 : 1,
                    y: isHovering[index] ? -5 : 0
                  }}
                  whileTap={{ scale: 0.9 }}
                  onHoverStart={() => handleHover(index, true)}
                  onHoverEnd={() => handleHover(index, false)}
                  className={`text-2xl text-stone-400 ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div>
              <h4 className="text-stone-300 mb-3">Get updates on my work</h4>
              <AnimatePresence mode="wait">
                {isSubscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-green-900/30 border border-green-800 rounded-lg p-4 text-green-300"
                  >
                    Thanks for subscribing! You'll hear from me soon.
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="bg-stone-800 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex-grow placeholder-stone-500"
                      required
                    />
                    <motion.button 
                      type="submit"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 15px rgba(192, 132, 252, 0.5)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition whitespace-nowrap flex items-center gap-2"
                    >
                      <span>Subscribe</span>
                      <RiSendPlaneFill className="text-lg" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, margin: "-50px" }}
          className="border-t border-stone-800 pt-8 text-center"
        >
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Pawan Ingle. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-stone-300 transition">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-stone-300 transition">Terms of Service</a>
          </p>
          
          <motion.div 
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: false }}
          >
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;