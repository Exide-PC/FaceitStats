using System;
using System.Collections.Generic;

namespace FaceitStats.Services.Models
{
    public class StatsModel
    {
        public PlayerInfo Player { get; set; }
        public List<MatchTotalStats> Matches { get; set; }
    }

    public class PlayerInfo
    {
        public string Name { get; set; }
        public int Elo { get; set; }
        public string Avatar { get; set; }
    }

    public class MatchTotalStats
    {
        public string Map { get; set; }
        public int RoundsWon { get; set; }
        public int RoundsLost { get; set; }
        public int Kills { get; set; }
        public int Deaths { get; set; }
        public int AvgLevels { get; set; }
        public DateTime Date { get; set; }
    }
}