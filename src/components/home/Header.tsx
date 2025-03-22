import { Link, useParams } from "react-router";
import { useGetPodcastList } from "../../hooks/useGetPodcastList";
import { useGetPodcastDetails } from "../../hooks/useGetPodcastDetails";

const Header = () => {
  const { idPodcast } = useParams();

  const { isLoading: isLoadingPodcastList } = useGetPodcastList();
  const { isLoading: isLoadingPodcastDetails } =
    useGetPodcastDetails(idPodcast);

  return (
    <Link
      to="/"
      className="grid grid-cols-2 items-center border-b-1 border-gray-200 shadow-m pb-2 w-full"
    >
      <div className="text-left font-bold text-cyan-600 text-xl">Podcaster</div>
      {(isLoadingPodcastList || isLoadingPodcastDetails) && (
        <div className="flex space-x-2 animate-pulse justify-end">
          <div className="w-3 h-3 bg-cyan-700 rounded-full"></div>
        </div>
      )}
    </Link>
  );
};

export { Header };
