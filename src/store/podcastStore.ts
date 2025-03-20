import { create } from "zustand";
import { PodcastSelected } from "../types";
import { Podcast } from "../types/podcastList";

const usePodcastSelected = create<PodcastSelected>((set) => ({
  podcastSelected: undefined,
  setPodcastSelected: (value: Podcast) => {
    set(() => ({ podcastSelected: value }));
  },
}));

export { usePodcastSelected };
