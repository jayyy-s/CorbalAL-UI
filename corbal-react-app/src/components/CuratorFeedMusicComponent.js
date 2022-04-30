import PitchCard from './CuratorFeedPitchCard';
import SortControl from './SortControl';
import classes from './css/CuratorFeedMusicComponent.module.css';
import {useState, useEffect} from 'react';
import PaginationComponent from './PaginationComponent';

function CuratorFeedMusicComponent(props) {

    const [pitches, setPitches] = useState(props.pitches);
    const [sortOption, setSortOption] = useState('Price');
    const [isSorted, setIsSorted] = useState(false);

    useEffect(()=>{
     setPitches(props.pitches); 
     setIsSorted(false);  
    },[props]);

    // const pitchCards = pitches.map((pitch) => {
    //     return (
    //         <PitchCard key={pitch.id} pitch={pitch} />
    //     )
    // })

        /**
     * Function to sort the pitches everytime the component rerenders.
     * Sorting occurs only when the isSorted Option is set to false.
     * This will cause a component rerender.
     * Using the if statement to ensure the rerender happens only once
     */
         const sortPitches = () => {
            if (!isSorted) {
                let sortedPitches = [...pitches];
                switch (sortOption) {
                    case 'Recent':
                        sortedPitches = [...pitches];
                        sortedPitches.sort((a, b) => new Date(a.created_at.split(' ')[0]) - new Date(b.created_at.split(' ')[0]))
                        break;
                    case 'Name':
                        sortedPitches = [...pitches];
                        sortedPitches.sort((a, b) => {
                            if (a.song_name < b.song_name) {
                                return -1;
                                }
                                if (a.song_name > b.song_name) {
                                return 1;
                                }
                                return 0;
                        })
                        break;
                }
                setPitches(sortedPitches);
                setIsSorted(true);
            }
        }
    
        //calling sort pitches function to sort the pitches before rendering them.
        sortPitches();


    const handleSortInputChange = (selectedOption) => {
        setIsSorted(false);
        setSortOption(selectedOption);
    }

    return (
        <>
            <div className={`${classes.ml_1} ${classes.title}`}>
                <div>
                {props.title}
                </div>
                <SortControl options={[{ option: "Most Recent", value: "Recent" }, { option: "Song Name", value: "Name" }]} onSortInputChange={handleSortInputChange} />
            </div>
            <div className={classes.divider}></div>
            <div>
                    <PaginationComponent  data={pitches} RenderComponent={PitchCard} dataLimit={props.dataLimit} handleOnClick={props.handleCreateBidOnClick} />
            </div>
        </>
    )
}

export default CuratorFeedMusicComponent;