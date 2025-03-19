import { PodcastListResponse } from "../types";

async function fetchPodcastData(url: string) {

  const response = await fetch(url);

  return (await response.json()) as PodcastListResponse;
}

export { fetchPodcastData };
