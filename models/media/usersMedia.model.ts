class UsersMedia {
  userId: number;
  mediaId: number;
  wishlisted: boolean;
  downloaded: boolean;

  constructor(
    userId: number,
    mediaId: number,
    wishlisted: boolean,
    downloaded: boolean
  ) {
    this.userId = userId;
    this.mediaId = mediaId;
    this.wishlisted = wishlisted;
    this.downloaded = downloaded;
  }
}
