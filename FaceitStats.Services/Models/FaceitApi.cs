using Newtonsoft.Json;

namespace FaceitStats.Services.Models.FaceitApi
{
    public class Player
    {
        [JsonProperty("avatar")]
        public string Avatar { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }

        [JsonProperty("cover_featured_image")]
        public string CoverFeaturedImage { get; set; }

        [JsonProperty("cover_image")]
        public string CoverImage { get; set; }

        [JsonProperty("faceit_url")]
        public string FaceitUrl { get; set; }

        [JsonProperty("friends_ids")]
        public string[] FriendsIds { get; set; }

        [JsonProperty("games")]
        public Games Games { get; set; }

        [JsonProperty("membership_type")]
        public string MembershipType { get; set; }

        [JsonProperty("memberships")]
        public string[] Memberships { get; set; }

        [JsonProperty("new_steam_id")]
        public string NewSteamId { get; set; }

        [JsonProperty("nickname")]
        public string Nickname { get; set; }

        [JsonProperty("platforms")]
        public Platforms Platforms { get; set; }

        [JsonProperty("player_id")]
        public string PlayerId { get; set; }

        [JsonProperty("settings")]
        public Settings Settings { get; set; }

        [JsonProperty("steam_id_64")]
        public string SteamId64 { get; set; }

        [JsonProperty("steam_nickname")]
        public string SteamNickname { get; set; }
    }

    public class Games
    {
        [JsonProperty("additionalProp1")]
        public AdditionalProp AdditionalProp1 { get; set; }

        [JsonProperty("additionalProp2")]
        public AdditionalProp AdditionalProp2 { get; set; }

        [JsonProperty("additionalProp3")]
        public AdditionalProp AdditionalProp3 { get; set; }
    }

    public class AdditionalProp
    {
        [JsonProperty("faceit_elo")]
        public long FaceitElo { get; set; }

        [JsonProperty("game_player_id")]
        public string GamePlayerId { get; set; }

        [JsonProperty("game_player_name")]
        public string GamePlayerName { get; set; }

        [JsonProperty("game_profile_id")]
        public string GameProfileId { get; set; }

        [JsonProperty("region")]
        public string Region { get; set; }

        [JsonProperty("skill_level")]
        public long SkillLevel { get; set; }

        [JsonProperty("skill_level_label")]
        public string SkillLevelLabel { get; set; }
    }

    public class Platforms
    {
        [JsonProperty("additionalProp1")]
        public string AdditionalProp1 { get; set; }

        [JsonProperty("additionalProp2")]
        public string AdditionalProp2 { get; set; }

        [JsonProperty("additionalProp3")]
        public string AdditionalProp3 { get; set; }
    }

    public class Settings
    {
        [JsonProperty("language")]
        public string Language { get; set; }
    }
}