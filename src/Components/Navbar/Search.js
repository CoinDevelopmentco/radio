import React from 'react';


function Search({value}) {

    return(
        <input className="input" type="test" placeholder="Search Music" onChange={event => value.onChange(event.target.value)} />
    );
}

export default Search;

