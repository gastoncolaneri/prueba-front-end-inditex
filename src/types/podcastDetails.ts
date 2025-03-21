interface Genre {
  id: string;
  name: string;
}

export interface EpisodeDetails {
  artistIds: number[];
  artistViewUrl: string;
  artworkUrl160: string;
  artworkUrl600: string;
  artworkUrl60: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  description: string;
  episodeContentType: string;
  episodeFileExtension: string;
  episodeGuid: string;
  episodeUrl: string;
  feedUrl: string;
  genres: Genre[];
  kind: string;
  previewUrl: string;
  releaseDate: string;
  shortDescription: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
}

export interface PodcastDetailsResponse {
  resultCount: number;
  results: EpisodeDetails[];
}
