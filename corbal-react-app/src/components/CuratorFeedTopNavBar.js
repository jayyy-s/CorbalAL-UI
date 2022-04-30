import classes from './css/CuratorFeedTopNavBar.module.css'
import { NavLink } from "react-router-dom";

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
                <NavLink to="/curator/bids" className={({isActive})=>isActive ? classes.active : undefined}>
                    Completed Bids
                </NavLink>
            </li>
            <li>
                <NavLink to="/curator/mybids" className={({isActive})=>isActive ? classes.active : undefined}>
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