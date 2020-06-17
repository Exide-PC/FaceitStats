export interface StatsModel {
    player: PlayerInfo;
    matches: MatchTotalStats[];
}

export interface PlayerInfo {
    name: string;
    elo: number;
    avatar: string;
}

export interface MatchTotalStats {
    map: string;
    roundsWon: number;
    roundsLost: number;
    kills: number;
    deaths: number;
    avgLevels: number;
    date: Date;
}