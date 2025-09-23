// export type getCategoriesRes = {
//   category_name: string;
//   MenuProduct: {
//     id: number;
//     product_name: string;
//     price: string;
//     description: string;
//   }[];
// };

// export type getCategoriesReq = void;
export type getCategoriesRes = {
  id: number;
  category_name: string;
  menu_product: {
    id: number;
    product_name: string;
    price: string;
    description: string;
  }[];
}[];

export type getCategoriesReq = void;
