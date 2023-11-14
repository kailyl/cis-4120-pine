import "./Card.css";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Article from "../Article";

function Card(props) {
  const [show, setShown] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: "0 0px 50px rgb(255 255 255 / 40%)",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))," + `url(${props.background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  });

  return (
    <div>
      <animated.div
        className="card"
        style={props3}
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
       >
        <div
          onClick={() => show ? setShowArticle(true) : setShowArticle(false)}>
          <h2 className="heading">{props.heading}</h2>
          <p className="subheading">{props.subheading}</p>
        </div>
      </animated.div>
      {showArticle ? 
      <Article {...props} setShowArticle={setShowArticle}/> : 
      <div/>}
    </div>
  );
}

export default Card;
