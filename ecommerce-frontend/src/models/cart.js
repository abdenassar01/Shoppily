import { types } from "mobx-state-tree";

const Item = types.model({
    id: types.optional(types.number, 0),
    label: types.optional(types.string, ""),
    price: types.optional(types.number, 0),
    cover: types.optional(types.string, ""),
    reference: types.optional(types.string, ""),
    quantity: types.optional(types.number, 0)
}).actions(self => ({
    setItem(newItem){
        self.id = newItem.id;
        self.label = newItem.label;
        self.cover = newItem.cover;
        self.reference = newItem.reference;
        self.price = newItem.price;
        self.quantity = newItem.quantity;
    }
}))

const ItemStore = types.model("itemStore", ({
    items: types.array(Item),  
})).actions(self => ({
    addToCart(newItem){
        self.items.push(newItem)
    },
    removeItem(id){
        self.items.pop(self.items.filter(item => item.id === id))
    }, 
    removeAll(){
        self.items.clear()
    }
})).views(self => ({
    get getTotal(){
        let sum = 0;
        self.items.map(item => sum += (item.price * item.quantity) )
        return sum;
    },
    get itemsCount(){
        return self.items.length
    },
    get getItems(){
        return self.items
    }
}))

let _cart
export const useCart = () => {
    if(!_cart){
        _cart = ItemStore.create({
            items: [],
        })
    }
    return _cart;
}