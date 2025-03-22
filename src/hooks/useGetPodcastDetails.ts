import { useQuery } from "@tanstack/react-query";
import { fetchPodcastDetails } from "../api";

const useGetPodcastDetails = (id = "") => {
  return useQuery({
    queryKey: ["podcastDetails", id],
    queryFn: async () => await fetchPodcastDetails(id),
    enabled: !!id,
  });
};

export { useGetPodcastDetails };
