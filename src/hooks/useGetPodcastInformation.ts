import { useQuery } from "@tanstack/react-query";
import { PodcastDetails, PodcastListResponse } from "../types";

const useGetPodcastInformation = ({
  queryKey,
  queryFn,
}: {
  queryKey: string;
  queryFn: () => Promise<PodcastListResponse | PodcastDetails>;
}) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn,
  });
};

export { useGetPodcastInformation };
