import React from "react";
import "./style.css";


// The render method returns the JSX that should be rendered
function Title(props) {
  return (
    <div class="navbar-fixed">


      <nav>
        <div className="nav-wrapper grey darken-3 green-text">
          <a href="/" class="green-text">What We Do on the Clickies</a>
          <a href="/" class="brand-logo center green-text">{props.message}</a>
          <ul className="right">
            <li> Number Correct: {props.count} == High Score: {props.highScore}</li>
          </ul>
        </div>
      </nav>
    </div>

  );
}


export default Title;


