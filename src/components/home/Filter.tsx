import { useGetPodcastList } from "../../hooks/useGetPodcastList";
import { usePodcastSelected } from "../../store/podcastStore";

const Filter = () => {
  const { data } = useGetPodcastList();
  const podcastListFiltered = usePodcastSelected(
    (state) => state.podcastListFiltered
  );
  const isFiltering = usePodcastSelected((state) => state.isFiltering);

  const setPodcastListFiltered = usePodcastSelected(
    (state) => state.setPodcastListFiltered
  );
  const setIsFiltering = usePodcastSelected((state) => state.setIsFiltering);
  const podcastList = data?.feed?.entry;

  const debounceFilter = (value: string) => {
    const filteredPodcast = podcastList?.filter(
      (podcast) =>
        podcast.title.label.toLowerCase().includes(value) ||
        podcast["im:artist"]?.label.toLowerCase().includes(value)
    );
    setPodcastListFiltered(filteredPodcast || []);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsFiltering(!!value);
    debounceFilter(value);
  };

  return (
    <div className="mt-5 flex justify-end items-center">
      <div className="mr-3 rounded bg-cyan-600 text-white py-1 px-2 font-bold text-center">
        {isFiltering ? podcastListFiltered?.length : 100}
      </div>
      <input
        className=" rounded-md border border-gray-300 py-2 pr-3 pl-3 text-gray-700 shadow-sm placeholder:text-gray-400 placeholder:italic focus:border-sky-500 focus:outline focus:outline-sky-500 sm:text-sm "
        placeholder="Filter podcasts..."
        type="text"
        name="search"
        id="search"
        onChange={handleInputChange}
      />
    </div>
  );
};

export { Filter };
