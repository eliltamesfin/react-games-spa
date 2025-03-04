import { Link } from "react-router-dom";
import Developer from "../../components/Developer.jsx";
import "./style.css";
import Hero from "../../components/Hero.jsx";

// images
import fatima from "../../utilities/images/fatima_avatar.png";
import pelle from "../../utilities/images/pelle_avatar.png";
import elu from "../../utilities/images/elu--avatar.png";

const About = () => {
  return (
    <div className="about-container">
      <Hero
        imageUrl="https://images.unsplash.com/photo-1632059368252-be6d65abc4e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="About Us"
      />
      <div className="about-info">
        <div className="history">
          <div className="image">
            <img
              src="https://images.rawpixel.com/image_1100/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlNl8zZF9pbGx1c3RyYXRpb25fb2ZfYV9kaW1seV9saXRfZ2FtZV9yb29tX25lb25fd19kZDliOGJjOS1lZjU5LTRhYTktYmNhMi1iOWUyNDkyZmI0YzRfMS5qcGc.jpg"
              alt=""
            />
          </div>
          <div className="history-text">
            <h2>
              <span>The</span> Beginning
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              deserunt doloremque ipsam explicabo delectus quidem sint, quae,
              velit, unde commodi amet. Temporibus necessitatibus explicabo
              nulla beatae natus quisquam cum nemo nostrum sapiente eaque
              reprehenderit, quae, deleniti, architecto totam? Expedita deleniti
              cumque dolores harum. Possimus aut incidunt sint. Delectus, enim
              illo?
            </p>
          </div>
        </div>
        <div className="mission-vision">
          <div className="mission">
            <h3>
              <span>Our</span> Mission
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
              ipsum voluptas eos sint deserunt, nam ex nobis quia accusantium
              aut nihil magnam veniam fugiat vitae molestiae. Maxime consectetur
              ducimus pariatur doloremque, perspiciatis, itaque molestias eius
              veritatis soluta commodi unde excepturi!
            </p>
          </div>
          <div className="vision">
            <h3>
              <span>Our</span> Vision
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
              officia repudiandae dicta tempore ipsa ullam magni nihil,
              accusantium sequi atque architecto numquam rerum ex consequatur
              eveniet quam! Quidem blanditiis, eveniet eaque nulla ipsam minima
              magnam a sapiente omnis cupiditate illo.
            </p>
          </div>
        </div>
        <div className="developers">
          <div>
            <h2>Behind the Scene</h2>
            <Link className="contact-link" to="/contact">
              Contact them
            </Link>
          </div>
          <Developer img={fatima} name="Fatima Badaoui" position="Developer" />
          <Developer
            img={pelle}
            name="Per-Emil Johansson"
            position="Developer"
          />
          <Developer img={elu} name="Elilta Mesfin Raya" position="Developer" />
        </div>
      </div>
    </div>
  );
};

export default About;
