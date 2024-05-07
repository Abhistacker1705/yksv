'use client';
import {menuClickhandle} from '@/utils/menuclickHandle';
import React, {useState} from 'react';
import {FiMenu} from 'react-icons/fi';
const MenuButton = ({menu}) => {
	const [isOpen, setIsOpen] = useState(false);

	const togglePopover = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<button
				className="px-4 py-2 transition-all duration-500 rounded-md outline-none"
				onClick={togglePopover}>
				<FiMenu color="black" />
			</button>
			<div
				className="absolute z-20 w-[20rem] bg-hero backdrop-blur-sm
        transition-all duration-500 top-[65%] right-[65%] rounded-md">
				{isOpen &&
					menu.map((item, index) => (
						<p
							onClick={menuClickhandle}
							className="px-4 py-2 text-white cursor-pointer font-jost hover:underline"
							key={index}>
							{item}
						</p>
					))}
			</div>
		</div>
	);
};

export default MenuButton;
