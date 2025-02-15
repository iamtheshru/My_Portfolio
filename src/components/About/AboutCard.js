import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shraddha Patel </span>
            from <span className="purple"> Gandhinagr, Gujarat, India.</span>
          </p>
          <p style={{ textAlign: "justify" }}>I am a passionate and driven Frontend Developer with <span className="purple">1.2 years</span> of training and <span className="purple">4 months</span> of hands-on professional experience. My expertise lies in building responsive, dynamic, and user-friendly web applications. I specialize in JavaScript and React.js, and I am proficient in HTML, CSS, and modern UI frameworks like Bootstrap and Tailwind CSS. With a keen eye for design and performance, I am to create seamless and engaging user experiences.</p>
          <p style={{ textAlign: "justify" }}>I'm always eager to learn new technologies and methodologies, striving to enhance both the aesthetic and functional aspects of the projects I work on. I’m looking forward to contributing to impactful web applications while continuously evolving my skills in frontend development.</p>
          <p style={{ textAlign: "justify" }} className="purple">Apart from coding, some other activities that I love to do!</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Social Media Influencers
            </li>
            <li className="about-activity">
              <ImPointRight />  Adventure Activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shraddha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
