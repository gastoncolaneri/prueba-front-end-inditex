import { PodcastResults } from "../../types/podcastDetails";
import { PodcastListItem } from "./PodcastListItem";

const PodcastList = ({
  episodesCount,
  episodeList,
}: {
  episodesCount: number;
  episodeList: PodcastResults[];
}) => {
  return (
    <div className="mt-15 col-span-2 md:col-span-4 xl:col-span-9 basis-4/5 sm:basis-3/4 md:basis-4/5">
      <div className="grid box-border border-1 border-gray-200 shadow-md mb-5 p-2">
        <p className="font-bold text-xl text-left">
          Episodes: {(episodesCount - 1).toString()}
        </p>
        <p></p>
      </div>
      <div className="grid box-border border-1 border-gray-200 shadow-md py-8 px-5">
        <table className="table-fixed text-left">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="w-80 p-1">Title</th>
              <th className="w-10 p-1">Date</th>
              <th className="w-10 text-center p-1">Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodeList?.map((episode) => {
              return episode?.wrapperType !== "track" ? (
                <PodcastListItem
                  title={episode?.trackName}
                  date={episode?.releaseDate}
                  duration={episode?.trackTimeMillis}
                />
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { PodcastList };
