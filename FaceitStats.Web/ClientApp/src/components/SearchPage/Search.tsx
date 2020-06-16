import React, { useState, ChangeEvent } from 'react';
import { Input } from 'reactstrap';

const Search = () => {

    //------------------ State ------------------
    const [name, setName] = useState<string>('');
    
    return (
        <div className='search-container'>
            <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Profile name'
            />
        </div>
    )
}

export default Search;