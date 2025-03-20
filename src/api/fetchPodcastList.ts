import { PodcastListResponse } from "../types";

async function fetchPodcastList() {
  const PODCAST_LIST_URL =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

  const response = await fetch(PODCAST_LIST_URL);

  return (await response.json()) as PodcastListResponse;
}

export { fetchPodcastList };
