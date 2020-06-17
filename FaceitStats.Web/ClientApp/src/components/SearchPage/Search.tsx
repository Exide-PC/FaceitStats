import React, { useState, ChangeEvent } from 'react';
import { Input, Button } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router';

interface Props extends RouteComponentProps {
    
}

const Search = ({history}: Props) => {

    //------------------ State ------------------
    const [name, setName] = useState<string>('');

    return (
        <div className='search-container'>
            <h1>
                Faceit Stats
            </h1>
            <div className='content'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value.trim())}
                    placeholder='Profile name'
                />
                <Button
                    disabled={!name}
                    onClick={() => history.push(`/stats/${name}`)}
                >
                    Search
                </Button>
            </div>
        </div>
    )
}

export default withRouter<Props, typeof Search>(Search);