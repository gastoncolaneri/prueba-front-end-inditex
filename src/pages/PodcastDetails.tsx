import { useParams } from "react-router";
import { useGetPodcastDetails } from "../hooks/useGetPodcastDetails";
import { PodcastInfoCard } from "../components/podcastDetails/PodcastInfoCard";
import { PodcastList } from "../components/podcastDetails/PodcastList";
import { useGetPodcastList } from "../hooks/useGetPodcastList";
import { usePodcastSelected } from "../store/podcastStore";
import { useEffect } from "react";

const PodcastDetails = () => {
  const params = useParams();
  const { data: podcastDetails } = useGetPodcastDetails(
    params?.idPodcast || ""
  );
  const { data: podcastInfo } = useGetPodcastList();

  const setPodcastSelected = usePodcastSelected(
    (state) => state.setPodcastSelected
  );

  const podcastList = podcastInfo?.feed?.entry;

  useEffect(() => {
    const podcast = podcastList?.find(
      (podcast) => podcast?.id?.attributes?.["im:id"] === params?.idPodcast
    );
    if (podcast) setPodcastSelected(podcast);
  }, [params?.idPodcast, podcastList, setPodcastSelected]);

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
