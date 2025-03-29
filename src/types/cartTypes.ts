export interface CartType {
    id:string,
    userId:string,
    items: [CartItemType],
    total:number
}

export interface CartItemType{
    id?:string,
    productId:string,
    quantity:number
}