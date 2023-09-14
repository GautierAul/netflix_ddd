class Payement {
  userId: number;
  subscritionId: number;
  executedAt: Date;

  constructor(userId: number, subscritionId: number, executedAt: Date) {
    this.userId = userId;
    this.subscritionId = subscritionId;
    this.executedAt = executedAt;
  }
}
