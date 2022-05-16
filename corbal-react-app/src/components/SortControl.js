import classes from './css/SortControl.module.css';

/**
 * A reusable component to render various options for sorting.
 * The props object should have array called "options" containing the values for different ways of sorting
 * An "option" elenent in the "options" array is an object structured as {option : "", value : ""}
 * 
 * Example : props :{
 *  options : [
 *  {option : "Song Name", value : "Name"},
 * {option : "Duration", value : "Duration"}
 * ]
 * }
 * @param {object} props 
 * @returns 
 */
function SortControl(props) {

    const options = props.options.map((option) => {
        return (
            <option key={option.option} value={option.value}>
                {option.option}
            </option>
        )
    })

    const handleSortInputChange=(event)=>{   
        props.onSortInputChange(event.currentTarget.value);
    }

    return (
        <div className={classes.sortContainer}>
            <label>Sort By</label>
            <select onChange={handleSortInputChange}>
                {options}
            </select>
        </div>
    )
}

export default SortControl;