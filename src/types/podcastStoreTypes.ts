import { EpisodeDetails } from "./podcastDetails";
import { Podcast } from "./podcastListTypes";

export interface PodcastSelected {
  podcastListFiltered: Podcast[] | undefined;
  setPodcastListFiltered: (value: Podcast[]) => void;
  podcastSelected: Podcast | undefined;
  setPodcastSelected: (value: Podcast) => void;
  episodeSelected: EpisodeDetails | undefined;
  setEpisodeSelected: (value: EpisodeDetails) => void;
  isFiltering: boolean;
  setIsFiltering: (value: boolean) => void;
}
