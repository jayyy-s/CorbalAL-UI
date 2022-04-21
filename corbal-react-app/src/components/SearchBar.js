import classes from  './css/SearchBar.module.css'

function SearchBar(props){
    return(
            <input className={classes.searchBar} type="text" id={props.id} name={props.name} placeholder={props.placeholder} />
       
    )
}

export default SearchBar;