import { PodcastDetailsResponse } from "../types";

async function fetchPodcastDetails(id: string) {
  const PODCAST_DETAILS_URL = `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`;

  const response = await fetch(PODCAST_DETAILS_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch podcast details: ${response.statusText}`);
  }

  return (await response.json()) as PodcastDetailsResponse;
}

export { fetchPodcastDetails };
