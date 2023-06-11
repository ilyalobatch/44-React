import StatisticItem from "../../elements/StatisticItem";
import HeroPost from "../../elements/HeroPost";
import PendingOrder from "../../elements/PendingOrder";
import PendingReview from "../../elements/PendingReview";
import NewCustomer from "../../elements/NewCustomer";

import { BiDollar } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { MdComment } from "react-icons/md";

import { pendingOrderData, pendingReviewData, usernameData } from "./helpers";

import "../../assets/styles/containers/main.scss";

function Main() {
  return (
    <main className="galore-main">
      <div className="galore-main-container-lefthalf">
        <div className="galore-main-icon-container">
          <StatisticItem
            icon={<BiDollar />}
            description="Monthly Revenue"
            value="1385 $US"
            color="#2b6f8c"
          />
          <StatisticItem
            icon={<AiOutlineShoppingCart />}
            description="New Orders"
            value="12"
            color="#F5954A"
          />
        </div>
        <HeroPost />
        <div className="galore-main-orders">
          <h2 className="galore-main-orders-title">Pending Orders</h2>
          {pendingOrderData.map((item, index) => {
            return (
              <PendingOrder
                key={`gerole-pending-${index}`}
                index={index}
                date={item.date}
                user={item.user}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
      <div className="galore-main-container-righthalf">
        <div className="galore-main-container-righthalf-left">
          <StatisticItem
            icon={<MdComment />}
            description="Pending Reviews"
            value="3"
            color="#EE3D3B"
          />
          <div className="galore-main-reviews">
            {pendingReviewData.map((text, index) => {
              return (
                <PendingReview
                  key={`galore-pending-review-${index}`}
                  index={index}
                  text={text}
                />
              );
            })}
          </div>
        </div>
        <div className="galore-main-container-righthalf-right">
          <StatisticItem
            icon={<FiUserPlus />}
            description="New Customers"
            value="9"
            color="#49AE5D"
          />
          <div className="galore-main-customers">
            {usernameData.map((username, index) => {
              return (
                <NewCustomer
                  key={`galore-pending-review-${index}`}
                  index={index}
                  username={username}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
