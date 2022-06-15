import { types } from "mobx-state-tree";
import { main, extended } from "../utils/axios/axois";

const _userLoginAsync = async (payload) => {
    try{
        const response = await main.post("/login", payload);
        return response?.data.token;
    }
    catch(ex){
        console.log(ex)
    }
}

export const User = types.model("user", {
    id : types.optional(types.number, 0),
    firstname : types.optional(types.string, ""),
    lastname : types.optional(types.string, ""),
    role : types.optional(types.string, ""),
    address : types.optional(types.string, ""),
    username : types.optional(types.string, "")
}).views(self => ({
    get role(){
        return self.role
    },
    get fullName(){
        return self.firstname + " " + self.lastname
    }
}))

export const UserStore = types.model("userStore", {
    user: types.maybe(User),
    token: types.optional(types.string, ""),
    isAuthorized: types.optional(types.boolean, false)
}).actions(self => ({
    setUser(newUser){
        self.user = newUser
    },
    setToken(newToken){
        self.token = newToken
    },
    setAuthorized(state){
        self.isAuthorized = state
    },
    removeToken(){
        self.token = ""
    },
    async login(payload){
        self.setToken(await _userLoginAsync(payload))
        
    }
}))

let _userStore
export const useUserStore = () => {
    if(!_userStore){
        _userStore = UserStore.create({
            token: "",
            isAuthorized: false
        })
    }
    return _userStore;
}