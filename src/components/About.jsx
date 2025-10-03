import React from 'react';
import { Tilt } from 'react-tilt';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon: Icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-white/90 rounded-[20px] py-6 px-6 min-h-[260px] flex justify-evenly items-center flex-col">
          <div className="text-4xl text-[#2b5f8c] flex justify-center items-center w-16 h-16 rounded-md">
            <Icon />
          </div>
          <h3 className="text-[#0b1220] text-[18px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} motto-font text-center`}>&quot;Transforming ideas into timeless design.&quot;</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-justify'
    >
     At Nava Creative, we believe design is more than aesthetics—it is the art of shaping spaces, products, and brands that inspire and connect with people. Based in Ethiopia, our studio specializes in interior design, custom furniture, and branding, offering holistic creative solutions tailored to each client’s vision.

We design interiors that balance functionality and elegance, bringing warmth, comfort, and identity to every space. Our furniture design is rooted in craftsmanship and innovation, blending timeless quality with modern creativity. In branding, we craft powerful identities that tell stories, strengthen presence, and build meaningful connections between businesses and their audiences.

With a passion for detail and a commitment to excellence, Nava Creative transforms ideas into experiences—where design meets purpose.
    </motion.p>

    <div className='mt-20 mx-auto max-w-5xl'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
    </>
  )
}

const AboutWrapped = SectionWrapper(About, "about");
export default AboutWrapped;