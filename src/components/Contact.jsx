//import React from "react";
//import { motion } from 'framer-motion';
//import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
//import { slideIn } from '../utils/motion';
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Map: ~75% width on md and up */}
        <div className="w-full md:w-3/4">
          <div className="w-full h-50 md:h-[640px] rounded-md overflow-hidden shadow-md">
              <iframe
                title="Nava Creative location"
                className="w-full h-full border-0"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.512946477377!2d38.76181750000001!3d9.031524899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85768b3546c3%3A0xcd98c7284f86e33e!2zSUtITEFTIEJVSUxESU5HIHwgNCBLaWxvIHwg4Yqi4Yqt4YiL4Yi1IOGIheGKleGMuyB8IDQg4Yqq4YiO!5e1!3m2!1sen!2set!4v1759539085418!5m2!1sen!2set"
                
              />
              {/* <iframe"https://www.google.com/maps?q=9.0269069,38.7472896&z=15&output=embed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3632.512946477377!2d38.76181750000001!3d9.031524899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85768b3546c3%3A0xcd98c7284f86e33e!2zSUtITEFTIEJVSUxESU5HIHwgNCBLaWxvIHwg4Yqi4Yqt4YiL4Yi1IOGIheGKleGMuyB8IDQg4Yqq4YiO!5e1!3m2!1sen!2set!4v1759539085418!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
            </div>
        </div>

        {/* Contact column: ~25% width on md and up */}
        <div className="w-full md:w-1/4 flex flex-col justify-center items-start pl-4 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200">
          <h2 className="motto-font text-nava-brown font-bold text-2xl md:text-3xl mb-4">
          Contact us
          </h2>

          <a
            href="mailto:Paulosgebru86@gmail.com"
            className="text-nava-brown text-lg md:text-xl font-medium mb-3"
          >
            Paulosgebru86@gmail.com
          </a>

          <div className="text-nava-brown text-lg md:text-xl space-y-2 mb-4">
            <a href="tel:+251942388849" className="block">+251 942 38 88 49</a>
            <a href="tel:+251941569822" className="block">+251 941 56 98 22</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/nava.creative"
              aria-label="Instagram"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@nava.creative"
              aria-label="TikTok"
              className="text-black"
              target="_blank"
              rel="noreferrer"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");