import React from "react";
import classes from "./css/yourBids.module.css";
import { Link } from "react-router-dom";

/**
 * A functional component to render the title and the view all button.
 * 
 * Note : This component can be modified to render a different style if needed.
 * @param {object} props 
 * @returns 
 */
function YourBids(props) {

  return (
    <div className={classes.YourBids}>

        <div className={classes.your_bids_text}>Your Bids</div>
        <div className={classes.view_all_button}>
          <Link className={classes.view_all_link} to="/artist/tracks" >View All</Link>
        </div>
    </div>
  );
}

export default YourBids;
