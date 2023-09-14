class ViewedMedia {
  mediaId: string;
  userId: string;
  stoppedAt: Date;
  finished: boolean;

  constructor(
    mediaId: string,
    userId: string,
    stoppedAt: Date,
    finished: boolean
  ) {
    this.mediaId = mediaId;
    this.userId = userId;
    this.stoppedAt = stoppedAt;
    this.finished = finished;
  }
}
