'use client'
import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  // bg-gradient-to-r from-saffron to-yellow-500
  return (
    <section className="flex flex-col justify-start gap-4 items-center bg-hero h-[calc(100vh-4.85rem)] w-full bg-no-repeat bg-cover object-cover pl-[6%] pr-[6%] max-xl:pl-[2%] max-xl:pr-[2%] max-lg:p-0 max-md:justify-between">

      <div className={`flex items-center justify-center mt-[12%] ${loaded ? 'slide-up' : 'hidden'}`}>
        <h2 className="text-7xl font-mal text-center">യുവ കൈരളി സൗഹൃദ വേദി</h2>
      </div>

    </section>
  );
};

export default HeroSection;
