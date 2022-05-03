import { useState } from 'react';
import { useSelector } from 'react-redux';
import { endPoint } from '../config';
import { GENRES } from '../utilities/constants';
import classes from '../components/css/PitchModalComponent.module.css';
import CloseIcon from '@mui/icons-material/Close';
import ReactDOM from 'react-dom';


const Backdrop = (props) => {
    return <div className={classes.backdrop} />;
};

const PitchModal = (props) => {
    const tracks = useSelector((state) => state.artistTracks.tracks);

    const [isMessageShown, setIsMessageShown] = useState(false);
    const [message, setMessage] = useState("");
    const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
    const user = useSelector((state) => state.user.user);

    const tracksOptions = tracks.map((track) => {
        return (<option key={track.id} value={track.id} >{track.name}</option>)
    })
    const genreOptions = GENRES.map((genre) => {
        return (<option key={genre} value={genre}>{genre}</option>)
    })

    const pitchSubmit = (pitch) => {

        const postNewPitch = async (pitch) => {

            const postPitch = async () => {
                const response = await fetch(
                    `${endPoint}/pitches`,
                    {
                        method: 'POST',
                        body: JSON.stringify(pitch),
                        headers: {
                            "Content-type": "application/json"
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error('Posting pitch data failed.');
                }
                return await response.json();

            };

            try {
                const pitchResp = await postPitch();
                return pitchResp;
            } catch (error) {
                setIsMessageShown(true);
                setMessage("There was an error! Please try again");
                console.log("There was an error posting a new bid");
            }
        };

        postNewPitch(pitch);
        setIsMessageShown(true);
        setMessage("Song Submitted")
    }

    const handleBackBtnOnClick = () => {
        props.handleClosePitchModal();
    }

    const handlePitchOnSubmit = (event) => {
        event.preventDefault();
        // "id": 1,
        // "artist_id": 1,
        // "song_id": "6Q4PYJtrq8CBx7YCY5IyRN",
        // "song_name": "Party Ain't Over (feat. Usher & Afrojack)",
        // "description": "Lorem ipsum dolor sit amet, consectetur adip",
        // "genre": "Pop",
        // "created_at": "2022-04-25 13:23:44"

        const today = new Date().toISOString();
        const date = today.split('T')[0];
        const time = today.split('T')[1].slice(0, 8);

        const pitch = {
            artist_id: user.id,
            song_id: selectedTrack.id,
            song_name: selectedTrack.name,
            genre: event.target.genre_options.value,
            description: "Lorem ipsum dolor sit amet, consectetur adip",
            created_at: `${date} ${time}`
        }

        pitchSubmit(pitch);
    }

    const handleTrackChange = (event) => {
        const selectedTrack = tracks.filter((track) => track.id === event.currentTarget.value)[0];
        setSelectedTrack(selectedTrack);
    }

    const millisToMinutesAndSeconds = (millis) => {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <div className={classes.modal}>
            <CloseIcon style={{ position: 'absolute', right: '5px', top: '5px', fontSize: '3rem' }} onClick={props.handleClosePitchModal} />
            {/* displaying a success or error message */}
            {isMessageShown && <div className={classes.modalMessageContainer}><div className={classes.modalMessage}>{message}</div></div>}
            {/*displaying a form*/}
           {!isMessageShown && <div className={classes.modalContainer}>
                <div className={classes.modalTitle}>Select a Song</div>
                <div className={classes.divider}></div>
                <form onSubmit={handlePitchOnSubmit}>
                    <div className={classes.formRow}>
                        <div>
                            <div className={classes.formControlSet}>
                                <label>Select Song</label>
                                <select name="track_options" id="track_options" onChange={handleTrackChange}>
                                    {tracksOptions}
                                </select>
                            </div>
                            <div className={classes.formControlSet}>
                                <label>Select Genre</label>
                                <select name="genre_options" id="genre_options">
                                    {genreOptions}
                                </select>
                            </div>
                        </div>
                        {selectedTrack && <img className={classes.trackImg} src={selectedTrack.album.images[0].url} />}
                    </div>
                    <div className={classes.formRow}>

                        <div className={classes.formControlSet}>
                            <label>Song Title</label>
                            <input type="text" id="track_name" name="track_name" disbaled value={selectedTrack.name} />
                        </div>
                        <div className={classes.formControlSet}>
                            <label>Song Duration</label>
                            <input type="text" id="track_duration" name="track_duration" disabled value={millisToMinutesAndSeconds(selectedTrack.duration_ms)} />
                        </div>
                        <div className={classes.formControlSet}>
                            <label>Album Name</label>
                            <input type="text" id="bid_price" name="bid_price" disabled value={selectedTrack.album.name} />
                        </div>
                    </div>
                    <div className={classes.btn_grp}>
                        <button className={classes.btn_back} onClick={handleBackBtnOnClick}>
                            Back
                        </button>
                        <button className={classes.btn_submit} >
                            Submit Music
                        </button>
                    </div>
                </form>

            </div> }
        </div>
    )

}

function PitchModalComponent(props) {
    return (<>
        {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <PitchModal
                handleClosePitchModal={props.handleClosePitchModal}
            />,
            document.getElementById('modal-root')
        )}
    </>)
}

export default PitchModalComponent;