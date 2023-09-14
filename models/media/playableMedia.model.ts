class PlayableMedia {
  id: number;
  audioLanguages: string[];
  subtitlesLanguages: string[];
  videoId: string;

  constructor(
    id: number,
    audioLanguages: string[],
    subtitlesLanguages: string[],
    videoId: string
  ) {
    this.id = id;
    this.audioLanguages = audioLanguages;
    this.subtitlesLanguages = subtitlesLanguages;
    this.videoId = videoId;
  }
}
