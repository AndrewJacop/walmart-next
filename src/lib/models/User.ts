type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  isAdmin: boolean;
  isSeller: boolean;
  phoneNumber: string;
  address: Address[];
  paymentMethod: PaymentMethod[];
  userListsIds: number[];
  cart: CartItem[];
};

type PaymentMethod = {
  ccNumber: string;
  ccType: string;
};

type Address = {
  street: string;
  city: string;
  state: string;
  country: string;
  zipCode: number;
  deliveryNotes: string;
};
