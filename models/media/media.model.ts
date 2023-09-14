class Media {
  id: number;
  name: string;
  description: string;
  media_type: "Film" | "Serie";

  constructor(
    id: number,
    name: string,
    description: string,
    media_type: "Film" | "Serie"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.media_type = media_type;
  }
}
