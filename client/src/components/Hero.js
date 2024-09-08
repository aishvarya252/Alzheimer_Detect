import React from "react";
import "./HeroStyles.css";

// function Hero(props) {
//   return (
//     <>
//       <div className={props.cName}>
//         <img alt="heroImg" src={props.heroImg} />
//         <div className="hero-text  ">
//           <h1>{props.title}</h1>
//           <p>{props.text}</p>
//           <a href={props.url} className={props.btnClass}>
//             {props.buttonText}
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Hero;

function Hero({ cName, heroImg, title, text, buttonText, url, btnClass }) {
  return (
    <div className={cName} style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-text">
        <h1 className="typewriter">{title}</h1>
        <p>{text}</p>
        <a href={url} className={btnClass}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default Hero;
