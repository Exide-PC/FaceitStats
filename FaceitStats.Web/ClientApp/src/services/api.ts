
import { StatsModel } from './models'
import _fetch from '../_fetch';

export const loadStats = async (player: string): Promise<StatsModel> => {
    return await _fetch<StatsModel>('api/stats', 'GET', { player });
}

