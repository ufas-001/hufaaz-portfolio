import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Hafeez Abdulmutolib </span>
            from <span className="purple"> Nigeria.</span>
            <br /> 
            <br />
            I hold a degree in microbiology from the University of Ilorin. Despite my scientific background, I've discovered a deep passion for crafting solutions through my technical abilities.
            <br />
            <br />
            Currently, I'm immersed in the dynamic realm of <span className="purple">DevOps Engineering,</span> where I'm actively honing my skills. I'm enthusiastic about collaborating with diverse teams to streamline development processes and enhance the deployment lifecycle.
            <br />
            <br />
            Open to new learning experiences, I'm eagerly seeking internship opportunities within the DevOps domain. I firmly believe in the power of hands-on experience to solidify knowledge and build a strong foundation for a successful DevOps career.
            <br />
            <br />
            Beyond the confines of code, I find joy in engaging with the natural world. Exploring nature revitalizes me and fuels my creativity. I'm also committed to giving back to the community, which is integral to my values and aspirations.
            <br />
            <br />
            If you're interested in connecting or have insights to share, feel free to reach out. Let's embark on this exciting journey together!
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "You have no limitations, Keep striving!"{" "}
          </p>
          <footer className="blockquote-footer">The-Hufaaz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
