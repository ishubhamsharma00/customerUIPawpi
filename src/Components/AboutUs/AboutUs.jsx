import React from 'react';
import { motion } from 'framer-motion';
import Image1 from "../../Images/AboutUs/manwithdog.png"
import Image2 from "../../Images/AboutUs/womanwithcat.png"
import Image3 from "../../Images/AboutUs/catdog.png"
// import Testimonial from './Testimonial';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-pink-600 min-h-screen mx-auto w-full">
      

      {/* Main Content */}
      <div className="container mx-auto py-8">
        {/* Header Section */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl font-Raleway font-bold text-[#FCDD58]">Discover Our Story: Unveiling Our Journey and Commitment</p>
        </div>

        {/* Introduction Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8"
          whileHover={{ scale: 1.05 }}
        >
          <div className="px-4 text-white">
            <h2 className="text-2xl font-bold mb-4">Complete <span className='text-[#FCDD58]'>Story</span></h2>
            <p>
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur itaque inventore eligendi, repudiandae necessitatibus quaerat vel totam architecto porro quam voluptas non perspiciatis quod libero eos explicabo ullam nemo expedita voluptatibus accusantium cupiditate cumque veniam! Earum officiis odit possimus id non itaque optio dolore eius delectus adipisci neque voluptas, aliquid sint reiciendis et eos a quae animi molestiae quam quos tempore! Accusantium itaque quibusdam iure, neque ipsa obcaecati consequuntur praesentium saepe recusandae, qui ex delectus sed. Unde amet reprehenderit voluptas quae accusamus dolorem maxime? Quaerat, veritatis ex? Ea minima similique nemo quisquam molestias molestiae. Minima culpa commodi praesentium totam minus.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={Image1} alt="About Us" className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={Image2} alt="Our Values" className="rounded-lg shadow-lg" />
          </motion.div>
          <div className="px-4 text-white">
          <h2 className="text-2xl font-bold mb-4">Celebrating <span className='text-[#FCDD58]'>Our Legacy</span></h2>
            <p className='font-Raleway'>
              Fusce ut mi facilisis, viverra sapien vitae, volutpat velit. Sed feugiat justo a
              fermentum aliquet. Curabitur a nulla sed elit tincidunt viverra. Nunc ac ligula ac augue
              suscipit viverra.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8"
          whileHover={{ scale: 1.05 }}
        >
          <div className="px-4 text-white">
          <h2 className="text-2xl font-bold mb-4">Complete <span className='text-[#FCDD58]'>Story</span></h2>
            <p className="text-white font-Raleway">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, tortor ac
              ultricies elementum, nunc metus posuere nisl, in imperdiet tortor purus sed est. Proin
              fringilla fermentum lectus sed  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita blanditiis dolorem nisi odio minus sint rem ipsum soluta. Illo tempore in quia error aperiam consequatur odio facere itaque commodi quae, exercitationem blanditiis eos iure assumenda temporibus debitis illum sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod dolores modi assumenda. Laborum quisquam ad magni corporis, tempore laboriosam provident mollitia natus est fuga quam error assumenda voluptate voluptates odio maiores omnis facilis incidunt! Modi alias accusantium quod asperiores! Laudantium aut consectetur dolorem eos labore quae impedit excepturi quidem velit dolorum rerum vitae sint, accusamus ipsum doloribus est laborum eaque ea debitis, quos delectus esse dicta. Accusantium soluta iste, illo quos reprehenderit beatae molestias cumque eligendi ipsam quaerat libero iure iusto adipisci veniam nihil. Nulla delectus accusantium odit facere, hic debitis repudiandae quisquam tenetur rem totam placeat ea a..
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={Image1} alt="About Us" className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={Image2} alt="Our Values" className="rounded-lg shadow-lg" />
          </motion.div>
          <div className="px-4 text-white">
          <h2 className="text-2xl font-bold mb-4">Complete <span className='text-[#FCDD58]'>Story</span></h2>
            <p className="text-white font-Raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, tortor ac
              ultricies elementum, nunc metus posuere nisl, in imperdiet tortor purus sed est. Proin
              fringilla fermentum lectus sed  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita blanditiis dolorem nisi odio minus sint rem ipsum soluta. Illo tempore in quia error aperiam consequatur odio facere itaque commodi quae, exercitationem blanditiis eos iure assumenda temporibus debitis illum sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod dolores modi assumenda. Laborum quisquam ad magni corporis, tempore laboriosam provident mollitia natus est fuga quam error assumenda voluptate voluptates odio maiores omnis facilis incidunt! Modi alias accusantium quod asperiores! Laudantium aut consectetur dolorem eos labore quae impedit excepturi quidem velit dolorum rerum vitae sint, accusamus ipsum doloribus est laborum eaque ea debitis, quos delectus esse dicta. Accusantium soluta iste, illo quos reprehenderit beatae molestias cumque eligendi ipsam quaerat libero iure iusto adipisci veniam nihil. Nulla delectus accusantium odit facere, hic debitis repudiandae quisquam tenetur rem totam placeat ea a.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8"
          whileHover={{ scale: 1.05 }}
        >
          <div className="px-4 text-white">
          <h2 className="text-2xl font-bold mb-4">Complete <span className='text-[#FCDD58]'>Story</span></h2>
            <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis, tortor ac
              ultricies elementum, nunc metus posuere nisl, in imperdiet tortor purus sed est. Proin
              fringilla fermentum lectus sed  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit expedita blanditiis dolorem nisi odio minus sint rem ipsum soluta. Illo tempore in quia error aperiam consequatur odio facere itaque commodi quae, exercitationem blanditiis eos iure assumenda temporibus debitis illum sequi?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam quod dolores modi assumenda. Laborum quisquam ad magni corporis, tempore laboriosam provident mollitia natus est fuga quam error assumenda voluptate voluptates odio maiores omnis facilis incidunt! Modi alias accusantium quod asperiores! Laudantium aut consectetur dolorem eos labore quae impedit excepturi quidem velit dolorum rerum vitae sint, accusamus ipsum doloribus est laborum eaque ea debitis, quos delectus esse dicta. Accusantium soluta iste, illo quos reprehenderit beatae molestias cumque eligendi ipsam quaerat libero iure iusto adipisci veniam nihil. Nulla delectus accusantium odit facere, hic debitis repudiandae quisquam tenetur rem totam placeat ea a.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={Image3} alt="About Us" className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>


     
      </div>
    </div>
  );
};

export default AboutUs;
