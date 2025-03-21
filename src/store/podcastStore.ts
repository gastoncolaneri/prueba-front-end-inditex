import { create } from "zustand";
import { PodcastSelected } from "../types";
import { Podcast } from "../types/podcastListTypes";
import { EpisodeDetails } from "../types/podcastDetailsTypes";

const usePodcastSelected = create<PodcastSelected>((set) => ({
  podcastSelected: undefined,
  setPodcastSelected: (value: Podcast) => {
    set(() => ({ podcastSelected: value }));
  },
  episodeSelected: undefined,
  setEpisodeSelected: (value: EpisodeDetails) => {
    set(() => ({ episodeSelected: value }));
  },
}));

export { usePodcastSelected };
