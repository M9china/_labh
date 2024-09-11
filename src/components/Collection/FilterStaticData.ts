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
    { id: 1, name: "Basic Tee", price: "450", image: "/labh (6).jpeg" },
    { id: 2, name: "Long sleeves", price: "350", image: "/labh (20).jpeg" },
    { id: 3, name: "Graphic Tee", price: "250", image: "/labh (13).jpeg" },
    { id: 4, name: "Confy Sweater", price: "400", image: "/" },
    { id: 5, name: "Tote Bag", price: "300", image: "/" },
    { id: 6, name: "Bucket Hat", price: "250", image: "/labh (9).jpeg" },
    { id: 7, name: "Baseball Cap", price: "250", image: "/" },
    { id: 8, name: "Jogger Pants", price: "500", image: "/" },
    { id: 9, name: "Cargo Pants", price: "560", image: "/" },
    { id: 10, name: "Classic Hoodie", price: "300", image: "/" },
    { id: 11, name: "Oversized Hoodie", price: "300", image: "/" },
    { id: 12, name: "Tights", price: "150", image: "/labh (10).jpeg" },
    { id: 13, name: "Bennies", price: "150", image: "/labh (4).jpeg" },
  ],
  tees: [
    { id: 1, name: "Basic Tee", price: "", image: "/" },
    { id: 2, name: "Graphic Tee", price: "", image: "/" },
  ],
  classic: [
    { id: 13, name: "", price: "", image: "/" }
],
  sweaters: [
    { id: 4, name: "Comfy Sweater", price: "", image: "/" },
    { id: 9, name: "Wool Sweater", price: "", image: "/" },
  ],
  bags: [
    { id: 5, name: "Tote Bag", price: "", image: "/" }
],
  exclusive: [
    { id: 6, name: "Exclusive Hat", price: "", image: "/" }
],
  headwear: [
    { id: 7, name: "Baseball Cap", price: "", image: "/" }
],
  pants: [
    { id: 8, name: "Jogger Pants", price: "", image: "/" },
    { id: 9, name: "Cargo Pants", price: "", image: "/" },
  ],
  hoodies: [
    { id: 10, name: "Classic Hoodie", price: "", image: "/" },
    { id: 11, name: "Oversized Hoodie", price: "", image: "/" },
  ],
};
