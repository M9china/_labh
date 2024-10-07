export declare interface ICart{
    items: IItem[]
    name: string
    userId?: string
    price: string
}

interface IItem{
    productId: string
    quantity: number
}
