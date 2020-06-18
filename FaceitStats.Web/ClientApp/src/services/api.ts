
import { StatsModel } from './models'
import _fetch from '../_fetch';

const statsMock: StatsModel = {
    player: {
        avatar: 'dummy',
        elo: 3001,
        name: 'Exide'
    },
    matches: [
        {
            avgLevels: 15,
            date: new Date(),
            kills: 30,
            deaths: 1,
            map: 'de_mirage',
            roundsWon: 16,
            roundsLost: 0
        },
        {
            avgLevels: 15,
            date: new Date(),
            kills: 30,
            deaths: 1,
            map: 'de_mirage',
            roundsWon: 16,
            roundsLost: 0
        },
        {
            avgLevels: 15,
            date: new Date(),
            kills: 30,
            deaths: 1,
            map: 'de_mirage',
            roundsWon: 16,
            roundsLost: 0
        },
        {
            avgLevels: 15,
            date: new Date(),
            kills: 30,
            deaths: 1,
            map: 'de_mirage',
            roundsWon: 16,
            roundsLost: 0
        }
    ]
}

export const loadStats = async (player: string): Promise<StatsModel> => {
    // return await _fetch<StatsModel>('api/stats', 'GET', { player });
    return statsMock;
}

