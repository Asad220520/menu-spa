// export type getProductRes = {
//   id: number;
//   category: Category;
//   product_name: string;
//   product_image: string;
//   price: string;
//   ProductIngradient: {
//     id: number;
//     ingradient_name: string;
//     Category: {
//       id: number;
//       category_name: string;
//     };
//   };
// }[];

// export type getProductReq = void;

export type getProductRes = {
  id: number;
  category: {
    id: number;
    category_name: string;
  };
  product_name: string;
  product_image: string;
  price: string;
  product_ingradient: {
    id: number;
    ingradient_name: string;
  }[];
}[];

export type getProductReq = void;
