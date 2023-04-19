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
        Our mission is to help students achieve their full potential and reach their academic goals. We offer comprehensive courses in all subjects, as well as specialized coaching for JEE and NEET. Our experienced teachers are committed to providing engaging and interactive classes that cater to the individual learning styles of our students.
Our curriculum is regularly updated and reviewed to ensure that it is in line with the latest educational standards and requirements. We also provide regular feedback and progress reports to parents and students, so that everyone is aware of the student's academic progress and can take steps to improve it.
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
