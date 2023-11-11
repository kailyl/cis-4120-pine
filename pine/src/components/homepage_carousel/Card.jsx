import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: "0 0px 50px rgb(255 255 255 / 40%)",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))," + `url(${props.background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  });

  return (
    <animated.div
      class="card"
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div
        onClick={() => show ? console.log(props.heading) : null}>
        <h2 className="heading">{props.heading}</h2>
        <p className="subheading">{props.subheading}</p>
      </div>
    </animated.div>
  );
}

export default Card;
