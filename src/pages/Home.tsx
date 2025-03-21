import { Filter } from "../components/home/Filter";
import { PodcastCard } from "../components/home/PodcastCard";
import { useGetPodcastList } from "../hooks/useGetPodcastList";
import { usePodcastSelected } from "../store/podcastStore";

const Home = () => {
  const { data, isSuccess, isLoading } = useGetPodcastList();

  const podcastListFiltered = usePodcastSelected(
    (state) => state.podcastListFiltered
  );

  const isFiltering = usePodcastSelected((state) => state.isFiltering);

  const podcastList = () => {
    if (isFiltering) {
      return podcastListFiltered;
    }
    return data?.feed?.entry;
  };

  return (
    <div>
      <Filter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
        {isSuccess && !isLoading && podcastList()?.length
          ? podcastList()?.map((podcast) => (
              <PodcastCard
                podcast={podcast}
                key={podcast?.id?.attributes["im:id"]}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export { Home };
