import { types } from "mobx-state-tree";

const Item = types.model({
    id: types.optional(types.identifier),
    label: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    quantity: types.optional(types.number, 0)
}).actions(self => ({
    setItem(newItem){
        self.id = newItem.id,
        self.label = newItem.label,
        self.price = newItem.price,
        self.quantity = newItem.quantity
    }
}))

const ItemStore = types.model("itemStore", ({
    items: types.array(Item),  
})).actions(self => ({
    addToCart(newItem){
        self.items.push(newItem)
    },
    removeItem(id){
        self.items.filter(item => item.id !== id)
    }
})).views(self => ({
    get getTotal(){
        let sum = 0;
        self.items.map(item => sum += (item.price * item.quantity) )
        return sum;
    }
}))

let _cart
export const useCart = () => {
    if(!_cart){
        _cart = ItemStore.create({
            items: []
        })
    }
    return _cart;
}