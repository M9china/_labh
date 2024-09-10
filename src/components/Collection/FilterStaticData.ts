export const filters = [
    {
        id: "category",
        name: "Category",
        options: [
            { value: "all", label: "All" },
            { value: "tees", label: "Tees" },
            { value: 'sweaters', label: 'Sweaters' },
            { value: 'bags', label: 'Totes' },
            { value: 'exclusive', label: 'Exclusive' },
            { value: "headwear", label: "Headwear" },
            { value: "pants", label: "Pants" },
            { value: "hoodies", label: "Hoodies" },
        ],
    },
];

export type CategoryKey = keyof typeof allItems;

export const allItems = {
    all: [
        { id: 1, name: 'Basic Tee' },
        { id: 2, name: 'Comfy Sweater' },
        { id: 3, name: 'Tote Bag' },
        { id: 4, name: 'Exclusive Hat' },
        { id: 5, name: 'Baseball Cap' },
        { id: 6, name: 'Jogger Pants' },
        { id: 7, name: 'Classic Hoodie' },
    ],
    tees: [
        { id: 1, name: 'Basic Tee' },
        { id: 8, name: 'Graphic Tee' },
    ],
    sweaters: [
        { id: 2, name: 'Comfy Sweater' },
        { id: 9, name: 'Wool Sweater' },
    ],
    bags: [
        { id: 3, name: 'Tote Bag' },
    ],
    exclusive: [
        { id: 4, name: 'Exclusive Hat' },
    ],
    headwear: [
        { id: 5, name: 'Baseball Cap' },
    ],
    pants: [
        { id: 6, name: 'Jogger Pants' },
        { id: 10, name: 'Cargo Pants' },
    ],
    hoodies: [
        { id: 7, name: 'Classic Hoodie' },
        { id: 11, name: 'Oversized Hoodie' },
    ],
};
