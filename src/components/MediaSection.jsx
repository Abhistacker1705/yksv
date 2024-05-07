import React from 'react';

const MediaSection = () => {
	const numbers1 = [1, 2, 3];
	const numbers2 = [4, 5, 6];
	const numbers3 = [7, 8, 9];
	return (
		<section
			id="media"
			className="flex flex-col gap-10 mb-12 text-sm text-textBlack px-[15%] max-lg:px-[6%]">
			<h2 className={`pb-1.5 text-3xl self-center font-bold leading-8`}>
				Media
			</h2>
			<div className="grid w-full grid-cols-3 gap-4">
				<div className="flex flex-col gap-4">
					{numbers1.map((number, idx) => (
						<div key={number}>
							<img
								className="hover:scale-[1.6] transition-transform duration-300"
								src={`/assets/Gallery/Image-${number}.jpeg`}
							/>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-4">
					{numbers2.map((number, idx) => (
						<div key={number}>
							<img
								className="hover:scale-[1.6] transition-transform duration-300"
								src={`/assets/Gallery/Image-${number}.jpeg`}
							/>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-4">
					{numbers3.map((number, idx) => (
						<div key={number}>
							<img
								className="hover:scale-[1.6] transition-transform duration-300"
								src={`/assets/Gallery/Image-${number}.jpeg`}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MediaSection;
