import { Routes, Route } from "react-router";
import { EpisodeDetails, Home, PodcastDetails } from "./pages";

const RoutesConfig = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route index path="/podcast/:podcastId" element={<PodcastDetails />} />
    <Route
      path="/podcast/:podcastId/episode/:episodeId"
      element={<EpisodeDetails />}
    />
  </Routes>
);

export { RoutesConfig };
