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
    { productId: 'basic-tee', name: "Basic tee", price: "250", image: "/labh (6).jpeg" },
    { productId: 'long-sleeve', name: "Long sleeves", price: "350", image: "/labh (20).jpeg" },
    { productId: 'first-range-hoodie', name: "Classic hoodies", price: "450", image: "/labh (30).jpeg" },
    { productId: 'graphic-tee', name: "Graphic tee", price: "250", image: "/labh (26).jpeg" },
    { productId: 'bucket-hat', name: "Bucket hat", price: "150", image: "/labh (9).jpeg" },
    { productId: 'iconic-short-sleeve', name: "New graphic tees", price: "250", image: "/labh (22).jpeg" },
    { productId: 'pictorial-short-sleeve', name: "Pictorila tee", price: "250", image: "/labh (29).jpeg" },
    { productId: 'basic-long-sleeve', name: "Basic long sleeve", price: "350", image: "/labh (2).jpeg" },

  ],
  tees: [
    { productId: 'graphic-tee#1', name: "Basic Tee", price: "250", image: "/labh (22).jpeg" },
    { productId: 'graphic-tee#1', name: "Graphic Tee", price: "250", image: "/labh (23).jpeg" },
    { productId: 'graphic-tee#2', name: "Graphic Tee", price: "250", image: "/labh (24).jpeg" },
    { productId: 'graphic-tee#2', name: "Graphic Tee", price: "250", image: "/labh (25).jpeg" },

  ],
  classic: [
    { productId: 'classic-hoodie', name: "Classic hoodies", price: "450", image: "/labh (31).jpeg" }
],
  sweaters: [
    
  ],
  bags: [
    
],
  exclusive: [
    { productId: 'exclusive-hoodie#1', name: "Exclusive ", price: "450", image: "/labh (30).jpeg" }
],
  headwear: [
    
],
  pants: [
    ],
  hoodies: [
    { productId: 'relaxed-fit', name: "Relaxed Fit", price: "450", image: "/labh (30).jpeg" },
    { productId: 'over-sized#1', name: "Oversized", price: "450", image: "/labh (31).jpeg" },
  ],
};
