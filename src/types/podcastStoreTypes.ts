import { EpisodeDetails } from "./podcastDetailsTypes";
import { Podcast } from "./podcastListTypes";

export interface PodcastSelected {
  podcastSelected: Podcast | undefined;
  setPodcastSelected: (value: Podcast) => void;
  episodeSelected: EpisodeDetails | undefined;
  setEpisodeSelected: (value: EpisodeDetails) => void;
}
