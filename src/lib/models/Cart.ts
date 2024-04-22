type Cart = {
  userId: string;
  items: CartItem[];
  pickUpOtions: number;
};

type CartItem = {
  productId: string;
  productPrice:number;
  quantity: number;
};
