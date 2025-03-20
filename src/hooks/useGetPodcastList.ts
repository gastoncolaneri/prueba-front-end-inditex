import { useQuery } from "@tanstack/react-query";
import { fetchPodcastList } from "../api";

const useGetPodcastList = () => {
  return useQuery({
    queryKey: ["podcastList"],
    queryFn: fetchPodcastList,
  });
};

export { useGetPodcastList };
