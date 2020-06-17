import React, { useState, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
import { withRouter, RouteComponentProps } from 'react-router';
import { loadStats } from '../../services/api';
import { StatsModel } from '../../services/models';
import ClipLoader from "react-spinners/ClipLoader";

type Props = RouteComponentProps<{ player: string }>;

const StatsPage = (props: Props) => {

    const player = props.match.params.player;

    //------------------ State ------------------
    const [name, setName] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [stats, setStats] = useState<StatsModel>();

    //----------------- Effects -----------------
    useEffect(() => {
        if (player) {
            loadData();
        }
    }, [player]);

    const loadData = async () => {
        // setIsLoading(true);
        const stats = await loadStats(player);
        setStats(stats);
        // setIsLoading(false);
    }

    return (
        <div className='container stats-content'>
            {isLoading ? (
                <div style={{textAlign: 'center'}}>
                    <ClipLoader color='orange' size={100}/>
                </div>
            ) : (
                <>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Profile name'
                    />
                    <Button>
                        Search
                    </Button>
                </>
            )}
        </div>
    )
}

export default withRouter(StatsPage);