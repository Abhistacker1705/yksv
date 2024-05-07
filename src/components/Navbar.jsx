'use client';
import React from 'react';
import Image from 'next/image';
import MenuButton from './MenuButton';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {menuClickhandle} from '@/utils/menuclickHandle';

const Navbar = () => {
	const menu = [
		'Home',
		'About Us',
		'Our Team',
		'Events',
		'Media',
		'Connect with Us',
	];

	return (
		<nav className="flex items-center justify-between border-b-2 px-4 border-[#ffffff0c] bg-white text-black">
			<img
				width={100}
				height={100}
				src="/assets/YKSV Logo.png"
				alt="YKSV - Yuva Kairali"
			/>
			<div className="flex items-center gap-6 max-lg:hidden">
				{menu.map((item, index) => (
					<p
						key={index}
						className="cursor-pointer font-jost hover:underline"
						onClick={menuClickhandle}>
						{item}
					</p>
				))}
			</div>

			<button className="px-4 py-2 font-medium text-white rounded bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 hover:bg-gradient-to-bl font-jost">
				Become a Volunteer
			</button>

			<div className="hidden max-lg:block">
				<MenuButton menu={menu} />
			</div>
		</nav>
	);
};

export default Navbar;
