type Cart = {
  userId: string;
  items: CartItem[];
  pickUpOtions: number;
};

type CartItem = {
  id: number;
  productId: string;
  quantity: number;
};
