import {useState} from 'react';
import './css/pitch_modal.css';
import {useSelector} from 'react-redux';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
//import fetchSongs from "../scripts/spotify_data";
// import 'react-bootstrap';

function PitchModal(props) {
    const [songDropdownIsActive, setSongDropdownIsActive] = useState(false);
    const [licenseDropdownIsActive, setLiscenseDropdownIsActive] = useState(false);
    const [song, setSong] = useState('');
    const [license, setLicense] = useState('');
    const tracks = useSelector((state)=> state.artistTracks.tracks);

    // making the assumption that username will be artist name
    // const artistName = props.artistName;
    const [genre, setGenre] = useState('');
    const [language, setLanguage] = useState('');

   // const songs = fetchSongs();
    // TODO: song info from backend should include whether or not is has been pitched
    const unpitchedSongs = tracks.map((song) => {
        const songBid = (
            <div className="dropdown-item" key={`${song.uri}:${song.name}`} onClick={e => {
                setSong(song.name);
                setSongDropdownIsActive(!songDropdownIsActive)
            }}>
                {song.name}
            </div>
        );
        return songBid;
    });

    return (
        <div className="modalContainer">
            <div className="title">
                Upload song
                <button className="exitModalButton" onClick={() => props.closePitchModal(false)}>X</button>
            </div>
            <div className="pitchModalLine" />
            <div className="pitchContainer">
                <img className="profilePictureContainer" src={props.src} alt="where did ur prof pic go xD" />
                <div className="pitchInformationContainer">
                    <div className="fieldTitle">Select Song</div>
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={e => setSongDropdownIsActive(!songDropdownIsActive)}>
                            &#8203; {song}
                            <span className="fas fa-caret-down">▼</span>
                        </div>
                        {songDropdownIsActive &&
                            <div className="dropdown-content">
                                <div className="dropdown-item" onClick={e => {
                                    setSong('');
                                    setSongDropdownIsActive(!songDropdownIsActive)
                                }}>
                                    &#8203;
                                </div>
                                {unpitchedSongs}
                            </div>}
                    </div>
                    <form>
                        <div className="fieldTitle">Artist Name</div>
                        <input class="fieldForm"></input>

                        <div className="fieldFormMiniContainer">
                            <div className="fieldTitleMini">Genre</div>
                            <div className="fieldFormGutter"></div>
                            <div className="fieldTitleMini">Language</div>
                        </div>
                        <div className="fieldFormMiniContainer">
                            <input class="fieldFormMini" value={genre} onChange={e => setGenre(e.value)}></input>
                            <div className="fieldFormGutter"></div>
                            <input class="fieldFormMini" value={language} onChange={e => setLanguage(e.value)}></input>
                        </div>

                        <div className="fieldTitle">Additional Tags</div>
                        <input class="fieldForm"></input>
                    </form>

                    <div className="fieldTitle">License</div>
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={e => setLiscenseDropdownIsActive(!licenseDropdownIsActive)}>
                            &#8203; {license}
                            <span className="fas fa-caret-down">▼</span>
                        </div>
                        {licenseDropdownIsActive &&
                            <div className="dropdown-content">
                                <div className="dropdown-item" onClick={e => {
                                    setLicense('');
                                    setLiscenseDropdownIsActive(!licenseDropdownIsActive)
                                }}>
                                    &#8203;
                                </div>
                                <div className="dropdown-item" onClick={e => {
                                    setLicense('All Rights Reserved');
                                    setLiscenseDropdownIsActive(!licenseDropdownIsActive)
                                }}>
                                    All Rights Reserved
                                </div>
                                <div className="dropdown-item" onClick={e => {
                                    setLicense('Creative Commons');
                                    setLiscenseDropdownIsActive(!licenseDropdownIsActive)
                                }}>
                                    Creative Commons
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
            <button className="submitButton">
                <div className="buttonTitle">Submit Music</div>
            </button>
        </div>
    )
}

export default PitchModal;