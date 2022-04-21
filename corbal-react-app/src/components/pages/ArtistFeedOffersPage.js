import classes from '../css/ArtistFeedOffersPage.module.css';
import ArtistFeedTopNavBar from '../ArtistFeedTopNavBar';
import SideBar from '../SideBar';

function ArtistFeedOffersPage(props) {
    return (
        <div className={classes.artistFeedOffersContainer}>
            <div className={classes.sideBarContainer}>
                <SideBar />
            </div>
            <div className={classes.artistFeedOffersMainContainer}>
                <ArtistFeedTopNavBar />
            </div>
        </div>
    )
}

export default ArtistFeedOffersPage;