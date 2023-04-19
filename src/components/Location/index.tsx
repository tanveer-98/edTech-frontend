import React from "react";
import './styles.css'
const maps = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.486931509406!2d94.43827089999999!3d27.203858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740d787fbf0aa37%3A0x502232f4fecfe27!2sCRYSTAL%20COACHING%20CLASSES!5e0!3m2!1sen!2sin!4v1681928004929!5m2!1sen!2sin"
        className="responsive-iframe"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default maps;



