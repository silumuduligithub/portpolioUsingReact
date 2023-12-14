import React from "react";
import Navbar from "../Components/Navbar";
import AboutMe from "../Components/About";
import Qualities from "../Components/Qualities";
let App = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Qualities
        sectionName="Skill"
        summery="I've built a strong foundation in programming languages, showcasing your proficiency in C, C++, and Java. These languages are the backbone of many software applications, enabling you to tackle diverse programming challenges. On the web development front, your expertise in HTML, CSS, and Bootstrap demonstrates your ability to craft visually appealing and responsive user interfaces, essential for creating engaging websites. Delving into the database realm, your mastery of MySQL underscores your capability to design and manage databases, a critical skill for data-driven applications. Moving to the dynamic side of web development, your knowledge of JavaScript and React positions you as a developer capable of building interactive and modern web applications. With this comprehensive skill set, you're well-equipped to contribute across the entire software development life cycle, from back-end logic implementation to creating polished front-end interfaces. To further enhance your versatility, staying updated with evolving technologies and exploring advanced topics like software architecture will enable you to continue excelling in the ever-changing landscape of software development."
      />
      <Qualities
        sectionName="Qualification"
        summery="I am a BSc graduate with a solid foundation in science, technology, engineering, and mathematics. My academic journey has equipped me with a diverse set of skills and knowledge, providing me with the tools to excel in various professional settings. Throughout my undergraduate studies, I undertook a comprehensive curriculum that has not only broadened my understanding of key concepts in my field but has also instilled in me a strong sense of analytical thinking and problem-solving. My BSc qualification serves as a testament to my commitment to academic excellence and lays the groundwork for my continued pursuit of knowledge and achievement in my chosen field. I am now eager to leverage the skills and expertise gained during my studies as I embark on new challenges and opportunities in my professional journey."
      />
      <Qualities
        sectionName="Projects"
        summery="You have undertaken an impressive array of projects, showcasing your versatility in both backend and frontend development. Your BookMyShow application demonstrates your expertise in building a platform for event ticketing and entertainment services, emphasizing user-friendly interfaces and seamless experiences. Additionally, your vaccine management system reflects a commitment to addressing critical societal needs, showcasing your ability to contribute to public health initiatives. Your various Spring projects highlight your proficiency in utilizing this framework for robust and scalable backend solutions. Integrating these diverse projects into a cohesive portfolio demonstrates your skill in both web application development and systems that cater to real-world challenges, making you a well-rounded and accomplished developer."
      />
    </div>
  );
};
export default App;
