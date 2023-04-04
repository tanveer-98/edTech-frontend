import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const Variants1 = {
    visible: { x: 0, y: 0, scale: 1, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 0, y: 0, scale: 0, opacity: 0 },
  };

  function AboutSection() {
    const controls = useAnimation();
    const [refHeading, inView] = useInView();
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
      <motion.div
        className="h-full w-[80%]"
        ref={refHeading}
        initial="hidden"
        animate={controls}
        variants={Variants1}
      >
        {/* <Box/> */}
        <h3 className="text-center">ABOUT US</h3>
        <p className="pt-5 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          obcaecati nobis quod deserunt culpa! Adipisci totam eveniet quo
          exercitationem autem, id velit nisi aliquam in cumque ab repellendus,
          commodi modi!
        </p>
      </motion.div>
    );
  }
  return (
    <div id="aboutus" className={`flex items-center justify-center pt-10`}>
      <AboutSection/>
    </div>
  );
};

export default AboutUs;
