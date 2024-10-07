export type CategoryKey = keyof typeof allItems;

export const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "all", label: "All" },
      { value: "classic", label: "Classic" },
      { value: "exclusive", label: "Exclusive" },
      { value: "headwear", label: "Headwear" },
      { value: "hoodies", label: "Hoodies" },
      { value: "sweaters", label: "Sweaters" },
      { value: "pants", label: "Pants" },
      { value: "tees", label: "Tees" },
      { value: "bags", label: "Totes" },
    ],
  },
];

export const allItems = {
  all: [
    { productId: 'basic-tee', name: "Basic Tee", price: "", image: "/labh (6).jpeg" },
    { productId: 'long-sleeve', name: "Long sleeves", price: "", image: "/labh (20).jpeg" },
    { productId: 'graphic-tee', name: "Graphic Tee", price: "", image: "/labh (13).jpeg" },
    { productId: 'confy-sweater', name: "Confy Sweater", price: "", image: "/" },
    { productId: 'tote-bag', name: "Tote Bag", price: "", image: "/" },
    { productId: 'bucket-hat', name: "Bucket Hat", price: "", image: "/labh (9).jpeg" },
    { productId: 'baseball-cap', name: "Baseball Cap", price: "", image: "/" },
    { productId: 'jogger-pants', name: "Jogger Pants", price: "", image: "/" },
    { productId: 'cargo-pants', name: "Cargo Pants", price: "", image: "/" },
    { productId: 'first-range-hoodie', name: "Classic Hoodie", price: "", image: "/" },
    { productId: 'oversized-hoodie', name: "Oversized Hoodie", price: "", image: "/" },
    { productId: 'tights', name: "Tights", price: "", image: "/labh (10).jpeg" },
    { productId: 'bennies', name: "Bennies", price: "", image: "/labh (4).jpeg" },
  ],
  tees: [
    { productId: 'basic-tee', name: "Basic Tee", price: "", image: "/" },
    { productId: 'graphic-tee', name: "Graphic Tee", price: "", image: "/" },
  ],
  classic: [
    { productId: 'classic-hoodie', name: "Classic Hoodie", price: "", image: "/" }
],
  sweaters: [
    { productId: 'comfy-sweater', name: "Comfy Sweater", price: "", image: "/" },
    { productId: 'wool-sweater', name: "Wool Sweater", price: "", image: "/" },
  ],
  bags: [
    { productId: 'tote-bag', name: "Tote Bag", price: "", image: "/" }
],
  exclusive: [
    { productId: 'exclusive-hoodie#1', name: "Exclusive ", price: "", image: "/" }
],
  headwear: [
    { productId: 'baseall-cap', name: "Baseball Cap", price: "", image: "/" }
],
  pants: [
    { productId: 'jogger-pants', name: "Jogger Pants", price: "", image: "/" },
    { productId: 'cargo-pants', name: "Cargo Pants", price: "", image: "/" },
  ],
  hoodies: [
    { productId: 'relaxed-fit', name: "Relaxed Fit", price: "", image: "/" },
    { productId: 'over-sized#1', name: "Oversized", price: "", image: "/" },
  ],
};
