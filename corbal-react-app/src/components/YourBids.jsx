import React from "react";
import "./css/yourBids.css";
import { Link } from "react-router-dom";

function YourBids(props) {

  const viewAll = [
    {
    key: "home",
    link: "/",
  }
];

  return (
    <div class="YourBids">
      <div class="row">
        <div class="col-md-4">
          <div class="your-bids-text">Your Bids</div>
          <div class="bids-divider"></div>
        </div>
        <div class="col-md-2">
          {viewAll.map(({ key, link }) => {
            return (
              <div className="view-all-button">
                <Link className="view-all-link" to={link} key={key}>View All</Link> 
              </div>
            );
          })}
        </div>
        {/* not sure how to format this part correctly*/}
        <div class="col-md-2">
          <div class="bid-analytics">{props.numCompleted} Completed</div>
        </div>
        <div class="col-md-2">
          <div class="bid-analytics">{props.numPending} Pending</div>
        </div>
        <div class="col-md-2">
          <div class="bid-analytics">{props.numUnread} Unread</div>
        </div>
      </div>
    </div>
  );
}

export default YourBids;
