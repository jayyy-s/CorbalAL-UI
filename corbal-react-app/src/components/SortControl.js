import classes from './css/SortControl.module.css';

function SortControl(props) {

    const options = props.options.map((optionValue) => {
        return (
            <option value={optionValue}>
                {optionValue}
            </option>
        )
    })

    return (
        <div className="sortContainer">
            <label>Sort By</label>
            <select>
                {options}
            </select>
        </div>
    )
}

export default SortControl;