export declare interface Item {
    id: string;
    name: string;
    price: string | number; // Price could be a string or a number
    image: string; // URL to the image
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
