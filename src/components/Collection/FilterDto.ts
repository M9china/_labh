export enum Size {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export enum Color {
  BLUE = "BLUE",
  GRAY = "GRAY",
  BLACK = "BLACK",
  WHITE = "WHITE",
}

export declare interface Item {
  cart: IItem[];
}

export declare interface IItem {
  productId: string;
  quantity: number;
  price: string;
  name: string;
  size: string;
  color: Color;
  image?: Size;
}

// Define a type for the categories
export declare interface AllItems {
  all: Item[];
  tees: Item[];
  classic: Item[];
  sweaters: Item[];
  bags: Item[];
  exclusive: Item[];
  headwear: Item[];
  pants: Item[];
  hoodies: Item[];
}
