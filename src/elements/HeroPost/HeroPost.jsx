import { BsFillHouseFill } from "react-icons/bs";
import { FiCode } from "react-icons/fi";

import "../../assets/styles/elements/heropost.scss";

function HeroPost() {
  return (
    <div className="galore-heropost">
      <div className="galore-heropost-imagebox">
        <img src="https://picsum.photos/900/300" alt="demo" />
      </div>
      <div className="galore-heropost-container">
        <div>
          <h2 className="galore-heropost-title">Welcome to react-admin demo</h2>
          <p className="galore-heropost-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            expedita minima atque maiores ad quos eos, obcaecati sunt voluptate
            vel velit repellendus impedit iure porro, ullam aspernatur sed ipsa?
            Eveniet.
          </p>
        </div>
        <div className="galore-heropost-buttonbox">
          <button className="galore-heropost-button">
            <span className="galore-heropost-button-icon">
              <BsFillHouseFill />
            </span>
            React-Admin Site
          </button>
          <button className="galore-heropost-button">
            <span className="galore-heropost-button-icon">
              <FiCode />
            </span>
            Source for this Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroPost;
