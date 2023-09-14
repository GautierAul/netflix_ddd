class Profile {
  id: number;
  userId: number;
  name: string;
  profileImage: string;

  constructor(id: number, userId: number, name: string, profileImage: string) {
    this.id = id;
    this.userId = userId;
    this.name = name;
    this.profileImage = profileImage;
  }
}
