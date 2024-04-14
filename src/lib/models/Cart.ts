type Cart = {
  userId: string;
  items: CartItem[];
  pickUpOtions: number;
};

type CartItem = {
  productId: string;
  quantity: number;
};
