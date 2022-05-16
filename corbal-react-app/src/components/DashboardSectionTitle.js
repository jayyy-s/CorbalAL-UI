import React from "react";
import classes from "./css/DashboardSectionTitle.module.css";
import { Link } from "react-router-dom";

/**
 * A functional component to render the title and the view all button.
 * 
 * Note : This component can be modified to render a different style if needed.
 * @param {object} props 
 * @returns 
 */
function DashboardSectionTitle(props) {

  return (
    <div className={classes.container}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.view_all_button} >
        <Link className={classes.view_all_link} to={props.link} >View All</Link>
      </div>
    </div>
  );
}

export default DashboardSectionTitle;
