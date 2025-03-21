import { useNavigate } from "react-router";
import { Podcast } from "../../types/podcastListTypes";
import { usePodcastSelected } from "../../store/podcastStore";

const PodcastCard = ({ podcast }: { podcast: Podcast }) => {
  const navigate = useNavigate();
  const setPodcastSelected = usePodcastSelected(
    (state) => state.setPodcastSelected
  );

  const imgPodcast = podcast?.["im:image"]?.[2]?.label;
  const namePodcast = podcast?.["im:name"]?.label;
  const artistPodcast = podcast?.["im:artist"]?.label;
  const idPodcast = podcast?.id?.attributes["im:id"];

  const handleOnClick = async () => {
    setPodcastSelected(podcast);
    return navigate(`podcast/${idPodcast}`);
  };
  return (
    <div
      className="flex flex-col box-border border-1 border-gray-200 shadow-md relative h-55 w-70 mt-15  hover:shadow-xl hover:cursor-pointer transition delay-50 hover:-translate-y-1 "
      role="button"
      onClick={() => void handleOnClick()}
    >
      {imgPodcast && (
        <img
          className="h-30 w-30 rounded-full sm:mx-0 border-1 border-gray-300 self-center absolute bottom-40 left-20 "
          src={imgPodcast}
          alt={namePodcast}
        />
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 sm:py-4 p-6 justify-center">
        <div className="text-center pt-15">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold line-clamp-3 uppercase">
              {namePodcast}
            </p>
            <p className="font-small text-gray-400">{artistPodcast}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PodcastCard };
