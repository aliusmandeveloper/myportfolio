// Contact.tsx
'use client';
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { config } from '../../constants/config';
import { Header } from '../atoms/Header';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map(input => [input, ''])
);

// Web3Forms access key
const WEB3FORMS_ACCESS_KEY = '6188881b-88e7-4909-958d-04480a416db4';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<Record<string, string>>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: form.name || 'Anonymous',
        email: form.email || '',
        subject: `Contact form - ${form.name || 'Website'}`,
        message: form.message || '',
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log('Web3Forms response:', data);

      if (data.success) {
        toast.success('Message sent ✅', {
          position: 'top-right',
          style: {
            marginTop: '60px',
          },
        });
        setForm(INITIAL_STATE);
      } else {
        toast.error('Failed: ' + (data.message || 'Unknown'), {
          position: 'top-right',
          style: {
            marginTop: '60px',
          },
        });
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      toast.error('Something went wrong. Try again later.', {
        position: 'top-right',
        style: {
          marginTop: '60px',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`flex flex-col-reverse gap-8 overflow-hidden xl:flex-row min-h-[70vh]`}>
        {/* Left Side - Contact Info & Form */}
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex flex-col gap-8 xl:flex-row xl:flex-[0.75]"
        >
          {/* Contact Form */}
          <div className="bg-black-100 rounded-2xl p-6 xl:flex-1">
            <Header useMotion={false} {...config.contact} />

            <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              {Object.keys(config.contact.form).map(input => {
                const { span, placeholder } =
                  config.contact.form[input as keyof typeof config.contact.form];
                const Component = input === 'message' ? 'textarea' : 'input';

                return (
                  <label key={input} className="flex flex-col">
                    <span className="mb-2 font-medium text-white">{span}</span>
                    <Component
                      type={input === 'email' ? 'email' : 'text'}
                      name={input}
                      value={form[input] ?? ''}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-4 py-3 font-medium text-white outline-none text-sm"
                      {...(input === 'message' && { rows: 4 })}
                    />
                  </label>
                );
              })}
              <button
                type="submit"
                disabled={loading}
                className="bg-tertiary shadow-primary w-full rounded-xl px-6 py-3 font-bold text-white shadow-md outline-none text-sm mt-2 hover:bg-opacity-80 transition-all duration-300"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Right Side - Earth Canvas */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="h-[350px] md:h-[450px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <ToastContainer />

      {/* Contact Information */}
      <div className="bg-black-100 rounded-2xl mt-5 p-6 xl:flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Quick Contact */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

            <div className="space-y-4 mb-8">
              

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <p className="text-white font-medium">+92 3051023906</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Remote & Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - What to Expect */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-4">What to Expect</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Response within 2-4 hours
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Free project consultation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Detailed proposal within 48hrs
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                No obligation to proceed
              </li>
            </ul>
          </div>
        </div>

        {/* WhatsApp Button - Centered */}
        <div className="flex justify-center mt-6 pt-6 border-t border-gray-700">
          <button
            onClick={() => window.open('https://wa.me/923051023906', '_blank')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 w-full max-w-md"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
