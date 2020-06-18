import React from 'react';
import { MatchTotalStats } from '../../services/models';

interface Props {
    match: MatchTotalStats;
}

const MatchRow = ({match}: Props) => {
    const {map, roundsWon, roundsLost, kills, deaths, avgLevels, date } = match;
    return (
        <tr>
            <td>
                {map}
            </td>
            <td>
                <span className={roundsWon < roundsLost ? 'label-won' : 'label-lost'}>
                    {roundsWon}/{roundsLost}
                </span>
            </td>
            <td>
                {kills}
            </td>
            <td>
                {deaths}
            </td>
            <td>
                {kills / deaths}
            </td>
            <td>
                {kills / (roundsWon + roundsLost)}
            </td>
            <td>
                {avgLevels}
            </td>
            <td>
                {date.toLocaleTimeString()}
            </td>
        </tr>
    );
}

export default MatchRow;