import { PodcastCard } from "../components/home/PodcastCard";
import { useGetPodcastList } from "../hooks/useGetPodcastList";

const Home = () => {
  const { data, isSuccess, isLoading } = useGetPodcastList();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
      {isSuccess && !isLoading && data?.feed?.entry?.length
        ? data?.feed?.entry.map((podcast) => (
            <PodcastCard
              author={podcast?.["im:artist"].label}
              img={podcast?.["im:image"][2].label}
              title={podcast?.title.label}
              key={podcast?.id?.attributes["im:id"]}
              id={podcast?.id?.attributes["im:id"]}
            />
          ))
        : null}
    </div>
  );
};

export { Home };
