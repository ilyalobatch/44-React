import "../../assets/styles/elements/pending-review.scss";

import { AiOutlineStar } from "react-icons/ai";

function PendingReview({ index, text }) {
  return (
    <div className="galore-pending-review">
      <div className="galore-pending-review-imagebox">
        <img src={`https://picsum.photos/id/${index}/200/200`} alt="user" />
      </div>
      <div className="galore-pending-review-container">
        <AiOutlineStar />
        <p className="galore-pending-review-text">{text}</p>
      </div>
    </div>
  );
}

export default PendingReview;
