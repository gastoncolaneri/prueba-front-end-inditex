import { PodcastDetailsResponse } from "../types";

async function fetchPodcastDetails(id: string) {
  const PODCAST_DETAILS_URL = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`;

  const response = await fetch(PODCAST_DETAILS_URL);

  return (await response.json()) as PodcastDetailsResponse;
}

export { fetchPodcastDetails };
