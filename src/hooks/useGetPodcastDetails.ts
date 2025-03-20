import { useQuery } from "@tanstack/react-query";
import { fetchPodcastDetails } from "../api";

const useGetPodcastDetails = (id: string) => {
  return useQuery({
    queryKey: ["podcastDetails"],
    queryFn: async () => await fetchPodcastDetails(id),
  });
};

export { useGetPodcastDetails };
