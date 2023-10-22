import React from 'react';
import deved from "../../public/me_portfolio.jpeg";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import Image from 'next/image';



const HeroSection = ({ title, subTitle, darkMode }) => {
  return (
    <div className={`text-center p-10 py-10 ${darkMode ? 'dark' : ''}`}>
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">{title}</h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">{subTitle}</h3>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 md:h-96 md:w-96 flex items-center justify-center relative overflow-hidden mt-20">
              <Image src={deved} layout="fill" objectFit="cover" alt="image_swe"/>
             </div>
<section>
           <div>
             <h3 className="text-3xl py-1 dark:text-white ">About me & my work</h3>
             <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               Since the beginning of my journey as a developer, I`&apos`ve created cross-industry websites for different-sized businesses. This gives a better idea as to what is best for your website and industry, coming from my experience.
             </p>
             <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             I offer business-tailored E-commerce web development. This essentially means that you own the code you get from me, instead of trusting with your data to platforms, like Wordpress or Wix. Plus, I only charge a one-off fee for the development!
             </p>
           </div>
           <div className="lg:flex gap-10">
             <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
               <Image src={design} width={100} height={100} alt="image_design"/>
               <h3 className="text-lg font-medium pt-8 pb-2  ">
                 Unique User Experiences
               </h3>
               <p className="py-2">
                 Loading your E-commerce with fiery designs and powerful business logic!
               </p>
              <h4 className="py-4 text-teal-600">My Stack</h4>
               <p className="text-gray-800 py-1">MongoDB</p>
               <p className="text-gray-800 py-1">Express.js</p>
               <p className="text-gray-800 py-1">React.js</p>
               <p className="text-gray-800 py-1">Node.js</p>
               <p className="text-gray-800 py-1">and other</p>
             </div>
             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
               <Image src={code} width={100} height={100} alt="image_code"/>
               <h3 className="text-lg font-medium pt-8 pb-2 ">
                 You say - I code.
               </h3>
               <p className="py-2">
                 Have a website in mind? Let`&apos`s make it real!
               </p>
               <h4 className="py-4 text-teal-600">My process in 5 simple steps:</h4>
               <p className="text-gray-800 py-1">Design</p>
               <p className="text-gray-800 py-1">Review</p>
               <p className="text-gray-800 py-1">Code</p>
               <p className="text-gray-800 py-1">Review</p>
               <p className="text-gray-800 py-1">Publish</p>
             </div>
             <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
               <Image src={consulting} width={100} height={100} alt="image_consulting"/>
               <h3 className="text-lg font-medium pt-8 pb-2 ">Reviews on each step</h3>
               <p className="py-2">
                 Stay on top of the things while having your project developed. My review process is designed to catch any irrelevancies while developing your website!
               </p>
               <h4 className="py-4 text-teal-600">What reviews do?</h4>
               <p className="text-gray-800 py-1">Save your time</p>
               <p className="text-gray-800 py-1">Allow to catch errors whilst they`&apos`re tiny</p>
               <p className="text-gray-800 py-1">Improvements in real time</p>
               <p className="text-gray-800 py-1">Some further ideas can be implemented as we go along the development</p>
             </div>
           </div>
         </section>
    </div>
  );
};

export default HeroSection;
