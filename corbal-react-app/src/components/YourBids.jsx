import React from "react";
import "./css/yourBids.css";

function YourBids(props) {

  return (
    <div class="YourBids">
      <div class="row">
        <div class="col-md-4">
          <div class="your-bids-text">Your Bids</div>
          <div class="bids-divider"></div>
        </div>
        <div class="col-md-4">
          <div class="view-all-button">View All</div>
        </div>
        {/* not sure how to format this part correctly*/}
        <div class="col-md-4">
          <div class="bid-analytics">{props.numCompleted} Completed {props.numPending} Pending {props.numUnread} Unread</div>
        </div>
      </div>
    </div>
  );
}

export default YourBids;
