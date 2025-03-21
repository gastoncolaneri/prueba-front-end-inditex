import { useEffect } from "react";
import { useParams } from "react-router";
import { PodcastInfoCard } from "../components/podcastDetails/PodcastInfoCard";
import { useGetPodcastDetails } from "../hooks/useGetPodcastDetails";
import { usePodcastSelected } from "../store/podcastStore";
import { useGetPodcastList } from "../hooks/useGetPodcastList";
import { EpisodeInfoCard } from "../components/episodeDetails/EpisodeInfoCard";

const EpisodeDetails = () => {
  const { idPodcast, idEpisode } = useParams();

  const { data: podcastDetails } = useGetPodcastDetails(idPodcast || "");
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
      (podcast) => podcast?.id?.attributes?.["im:id"] === idPodcast
    );
    const episode = podcastDetails?.results?.find(
      (episode) => episode?.episodeGuid === idEpisode
    );
    if (episode) setEpisodeSelected(episode);
    if (podcast) setPodcastSelected(podcast);
  }, [
    idEpisode,
    idPodcast,
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
