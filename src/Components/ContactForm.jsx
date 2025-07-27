import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = ({ variant = 'full' }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim() !== '') {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      user_name: !formData.user_name.trim(),
      user_email: !formData.user_email.trim(),
      message: !formData.message.trim()
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    setLoading(true);

    // First send the admin notification
    emailjs.sendForm(
      'service_or5rhqz',
      'template_k39njic',
      formRef.current,
      'EL5CPwfMogzN2Z_GN'
    )
    .then(() => {
      return emailjs.send(
        'service_or5rhqz',
        'template_mt8d8p8',  
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_message: formData.message
        },
        'EL5CPwfMogzN2Z_GN'
      );
    })
    .then(() => {
      setLoading(false);
      setSent(true);
      
      // After 5 seconds, clear form and reset sent state
      setTimeout(() => {
        setSent(false);
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
        setErrors({
          user_name: false,
          user_email: false,
          message: false
        });
      }, 5000);
    })
    .catch((err) => {
      setLoading(false);
      console.error('EmailJS Error:', err);
      // error handling
      if (err.status === 400) {
        alert('Template not found. Please check your EmailJS template IDs.');
      } else if (err.status === 422) {
        alert('Invalid template variables. Please check your template configuration.');
      } else {
        alert('Something went wrong. Please try again.');
      }
    });
  };

  return (
    <div 
      id="contact"
      className={variant === 'full' ? "pb-4 pt-25" : "pb-4"}
    >
      {/* Only show the fancy header section for 'full' variant */}
      {variant === 'full' && (
        <motion.div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-stone-200 mb-6" 
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.6 } 
            }} 
            initial={{ opacity: 0, y: 20 }} 
          > 
            Let's Build Something{" "} 
            <motion.span 
              className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" 
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], 
              }} 
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "linear" 
              }} 
              style={{ 
                backgroundSize: '200% 200%', 
              }} 
            > 
              Amazing 
            </motion.span> 
          </motion.h2>
          
          <motion.p 
            className="text-stone-400 max-w-2xl mx-auto text-lg" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.3, duration: 0.8 }} 
            viewport={{ once: true }} 
          > 
            I'm currently available for freelance work and full-time opportunities. 
            If you have a project that needs creative solutions. 
          </motion.p>
        </motion.div>
      )}

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl mb-5"
      >
        Let's Connect
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        {sent && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-2xl text-center"
          >
            <p className="text-green-400 font-semibold">✅ Message sent successfully!</p>
            <p className="text-green-300 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
          </motion.div>
        )}
        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-stone-800/40 border border-stone-700 p-8 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.25)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
        >
          <div className="space-y-6">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <input
                type="text"
                name="user_name"
                placeholder={errors.user_name ? "Name is required" : "Your Name"}
                value={formData.user_name}
                onChange={handleChange}
                required
                className={`w-full p-4 bg-stone-900/50 ${
                  errors.user_name ? 'border-red-500' : 'border-stone-600'
                } border rounded-2xl text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500/20 transition-all duration-300`}
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                name="user_email"
                placeholder={errors.user_email ? "Email is required" : "Your Email"}
                value={formData.user_email}
                onChange={handleChange}
                required
                className={`w-full p-4 bg-stone-900/50 ${
                  errors.user_email ? 'border-red-500' : 'border-stone-600'
                } border rounded-2xl text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500/20 transition-all duration-300`}
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <textarea
                rows={6}
                name="message"
                placeholder={errors.message ? "Message is required" : "Your Message"}
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full p-4 bg-stone-900/50 ${
                  errors.message ? 'border-red-500' : 'border-stone-600'
                } border rounded-2xl text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-500/20 transition-all duration-300 resize-none`}
              />
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <motion.button
                type="submit"
                disabled={loading || sent}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:cursor-pointer ${
                  loading || sent ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Sending...' : sent ? 'Message Sent ✅' : 'Send Message'}
              </motion.button>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;