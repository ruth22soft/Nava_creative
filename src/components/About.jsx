import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, projectSections } from '../constants';
import {fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon: Icon }) => {
  return (
    <div
      className="xs:w-[260px] w-full cursor-default select-none"
      aria-label={title}
      role="img"
    >
      <div className="w-full p-[1px] rounded-[20px] shadow-card">
        <div className="bg-white/90 rounded-[20px] py-8 px-6 min-h-[260px] flex justify-evenly items-center flex-col">
          <div className="text-4xl text-nava-brown flex justify-center items-center w-16 h-16 rounded-md">
            <Icon aria-hidden="true" />
          </div>
          <h3 className="text-nava-brown text-[18px] font-bold text-center m-0">
            {title}
          </h3>
        </div>
      </div>
    </div>
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
        <p className={`${styles.sectionSubText} motto-font text-center text-nava-brown`}>&quot;Transforming ideas into timeless design.&quot;</p>
        <h2 className={`${styles.sectionHeadText} motto-font text-center text-nava-brown`}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-nava-brown text-[17px] max-w-3xl leading-[30px] text-justify mx-auto'
      >
       At Nava Creative, we believe design is more than aesthetics—it is the art of shaping spaces, products, and brands that inspire and connect with people. Based in Ethiopia, our studio specializes in interior design, custom furniture, and branding, offering holistic creative solutions tailored to each client’s vision.

    We design interiors that balance functionality and elegance, bringing warmth, comfort, and identity to every space. Our furniture design is rooted in craftsmanship and innovation, blending timeless quality with modern creativity. In branding, we craft powerful identities that tell stories, strengthen presence, and build meaningful connections between businesses and their audiences.

    With a passion for detail and a commitment to excellence, Nava Creative transforms ideas into experiences—where design meets purpose.
      </motion.p>

      <div className="mt-20 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-start">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
}

const AboutWrapped = SectionWrapper(About, "about");
export default AboutWrapped;