// library
import { v4 as uuid } from "uuid";

// assets
import "../../assets/styles/elements/button.scss";

const buttonTextList = ["Home", "Projects", "Blog", "News", "Contact Us"];

function ButtonSet() {
  return (
    <div>
      {buttonTextList.map((title) => {
        return (
          <button key={uuid()} className="button">
            {title}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonSet;
