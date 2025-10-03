import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  // Use a simple coordinate-based embed to avoid the 'pb' parameter error
  // Centered near Addis Ababa; replace lat/lng with precise coords if you have them
  const lat = 9.03;
  const lng = 38.74;
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className="flex-1 bg-white/5 p-4 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 w-full h-64 md:h-auto rounded-md overflow-hidden">
            <iframe
              title="location-map"
              src={mapSrc}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>

          <div className="md:w-1/2 w-full text-[#0b1220]">
            <h4 className="text-lg font-semibold mb-2">Contact details</h4>
            <p className="mb-2">Email: <a href="mailto:Paulosgebru86@gmail.com" className="text-secondary">Paulosgebru86@gmail.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+251942388849" className="text-secondary">+251 942 38 88 49</a></p>
            <p className="mb-2">Phone: <a href="tel:+251941569822" className="text-secondary">+251 941 56 98 22</a></p>
            <div className="mt-4">
              <p className="font-medium mb-2">Socials</p>
              <p className="mb-1"><a href="https://www.instagram.com/nava.creative" className="text-secondary">Instagram</a></p>
              <p className="mb-1"><a href="https://www.tiktok.com/@nava.creative" className="text-secondary">TikTok</a></p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactWrapped = SectionWrapper(Contact, 'contact');
export default ContactWrapped;