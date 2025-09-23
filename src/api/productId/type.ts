export type getProductIdRes = {
  id: number;
  product_name: string;
  product_image: string;
  category: {
    id: number;
    category_name: string;
  };
  price: string;
  product_ingradient: {
    id: number;
    ingradient_name: string;
  }[];
  product_extras: {
    id: number;
    extras_name: string;
    price: string;
  }[];
  product_drinks: {
    id: number;
    drink_name: string;
    price: string;
  }[];
}[];

export type getProductIdReq = void;
