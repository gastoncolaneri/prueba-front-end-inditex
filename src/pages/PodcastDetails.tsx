import { useParams } from "react-router";
import { useGetPodcastDetails } from "../hooks/useGetPodcastDetails";

const PodcastDetails = () => {
  const params = useParams();
  const { data } = useGetPodcastDetails(params?.idPodcast || "");

  console.log(data, "data");

  return <>Podcast Details</>;
};

export { PodcastDetails };
