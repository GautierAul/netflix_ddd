class Season {
  id: number;
  mediaId: number;
  seasonNumber: number;
  name: string;
  nomberEpisodes: number;

  constructor(
    id: number,
    mediaId: number,
    seasonNumber: number,
    name: string,
    nomberEpisodes: number
  ) {
    this.id = id;
    this.mediaId = mediaId;
    this.seasonNumber = seasonNumber;
    this.name = name;
    this.nomberEpisodes = nomberEpisodes;
  }
}
