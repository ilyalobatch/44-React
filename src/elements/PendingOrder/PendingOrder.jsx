import "../../assets/styles/elements/pending-order.scss";

function PendingOrder({ index, date, user, price }) {
  return (
    <div className="galore-pending-order">
      <div className="galore-pending-order-container">
        <div className="galore-pending-order-imagebox">
          <img src={`https://picsum.photos/id/${index}/200/200`} alt="user" />
        </div>
        <div className="galore-pending-order-info-container">
          <p className="galore-pending-order-date">{date}</p>
          <p className="galore-pending-order-user-text">by {user}, one item</p>
        </div>
      </div>
      <div className="galore-pending-order-price">
        <p>{price}$</p>
      </div>
    </div>
  );
}

export default PendingOrder;
