import { Link } from "react-router";
import { usePodcastSelected } from "../../store/podcastStore";

const Header = () => {
  const isLoading = usePodcastSelected((state) => state.isLoading);

  return (
    <Link
      to="/"
      className="grid grid-cols-2 items-center border-b-1 border-gray-200 shadow-m pb-2 w-full"
    >
      <div className="text-left font-bold text-cyan-600 text-xl">Podcaster</div>
      {isLoading && (
        <div className="flex space-x-2 animate-pulse justify-end">
          <div className="w-3 h-3 bg-cyan-700 rounded-full"></div>
        </div>
      )}
    </Link>
  );
};

export { Header };
