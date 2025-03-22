import { create } from "zustand";
import { PodcastSelected } from "../types";
import { Podcast } from "../types/podcastListTypes";
import { EpisodeDetails } from "../types/podcastDetails";

const usePodcastSelected = create<PodcastSelected>((set) => ({
  podcastSelected: undefined,
  setPodcastSelected: (value: Podcast) => {
    set(() => ({ podcastSelected: value }));
  },
  episodeSelected: undefined,
  setEpisodeSelected: (value: EpisodeDetails) => {
    set(() => ({ episodeSelected: value }));
  },
  podcastListFiltered: [],
  setPodcastListFiltered: (value: Podcast[]) => {
    set(() => ({ podcastListFiltered: value }));
  },
  isFiltering: false,
  setIsFiltering: (value: boolean) => {
    set(() => ({ isFiltering: value }));
  },
  isLoading: false,
  setIsLoading: (value: boolean) => {
    set(() => ({ isLoading: value }));
  },
}));

export { usePodcastSelected };
