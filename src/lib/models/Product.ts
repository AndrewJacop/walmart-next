type Product = {
  id: string;
  title: string;
  images: string[];
  brand: number;
  colors: string[];
  seller: number;
  isBestSeller: boolean;
  subCatergory: number[];
  discount: number | string;
  originalPrice: number | string;
  returnPolicy: number;
  isGiftable: boolean;
  quantity: number;
};
