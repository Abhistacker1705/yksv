import * as React from 'react';

const BeforeAfterComparison = () => {
  const comparisonData =
  {
    title: 'About Us',
    vison: 'Our vision is to cultivate a vibrant and supportive community for Kerala students in Delhi, fostering a sense of belonging, empowerment, and growth. Through meaningful engagement, cultural exchange, and academic support, we aim to bridge the gap between home and the new environment, providing a platform for personal and professional development. We envision a space where Kerala students can thrive academically, socially, and culturally, celebrating diversity while preserving our rich heritage. By promoting unity, leadership, and service, we aspire to create lifelong connections and opportunities for our members to excel both within their academic pursuits and in their broader contributions to society. Together, we envision building a legacy of resilience, unity, and excellence, shaping a brighter future for Kerala students in Delhi and beyond.',
    mission: 'Our mission is to empower Kerala students in Delhi by providing them with a supportive network, resources, and opportunities for personal and academic growth. We are committed to fostering a sense of community through cultural exchange, educational initiatives, and social events that celebrate our heritage while embracing diversity. Our mission encompasses providing academic support, mentorship, and guidance to help students navigate their academic journey with confidence and success. We strive to advocate for the needs and interests of Kerala students, both within the university environment and in the wider community. Through collaborative efforts and partnerships, we aim to create a platform for leadership development, service, and advocacy, empowering our members to make positive contributions to society. Our mission is rooted in the values of inclusivity, integrity, and excellence, driving us to create a supportive and enriching environment for Kerala students in Delhi.',
  }

  return (
    <section className="flex flex-col gap-16 mb-12 text-sm text-textBlack px-[15%] max-lg:px-[6%]">
      <div className="flex gap-5 mt-16 justify-center items-start max-lg:flex-col max-lg:gap-12">
        <article className="flex flex-col font-poppins">
          <h2
            className={`pb-1.5 text-3xl self-center mb-10 font-bold leading-8`}>
            {comparisonData.title}
          </h2>
          <div className="flex flex-col justify-center gap-8">
            <div className='flex flex-col gap-4'>
              <h2
                className={`text-lg font-bold text-center leading-8`}>
                Vision
              </h2>
              <p className="font-poppins text-center">
                {comparisonData.vison}
              </p>
            </div>
            <div className='flex flex-col justify-center gap-4'>
              <h2
                className={`pb-1.5 text-lg font-bold text-center leading-8`}>
                Mission
              </h2>
              <p className="font-poppins text-center">
                {comparisonData.mission}
              </p>
            </div>
          </div>
        </article>

      </div>

    </section>
  );
};

export default BeforeAfterComparison;
