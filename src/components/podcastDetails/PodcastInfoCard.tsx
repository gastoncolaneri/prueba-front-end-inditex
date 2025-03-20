import { usePodcastSelected } from "../../store/podcastStore";

const PodcastInfoCard = () => {
  const podcastSelected = usePodcastSelected((state) => state.podcastSelected);
  const imgPodcast = podcastSelected?.["im:image"]?.[2]?.label;
  const namePodcast = podcastSelected?.["im:name"]?.label;
  const artistPodcast = podcastSelected?.["im:artist"]?.label;

  return (
    <div className="basis-1/3 md:basis-2/5 lg:basis-1/5">
      <div className="flex flex-col border-1 border-gray-200 shadow-md mt-15 col-span-1 md:col-span-2 xl:col-span-3 p-4 justify-center items-center ">
        <div className="flex border-b-gray-200 border-b-1 w-full justify-center pb-5">
          {imgPodcast && (
            <img
              className="w-40 h-40 items-center rounded-md"
              src={imgPodcast}
              alt={namePodcast}
            />
          )}
        </div>
        <div className=" flex flex-col border-b-gray-200 border-b-1 items-start px-2 py-5 w-full">
          <p className="font-bold">{namePodcast}</p>
          <p className="italic">by {artistPodcast}</p>
        </div>
        <div className="flex flex-col text-left pt-5 w-full">
          <p className="font-bold">Description:</p>
          <p className="italic break-words">{podcastSelected?.summary.label}</p>
        </div>
      </div>
    </div>
  );
};

export { PodcastInfoCard };
