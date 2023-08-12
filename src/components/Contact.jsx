import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//qqjrNqRleT-1Zaozb
//template_r4xu1mq
//service_rgil4w2

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({...form, [name]: value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


    emailjs
      .send('service_rgil4w2', 
            'template_r4xu1mq',

        {
          from_name: form.name,
          to_name: "Sushmita",
          from_email: form.email,
          to_email: "sushmitapatel768@gmail.com",
          message: form.message,
        },
        'qqjrNqRleT-1Zaozb'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div className="absolute bottom-3 left-0 right-0 text-center">
        <p className="text-white text-[16px]">
          Copyright © 2023 Sushmita Patel.
        </p>
        <p className="text-white text-[16px">
        Made with 💙 and ☕ By <span style={{ color: '#C58917' }}>Sushmita Patel</span>
        </p>
        
      </div>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="your esteemed name"
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="your web address"
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Feel free to contact me'
              className='bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-small '
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    
  );
};

export default SectionWrapper(Contact, "contact Me");