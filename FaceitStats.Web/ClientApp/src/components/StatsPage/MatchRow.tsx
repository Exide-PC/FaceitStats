import React from 'react';
import { MatchTotalStats } from '../../services/models';

interface Props {
    match: MatchTotalStats;
}

const good = 'label-good';
const normal = 'label-normal';
const bad = 'label-bad';

const MatchRow = ({match}: Props) => {
    const {map, roundsWon, roundsLost, kills, deaths, avgLevels, date } = match;

    const kd = kills / deaths;
    const kpr = kills / (roundsWon + roundsLost);

    return (
        <tr>
            <td>
                {map}
            </td>
            <td>
                <span className={roundsWon > roundsLost ? good : bad}>
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
                <span className={kd >= 1.1 ? good : kd > 1 ? normal : bad}>
                    {kd}
                </span>
            </td>
            <td>
                <span className={kpr >= 0.9 ? good : kpr > 0.7 ? normal : bad}>
                    {kpr}
                </span>
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