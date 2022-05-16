import classes from './css/CuratorFeedTopNavBar.module.css'
import { NavLink } from "react-router-dom";

/**
 * A functional component to render the top navigation bar for the Curator Feed.
 * @param {object} props 
 * @returns 
 */
function CuratorFeedTopNavBar(props){
   return( 
       <>
   <nav>
        <ul className={classes.list}>
            <li>
                <NavLink to="/curator/music" className={({isActive})=>isActive ? classes.active : undefined}>
                    Music Feed
                </NavLink>
            </li>
            <li>
                <NavLink to="/curator/completed-bids" className={({isActive})=>isActive ? classes.active : undefined}>
                    Completed Bids
                </NavLink>
            </li>
            <li>
                <NavLink to="/curator/my-bids" className={({isActive})=>isActive ? classes.active : undefined}>
                    Your Bids
                </NavLink>
            </li>
        </ul>
    </nav>
    <div className={classes.divider}></div>
    </>
   )
}

export default CuratorFeedTopNavBar;