import * as React from 'react';
import { RiTwitterXFill } from 'react-icons/ri';
import {
  FaLinkedin,
  FaRedditAlien,
  FaMedium,
  FaDiscord,
  FaYoutube,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa6';
import { FaTelegramPlane } from 'react-icons/fa';

const QuickLinks = () => {
  const quickLinksItems = [
    'Home',
    'About Us',
    'Our Team',
    'Events',
    'Media',
    'Connect With Us',
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit">Quick Links</h3>
      <div className="flex flex-col gap-4 mt-4">
        {quickLinksItems.map((item, index) => (
          <div className="cursor-pointer text-sm hover:underline" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const OurProgrammes = () => {
  const programmeItems = [
    'Refer-Earn-Secure',
    'WAGSI Grants',
    'Ambassador Program',
    'Partnership Program',
  ];

  return (
    <div className="flex flex-col">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit max-lg:hidden">
        Our Programmes
      </h3>
      <div className="flex gap-4 mt-8 max-lg:grid grid-cols-2">
        {programmeItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer text-center text-sm bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 hover:bg-gradient-to-bl justify-center self-start px-6 py-3.5 whitespace-nowrap rounded shadow-md max-md:px-2">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};


const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg border-b-2 border-blue-500 w-fit">
        Contact Us
      </h3>
      <div className='flex flex-col gap-4 mt-4'>
        <div className="flex  gap-2 items-center font-normal">
          <FaEnvelope />
          <a
            href="mailto:yuvakairalisouhridavedi@gmail.com"
            className="flex text-sm italic">
            yuvakairalisouhridavedi@gmail.com
          </a>
        </div>
        <div className="flex gap-2 items-center font-normal">
          <FaInstagram />
          <a
            href="https://www.instagram.com/yuvakairali_souhridavedi/"
            className="flex text-sm italic">
            @yuvakairali_souhridavedi
          </a>
        </div>
      </div>
    </div>
  );
};

const SocialMedias = () => {

  // https://www.instagram.com/yuvakairali_souhridavedi/
  const IconMap = [
    <RiTwitterXFill size={18} />,
    <FaLinkedin size={18} />,
    <FaTelegramPlane size={18} />,
    <FaInstagram size={18} />,
    <FaFacebookF size={18} />,
    <FaWhatsapp size={18} />,
    <FaYoutube size={18} />,
  ];

  return (
    <div className="flex items-center gap-4">
      {IconMap.map((component, index) => (
        <React.Fragment key={index}>{component}</React.Fragment>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex overflow-hidden text-black relative flex-col items-center px-16 pt-9 pb-14 w-full max-md:px-2">
      <img
        loading="lazy"
        src="/assets/YKSV Logo.png"
        alt="YKSV - Yuva Kairali"
        className="self-start w-[100px] aspect-square mb-8"
      />

      <div className="flex justify-between w-full max-lg:flex-col max-lg:gap-4">
        <div className="flex w-full gap-[20%]">
          <QuickLinks />
        </div>
        <div className="flex flex-col gap-12 justify-between max-lg:flex-col-reverse">
          <ContactInfo />
        </div>
        {/* <OurProgrammes /> */}
      </div>

      <div className="flex w-full justify-between items-center py-8 border-b-2 border-[#FFFFFF0A] max-lg:flex-col max-lg:gap-8">
        <SocialMedias />
      </div>
      <div className="flex gap-4 w-full justify-between items-center py-8 max-lg:flex-col-reverse">
        <p className="text-xs">
          All Rights Reserved. © Copyright 2024. Yuva Kairali Souhrida Vedi
        </p>
        <p className="text-xs">Privacy Policy</p>
      </div>
    </div >
  );
};

export default Footer;
