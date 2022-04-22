import classes from './css/SortControl.module.css';

function SortControl(props) {

    const options = props.options.map((option) => {
        return (
            <option key={option.option} value={option.option}>
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