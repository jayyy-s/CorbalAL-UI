import classes from './css/ArtistRespondBidFormComponent.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateArtistOffer } from '../store/artist-offers-slice';
import { GENRES } from '../utilities/constants';
import { endPoint } from '../config';
import CloseIcon from '@mui/icons-material/Close';


function ArtistRespondBidFormComponent(props) {

    const [enteredPlaylistSpot, setPlaylistSpot] = useState(props.offer.playlist_spot);
    const [enteredPrice, setPrice] = useState(props.offer.price);
    const [enteredDaysFeatured, setDaysFeatured] = useState(props.offer.days_featured);

    const dispatch = useDispatch();

    const handleAcceptBtnOnClick = async (event) => {
        event.preventDefault();

        const offer = {
            ...props.offer,
            status: "Completed"
        }

        dispatch(updateArtistOffer(offer));

        props.closeBidForm();
    }

    const handleRenegotiateFormSubmit = async (event) => {
        event.preventDefault();

        const resp = {
            bid_id: props.offer.id,
            playlist_spot: enteredPlaylistSpot,
            price: enteredPrice,
            days_featured: enteredDaysFeatured
        }

        const postArtistResponse = async () => {
            const response = await fetch(
                `${endPoint}/responses`,
                {
                    method: 'POST',
                    body: JSON.stringify(resp),
                    headers: {
                        "Content-type": "application/json"
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Posting artist response data data failed.');
            }
            return await response.json();

        };

        try {
            const data = await postArtistResponse();
            props.closeBidForm();

        } catch (error) {
            console.error("error while posting artist response", error)
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
                        <div className={classes.bidInfoValue}>{props.offer.price}</div>
                    </div>
                    <div className={classes.bidInfo}>
                        <div className={classes.bidInfoLabel}>Genre of Playlist</div>
                        <div className={classes.bidInfoValue}>{props.offer.genre}</div>
                    </div>
                </div>
                <div className={classes.bidInfoRow}>
                    <div className={classes.bidInfo}>
                        <div className={classes.bidInfoLabel}>Placement on playlist:</div>
                        <div>{props.offer.playlist_spot}/{props.offer.no_of_tracks_playlist}</div>
                    </div>
                </div>
                <div className={classes.bidInfoRow}>
                    <div className={classes.bidInfo}>
                        <div>Length of promotion:</div>
                        <div>{props.offer.days_featured} Days</div>
                    </div>
                </div>
            </div>

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
                            <input type="text" id="bid_genre" name="bid_genre" value={props.offer.genre} />
                        </div>
                    </div>
                    <div className={classes.formRow}>

                        <div className={classes.formFieldSet}>
                            <label>Placement On Playlist</label>
                            <div className={classes.playlistSpot}>
                                <input type="number" id="playlist_slot" name="playlist_slot" placeholder="Slot#" required min={1} value={enteredPlaylistSpot} onChange={handlePlaylistSlotChange} />
                                <div className={classes.playlistSpotDiv}>out of</div>
                                <input type="number" id="playlist_total_slots" name="playlist_total_slots" placeholder="Total Number of Playlists" required min={1} value={props.offer.no_of_tracks_playlist} />
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

export default ArtistRespondBidFormComponent;