import { Routes, Route } from "react-router";
import { EpisodeDetails, Home, PodcastDetails } from "./pages";

const RoutesConfig = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route index path="/podcast/:idPodcast" element={<PodcastDetails />} />
    <Route
      path="/podcast/:idPodcast/episode/:idEpisode"
      element={<EpisodeDetails />}
    />
  </Routes>
);

export { RoutesConfig };
