import classes from './css/CuratorRespondBidFormComponent.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCuratorBid } from '../store/curator-bids-slice';
import { endPoint } from '../config';
import CloseIcon from '@mui/icons-material/Close';


function CuratorRespondBidFormComponent(props) {

    const [enteredPlaylistSpot, setPlaylistSpot] = useState(props.bid.playlist_spot);
    const [enteredPrice, setPrice] = useState(props.bid.price);
    const [enteredDaysFeatured, setDaysFeatured] = useState(props.bid.days_featured);
    const [artistResponse, setArtistResponse] = useState(null);

    const dispatch = useDispatch();

    //fetching the artist response if one exists
    useEffect(() => {

        const getResponse = async () => {
            const getArtistResponse = async () => {
                const response = await fetch(`${endPoint}/responses`);

                if (!response.ok) {
                    console.error("There was an error when fetching the artist response");
                }
                return await response.json();
            }

            try {
                const artistResponses = await getArtistResponse();
                //filtering out the response for the artist
                const filteredResponses = artistResponses.filter((resp) => resp.bid_id === props.bid.id);
                if (filteredResponses.length > 0) {
                    setArtistResponse(filteredResponses[0]);
                    setPlaylistSpot(filteredResponses[0].playlist_spot);
                    setPrice(filteredResponses[0].price);
                    setDaysFeatured(filteredResponses[0].days_featured);
                }
                else {
                    setArtistResponse(null);
                    setPlaylistSpot(props.bid.playlist_spot);
                    setPrice(props.bid.price);
                    setDaysFeatured(props.bid.days_featured);

                }
            } catch (err) {
                console.error("There was an error when fetching an artist response in pitch card");
            }
        }

        getResponse();

    }, [props])

    const handleAcceptBtnOnClick = async (event) => {
        event.preventDefault();

        const bid = {
            ...props.bid,
            status: "Completed"
        }

        dispatch(updateCuratorBid(bid));

        props.closeBidForm();
    }

    const handleRenegotiateFormSubmit = async (event) => {
        event.preventDefault();

        const bid = {
            playlist_spot: event.target.playlist_slot.value,
            price: event.target.bid_price.value,
            days_featured: event.target.length_promotion.value,
            status: "Pending"
        }

        const postArtistResponse = async () => {
            const response = await fetch(
                `${endPoint}/bids/${props.bid.id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(bid),
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Updating curator bid data data failed.');
            }
            return await response.json();

        };

        try {
            const data = await postArtistResponse();
            props.closeBidForm();

        } catch (error) {
            console.error("error while updating curator response", error)
        }

    }

    const handleBidPriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handlePlaylistSlotChange = (event) => {
        setPlaylistSpot(event.target.value)
    }

    const handleDaysFeaturedChange = (event) => {
        setDaysFeatured(event.target.value)
    }


    return (
        <div className={classes.formContainer} style={{ flexGrow: 1 }}>
            <CloseIcon style={{ position: 'absolute', right: '5px', top: '5px', fontSize: '3rem' }} onClick={props.closeBidForm} />
            <h3>Respond to Bid</h3>
            <div className={classes.divider}></div>
            <div className={classes.bidDetailContainer}>
                <div>Current Bid Details</div>
                <div className={classes.bidInfoRow}>
                    <div className={classes.bidInfo}>
                        <div className={classes.bidInfoLabel}>Bid Price</div>
                        <div className={classes.bidInfoValue}>{props.bid.price}</div>
                    </div>
                    <div className={classes.bidInfo}>
                        <div className={classes.bidInfoLabel}>Genre of Playlist</div>
                        <div className={classes.bidInfoValue}>{props.bid.genre}</div>
                    </div>
                </div>
                <div className={classes.bidInfoRow}>
                    <div className={classes.bidInfo}>
                        <div className={classes.bidInfoLabel}>Placement on playlist:</div>
                        <div>{props.bid.playlist_spot}/{props.bid.no_of_tracks_playlist}</div>
                    </div>
                </div>
                <div className={classes.bidInfoRow}>
                    <div className={classes.bidInfo}>
                        <div>Length of promotion:</div>
                        <div>{props.bid.days_featured} Days</div>
                    </div>
                </div>
            </div>

            {artistResponse ?

                <div className={classes.bidDetailContainer}>
                    <div>Artist Response Details</div>
                    <div className={classes.bidInfoRow}>
                        <div className={classes.bidInfo}>
                            <div className={classes.bidInfoLabel}>Bid Price</div>
                            <div className={classes.bidInfoValue}>{artistResponse.price}</div>
                        </div>
                        <div className={classes.bidInfo}>
                            <div className={classes.bidInfoLabel}>Genre of Playlist</div>
                            <div className={classes.bidInfoValue}>{props.bid.genre}</div>
                        </div>
                    </div>
                    <div className={classes.bidInfoRow}>
                        <div className={classes.bidInfo}>
                            <div className={classes.bidInfoLabel}>Placement on playlist:</div>
                            <div>{artistResponse.playlist_spot}/{props.bid.no_of_tracks_playlist}</div>
                        </div>
                    </div>
                    <div className={classes.bidInfoRow}>
                        <div className={classes.bidInfo}>
                            <div>Length of promotion:</div>
                            <div>{artistResponse.days_featured} Days</div>
                        </div>
                    </div>
                </div>
                :
                <div>The Artist Has not taken any action</div>
            }


            <div className={classes.bidFormContainer}>
                <div className={classes.bidFormTitle}>Re-negotiate Bid </div>
                <form onSubmit={handleRenegotiateFormSubmit}>
                    <div className={classes.formRow}>
                        <div className={classes.formFieldSet}>
                            <label for="bid_price">Bid Price</label>
                            <input type="number" step="0.01" id="bid_price" name="bid_price" placeholder="$USD" required value={enteredPrice} onChange={handleBidPriceChange} />
                        </div>
                        <div className={classes.formFieldSet}>
                            <label for="playlist_genre">Genre Playlist</label>
                            <input type="text" id="bid_genre" name="bid_genre" value={props.bid.genre} />
                        </div>
                    </div>
                    <div className={classes.formRow}>

                        <div className={classes.formFieldSet}>
                            <label>Placement On Playlist</label>
                            <div className={classes.playlistSpot}>
                                <input type="number" id="playlist_slot" name="playlist_slot" placeholder="Slot#" required min={1} value={enteredPlaylistSpot} onChange={handlePlaylistSlotChange} />
                                <div className={classes.playlistSpotDiv}>out of</div>
                                <input type="number" id="playlist_total_slots" name="playlist_total_slots" placeholder="Total Number of Playlists" required min={1} value={props.bid.no_of_tracks_playlist} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={classes.formFieldSet}>
                            <label for="length_promotion">Length of Promotion</label>
                            <input type="number" id="length_promotion" name="length_promotion" placeholder="Length of Promotion" required min={1} onChange={handleDaysFeaturedChange} value={enteredDaysFeatured} />
                        </div>
                    </div>
                    <div className={classes.form_btn_grp}>
                        <button >Re-negotiate</button>
                        <button type="button" className={classes.btn_submit} onClick={handleAcceptBtnOnClick}>Accept</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CuratorRespondBidFormComponent;