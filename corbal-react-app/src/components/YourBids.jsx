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
    <div class="YourBids ml-align">
      <div class="your-bids-wrapper">
        <div class="your-bids-text">Your Bids</div>
        
          {viewAll.map(({ key, link }) => {
            return (
              <div className="view-all-button" >
                <Link className="view-all-link" to={link} key={key}>View All</Link>
              </div>
            );
          })}
        
      </div>

      <div class="bid-info">

        {/* not sure how to format this part correctly*/}
        <div >
          <div class="bid-analytics">{props.numCompleted} Completed</div>
        </div>
        <div >
          <div class="bid-analytics">{props.numPending} Pending</div>
        </div>
        <div>
          <div class="bid-analytics">{props.numUnread} Unread</div>
        </div>
      </div>
    </div>
  );
}

export default YourBids;
