import moment from "moment";
import { useNavigate } from "react-router";
import { EpisodeDetails } from "../../types/podcastDetails";
import { usePodcastSelected } from "../../store/podcastStore";
import { ROUTES_ENUM } from "../../constants/routesEnum";

const PodcastListItem = ({ episode }: { episode: EpisodeDetails }) => {
  const navigate = useNavigate();
  const setEpisodeSelected = usePodcastSelected(
    (state) => state.setEpisodeSelected
  );

  const {
    episodeGuid: id,
    trackTimeMillis: duration,
    releaseDate: date,
    trackName: title,
  } = episode;

  const handleOnClick = async () => {
    setEpisodeSelected(episode);
    return navigate(`${ROUTES_ENUM.EPISODE_DETAIL_ROUTE}/${id}`);
  };

  return (
    <tr className="border-b-1 border-gray-200 odd:bg-gray-50">
      <td
        className="text-cyan-600 cursor-pointer text-sm p-1"
        role="button"
        onClick={() => void handleOnClick()}
      >
        {title}
      </td>
      <td className="text-sm p-1">{moment(date).format("l")}</td>
      <td className="text-sm p-1 text-center">
        {moment.utc(duration).format("HH:mm:ss")}
      </td>
    </tr>
  );
};

export { PodcastListItem };
