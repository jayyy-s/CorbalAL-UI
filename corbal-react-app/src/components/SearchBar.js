import classes from  './css/SearchBar.module.css'
/**
 * A reusable functional component to render a search bar
 * The props object should have id, name and placeholder for the input tag
 * @param {object} props 
 * @returns 
 */
function SearchBar(props){
    
    const handleSearchInputChange = (event) =>{
        props.onSearchInputChange(event.target.value);
    }
    
    return(
            <input className={classes.searchBar} type="text" id={props.id} name={props.name} placeholder={props.placeholder} onChange={handleSearchInputChange}/> 
    )
}

export default SearchBar;