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
    { id: 'basic-tee', name: "Basic Tee", price: "", image: "/labh (6).jpeg" },
    { id: 'long-sleeve', name: "Long sleeves", price: "", image: "/labh (20).jpeg" },
    { id: 'graphic-tee', name: "Graphic Tee", price: "", image: "/labh (13).jpeg" },
    { id: 'confy-sweater', name: "Confy Sweater", price: "", image: "/" },
    { id: 'tote-bag', name: "Tote Bag", price: "", image: "/" },
    { id: 'bucket-hat', name: "Bucket Hat", price: "", image: "/labh (9).jpeg" },
    { id: 'baseball-cap', name: "Baseball Cap", price: "", image: "/" },
    { id: 'jogger-pants', name: "Jogger Pants", price: "", image: "/" },
    { id: 'cargo-pants', name: "Cargo Pants", price: "", image: "/" },
    { id: 'first-range-hoodie', name: "Classic Hoodie", price: "", image: "/" },
    { id: 'oversized-hoodie', name: "Oversized Hoodie", price: "", image: "/" },
    { id: 'tights', name: "Tights", price: "", image: "/labh (10).jpeg" },
    { id: 'bennies', name: "Bennies", price: "", image: "/labh (4).jpeg" },
  ],
  tees: [
    { id: 'basic-tee', name: "Basic Tee", price: "", image: "/" },
    { id: 'graphic-tee', name: "Graphic Tee", price: "", image: "/" },
  ],
  classic: [
    { id: 'classic-hoodie', name: "Classic Hoodie", price: "", image: "/" }
],
  sweaters: [
    { id: 'comfy-sweater', name: "Comfy Sweater", price: "", image: "/" },
    { id: 'wool-sweater', name: "Wool Sweater", price: "", image: "/" },
  ],
  bags: [
    { id: 'tote-bag', name: "Tote Bag", price: "", image: "/" }
],
  exclusive: [
    { id: 'exclusive-hoodie#1', name: "Exclusive ", price: "", image: "/" }
],
  headwear: [
    { id: 'baseall-cap', name: "Baseball Cap", price: "", image: "/" }
],
  pants: [
    { id: 'jogger-pants', name: "Jogger Pants", price: "", image: "/" },
    { id: 'cargo-pants', name: "Cargo Pants", price: "", image: "/" },
  ],
  hoodies: [
    { id: 'relaxed-fit', name: "Relaxed Fit", price: "", image: "/" },
    { id: 'over-sized#1', name: "Oversized", price: "", image: "/" },
  ],
};
