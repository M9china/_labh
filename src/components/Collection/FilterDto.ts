export declare interface Item {
  items: IItem[];
}

export declare interface IItem {
  productId: string;
  quantity: number;
  price: string;
  name: string;
  image?: string;
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
