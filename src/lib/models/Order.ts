type Order = {
  id: number;
  userId: string;
  productId: string;
  status: string;
  pickUpOptions: number;
  createdAt?: Date;
  lastEditAt?: Date;
  arrivingAt?: Date;
  quantity: number;

};
