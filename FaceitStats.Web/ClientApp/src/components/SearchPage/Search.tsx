import React, { useState, ChangeEvent } from 'react';
import { Input, Button } from 'reactstrap';

const Search = () => {

    //------------------ State ------------------
    const [name, setName] = useState<string>('');
    
    return (
        <div className='search-container'>
            <div className='content-wrapper'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Profile name'
                />
                <Button>
                    Search
                </Button>
            </div>
        </div>
    )
}

export default Search;