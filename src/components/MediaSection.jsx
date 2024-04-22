import React from 'react'

const MediaSection = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <section className="flex flex-col gap-10 mb-12 text-sm text-textBlack px-[15%] max-lg:px-[6%]">
            <h2
                className={`pb-1.5 text-3xl self-center font-bold leading-8`}>
                Media
            </h2>
            <div className='grid grid-cols-3 justify-start gap-2 grid-auto-rows-auto'>{
                numbers.map((number, idx) => (
                    <img key={idx} className='hover:scale-[2] transition-all duration-300' src={`/assets/Gallery/Image-${number}.jpeg`} />
                ))}
            </div>
        </section>
    )
}

export default MediaSection