import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.9091519662657!2d-79.41743334872193!3d43.62924976189415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35108670b76b%3A0x88eb02c63d5c5f51!2sBudweiser%20Stage!5e0!3m2!1sen!2sca!4v1596147218541!5m2!1sen!2sca"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
