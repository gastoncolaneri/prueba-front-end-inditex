import { useEffect } from "react";
import { useParams } from "react-router";
import { useGetPodcastDetails } from "../hooks/useGetPodcastDetails";
import { PodcastInfoCard } from "../components/podcastDetails/PodcastInfoCard";
import { PodcastList } from "../components/podcastDetails/PodcastList";
import { useGetPodcastList } from "../hooks/useGetPodcastList";
import { usePodcastSelected } from "../store/podcastStore";

const PodcastDetails = () => {
  const { podcastId } = useParams();
  const { data: podcastDetails, isLoading } = useGetPodcastDetails(
    podcastId || ""
  );
  const { data: podcastInfo } = useGetPodcastList();
  const setPodcastSelected = usePodcastSelected(
    (state) => state.setPodcastSelected
  );
  const setIsLoading = usePodcastSelected((state) => state.setIsLoading);

  const podcastList = podcastInfo?.feed?.entry;

  useEffect(() => {
    setIsLoading(isLoading);
    const podcast = podcastList?.find(
      (podcast) => podcast?.id?.attributes?.["im:id"] === podcastId
    );
    if (podcast) setPodcastSelected(podcast);
  }, [isLoading, podcastId, podcastList, setIsLoading, setPodcastSelected]);

  return podcastList?.length &&
    podcastDetails &&
    Object.keys(podcastDetails).length ? (
    <div className="flex flex-col justify-between gap-10 md:gap:30 md:flex-row">
      <PodcastInfoCard />
      <PodcastList
        episodesCount={podcastDetails?.resultCount}
        episodeList={podcastDetails?.results}
      />
    </div>
  ) : null;
};

export { PodcastDetails };
