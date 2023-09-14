class Subscrition {
  userId: number;
  typeId: number;
  validUntil: Date;

  constructor(userId: number, typeId: number, validUntil: Date) {
    this.userId = userId;
    this.typeId = typeId;
    this.validUntil = validUntil;
  }
}
