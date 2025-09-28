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
           marginTop:'60px'
          },
        });
        setForm(INITIAL_STATE);
      } else {
        toast.error('Failed: ' + (data.message || 'Unknown'), {
          position: 'top-right',
           style: {
           marginTop:'60px'
          },
        });
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      toast.error('Something went wrong. Try again later.', {
        position: 'top-right',
        style: {
          marginTop:'60px'
         },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-black-100 flex-[0.75] rounded-2xl p-8"
        >
          <Header useMotion={false} {...config.contact} />

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            {Object.keys(config.contact.form).map(input => {
              const { span, placeholder } =
                config.contact.form[input as keyof typeof config.contact.form];
              const Component = input === 'message' ? 'textarea' : 'input';

              return (
                <label key={input} className="flex flex-col">
                  <span className="mb-4 font-medium text-white">{span}</span>
                  <Component
                    type={input === 'email' ? 'email' : 'text'}
                    name={input}
                    value={form[input] ?? ''}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                    {...(input === 'message' && { rows: 7 })}
                  />
                </label>
              );
            })}
            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <ToastContainer />
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
