import "../../assets/styles/elements/customer.scss";

function NewCustomer({ index, username }) {
  return (
    <div className="galore-customer">
      <div className="galore-customer-imagebox">
        <img src={`https://picsum.photos/id/${index}/200/200`} alt="user" />
      </div>
      <p className="galore-customer-text">{username}</p>
    </div>
  );
}

export default NewCustomer;
