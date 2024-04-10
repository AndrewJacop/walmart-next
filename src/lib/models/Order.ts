type Order = {
  id: number;
  userId: string;
  productId: string;
  quantity: number;
  status: string;
  pickUpOtions: number;
  createdAt?: Date;
  lastEditAt?: Date;
  arrivingAt?: Date;
};
