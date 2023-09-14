class SubscritionType {
  name: string;
  allowedScreens: number;
  price: number;

  constructor(name: string, allowedScreens: number, price: number) {
    this.name = name;
    this.allowedScreens = allowedScreens;
    this.price = price;
  }
}
