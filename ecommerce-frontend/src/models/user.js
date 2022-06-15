import { types } from "mobx-state-tree";
import { main, extended } from "../utils/axios/axois";

const _userLoginAsync = async (payload) => {
    const response = await extended.delete("/store/search?store=t", {
        "Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuYXNzYXJkZXYiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LHsiYXV0aG9yaXR5IjoiZmVlZGJhY2s6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiZmVlZGJhY2s6d3JpdGUifSx7ImF1dGhvcml0eSI6Imxpc3Rpbmc6cmVhZCJ9LHsiYXV0aG9yaXR5IjoibGlzdGluZzp3cml0ZSJ9LHsiYXV0aG9yaXR5Ijoib3JkZXI6cmVhZCJ9LHsiYXV0aG9yaXR5Ijoib3JkZXI6d3JpdGUifSx7ImF1dGhvcml0eSI6InByb2R1Y3Q6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicHJvZHVjdDp3cml0ZSJ9LHsiYXV0aG9yaXR5Ijoic3RvcmU6cmVhZCJ9LHsiYXV0aG9yaXR5Ijoic3RvcmU6d3JpdGUifSx7ImF1dGhvcml0eSI6InVzZXI6cmVhZCJ9LHsiYXV0aG9yaXR5IjoidXNlcjp3cml0ZSJ9XSwiaWF0IjoxNjU1MjA3NjcxLCJleHAiOjE2NTU3NjYwMDB9.m9QFHSrlmT2gLgN2En4bVcVn50_iELyfeXYdHuvp65X0XHAUClwb-Q1oj8G3dznkVLFCzpmbFjvXLm4wy4ZutA"
    });
    console.log(response);
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
        await _userLoginAsync(payload)
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