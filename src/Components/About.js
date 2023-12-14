import React from "react";
import myImage from "../Images/myProfile.jpeg";
import "../style.css";
let aboutMe = () => {
  return (
    <section className="About">
      <div className="about-container">
        <h2>About Me</h2>
      </div>
      <div className="about-container">
        <img
          src={myImage}
          alt="MyImage"
          style={{ height: "150px", width: "150px", borderRadius: "50%" }}
        ></img>
      </div>
      <p
        className="about-container paragraph"
      >
        Certainly! Here's a revised version with the perspective that I am the
        one expressing the information: In my final year of graduation, I'm
        currently immersed in a full-stack web development course at AccioJob.
        As a coder, I've cultivated a strong understanding of programming
        concepts and languages. The decision to pursue a comprehensive web
        development course reflects my commitment to mastering both front-end
        and back-end development. Actively engaging in various aspects of the
        field demonstrates my adaptability and eagerness to broaden my skill
        set. Approaching graduation, I understand the importance of applying my
        knowledge through hands-on projects to solidify my skills. Building a
        diverse portfolio is a key focus, not only to showcase my abilities but
        also to enhance my prospects in the competitive landscape of web
        development. Best of luck to me in my final year and in the continued
        journey into the dynamic world of full-stack web development! If there
        are specific questions or a need for guidance on any aspect, I'm open to
        reaching out for assistance.
      </p>
    </section>
  );
};
export default aboutMe;
