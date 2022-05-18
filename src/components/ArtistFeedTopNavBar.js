import classes from './css/ArtistFeedTopNavBar.module.css'
import { NavLink } from "react-router-dom";

/**
 * A functional component to render the top navigation bar for the Artist Feed.
 * @param {object} props 
 * @returns 
 */
function ArtistFeedTopNavBar(props){
   return( 
       <>
   <nav>
        <ul className={classes.list}>
            <li>
                <NavLink to="/artist/tracks" className={({isActive})=>isActive ? classes.active : undefined}>
                    Tracks
                </NavLink>
            </li>
            <li>
                <NavLink to="/artist/offers" className={({isActive})=>isActive ? classes.active : undefined}>
                    Offers
                </NavLink>
            </li>
        </ul>
    </nav>
    <div className={classes.divider}></div>
    </>
   )
}

export default ArtistFeedTopNavBar;