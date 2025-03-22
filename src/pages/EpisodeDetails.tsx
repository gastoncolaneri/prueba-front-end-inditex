import { useEffect } from "react";
import { useParams } from "react-router";
import { PodcastInfoCard } from "../components/podcastDetails/PodcastInfoCard";
import { useGetPodcastDetails } from "../hooks/useGetPodcastDetails";
import { usePodcastSelected } from "../store/podcastStore";
import { useGetPodcastList } from "../hooks/useGetPodcastList";
import { EpisodeInfoCard } from "../components/episodeDetails/episodeInfoCard";

const EpisodeDetails = () => {
  const { podcastId, episodeId } = useParams();
  const { data: podcastDetails } = useGetPodcastDetails(podcastId || "");
  const { data: podcastInfo } = useGetPodcastList();
  const setPodcastSelected = usePodcastSelected(
    (state) => state.setPodcastSelected
  );
  const setEpisodeSelected = usePodcastSelected(
    (state) => state.setEpisodeSelected
  );
  const podcastList = podcastInfo?.feed?.entry;

  useEffect(() => {
    const podcast = podcastList?.find(
      (podcast) => podcast?.id?.attributes?.["im:id"] === podcastId
    );
    const episode = podcastDetails?.results?.find(
      (episode) => episode?.episodeGuid === episodeId
    );
    if (episode) setEpisodeSelected(episode);
    if (podcast) setPodcastSelected(podcast);
  }, [
    episodeId,
    podcastId,
    podcastDetails?.results,
    podcastList,
    setEpisodeSelected,
    setPodcastSelected,
  ]);

  return (
    <div className="flex flex-col justify-between gap-10 md:gap:30 md:flex-row">
      <PodcastInfoCard />
      <EpisodeInfoCard />
    </div>
  );
};

export { EpisodeDetails };
