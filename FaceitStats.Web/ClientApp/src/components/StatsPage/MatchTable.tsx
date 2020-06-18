import React from 'react';
import { MatchTotalStats } from '../../services/models';
import MatchRow from './MatchRow';

interface Props {
    matches: MatchTotalStats[];
}

const MatchTable = ({matches}: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    {
                        [
                            {
                                name: 'Map',
                                width: '10%'
                            },
                            {
                                name: 'Rounds won',
                                width: '10%'
                            },
                            {
                                name: 'Rounds lost',
                                width: '10%'
                            },
                            {
                                name: 'Kills',
                                width: '10%'
                            },
                            {
                                name: 'Deaths',
                                width: '10%'
                            },
                            {
                                name: 'KD',
                                width: '10%'
                            },
                            {
                                name: 'KPR',
                                width: '10%'
                            },
                            {
                                name: 'Avg Levels',
                                width: '10%'
                            },
                            {
                                name: 'Date',
                                width: '20%'
                            },
                        ].map(col => (
                            <th key={col.name} style={{width: col.width}}>
                                {col.name}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {matches.map((m, i) => (
                    <MatchRow match={m} key={i}/>
                ))}
            </tbody>
        </table>
    );
}

export default MatchTable;