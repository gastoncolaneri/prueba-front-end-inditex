import DOMPurify from "dompurify";
import { usePodcastSelected } from "../../store/podcastStore";

const EpisodeInfoCard = () => {
  const episodeSelected = usePodcastSelected((state) => state.episodeSelected);
  const { description, trackName, episodeUrl } = episodeSelected || {};
  const sanitizedText = DOMPurify.sanitize(description || "");

  return (
    <div className="mt-15 col-span-2 md:col-span-4 xl:col-span-9 basis-4/5 sm:basis-3/4 md:basis-4/5">
      <div className="grid box-border border-1 border-gray-200 shadow-md p-5">
        <p className="font-bold text-2xl mb-3">{trackName} </p>
        <p
          className="italic"
          dangerouslySetInnerHTML={{ __html: sanitizedText }}
        />
        <div className="flex p-3 mt-5">
          <audio controls className="w-full">
            <source src={episodeUrl} type="audio/mp3" />
          </audio>
        </div>
      </div>
    </div>
  );
};

export { EpisodeInfoCard };
