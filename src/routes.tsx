import { Routes, Route } from "react-router";
import { EpisodeDetails, Home, PodcastDetails } from "./pages";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/podcast/:idPodcast" element={<PodcastDetails />} />
    <Route path="/podcast/1/episode/:idEpisode" element={<EpisodeDetails />} />
  </Routes>
);

export { RoutesConfig };
