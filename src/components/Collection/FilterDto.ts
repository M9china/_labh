export declare interface Item {
  items: IItem[];
  name: string;
  price: string;
  description?: string;
  image?: string;
}

export declare interface IItem {
  productId: string;
  quantity?: number;
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
