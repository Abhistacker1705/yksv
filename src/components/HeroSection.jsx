'use client';
import React, {useEffect, useState} from 'react';

const HeroSection = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<section className="flex flex-col justify-start gap-4 items-center bg-hero h-[calc(100vh-4.85rem)] w-full bg-no-repeat bg-cover object-cover pl-[6%] pr-[6%] max-xl:pl-[2%] max-xl:pr-[2%] max-lg:p-0 max-md:justify-between">
			<div className={`flex flex-col h-1/2 items-center justify-center`}>
				<h2
					className={`text-center text-7xl max-md:text-5xl ${
						loaded ? 'slide-up' : 'hidden'
					}`}>
					Yuva Kairali Souhridavedi
				</h2>
				<p
					className={`text-3xl text-center opacity-0 max-md:text-2xl ${
						loaded ? 'slide-down' : 'hidden'
					}`}>
					New Delhi
				</p>
			</div>
		</section>
	);
};

export default HeroSection;
