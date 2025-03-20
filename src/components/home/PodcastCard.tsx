import { useNavigate } from "react-router";

const PodcastCard = ({
  img,
  title,
  author,
  id,
}: {
  img: string;
  title: string;
  author: string;
  id: string;
}) => {
  const navigate = useNavigate();

  const handleOnClick = async () => {
    return navigate(`/podcast/${id}`);
  };
  return (
    <div
      className="flex flex-col box-border border-1 border-gray-200 shadow-md relative h-55 w-70 mt-15  hover:shadow-xl hover:cursor-pointer transition delay-50 hover:-translate-y-1 "
      role="button"
      onClick={() => void handleOnClick()}
    >
      {img && (
        <img
          className="h-30 w-30 rounded-full sm:mx-0 border-1 border-gray-300 self-center absolute bottom-40 left-20 "
          src={img}
          alt={title}
        />
      )}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 sm:py-4 p-6">
        <div className="text-center pt-15">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold line-clamp-3">{title}</p>
            <p className="font-small text-gray-400">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PodcastCard };
