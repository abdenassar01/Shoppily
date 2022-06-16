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

const _getUserDetailAsync = async (token) => {
    try{
        const response = await extended.get("/user/me", {
            headers: {
                "Authorization": token
            }
        });
        return response?.data;
    }
    catch(ex){
        console.log(ex)
    }
}

function saveToken(token){
    localStorage.setItem("token" , token)
}

function saveRole(role){
    localStorage.setItem("role", role)
}

function saveAuthStatus(status){
    localStorage.setItem("isAuthorized", status)
}

function userLogout(){
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("isAuthorized")
}

export const User = types.model("user", {
    id : types.optional(types.number, 0),
    firstname : types.optional(types.string, ""),
    lastname : types.optional(types.string, ""),
    role : types.optional(types.string, ""),
    address : types.optional(types.string, ""),
    username : types.optional(types.string, "")
})
.actions(self => ({
    setUser(newUser){
        self.id = newUser.id;
        self.firstname = newUser.firstname;
        self.lastname = newUser.lastname;
        self.address = newUser.address;
        self.role = newUser.role;
        self.username = newUser.username;
    }
}))
.views(self => ({
    get getRole(){
        return self.role
    },
    get getFullName(){
        return self.firstname + " " + self.lastname
    }
}))

export const UserStore = types.model("userStore", {
    user: types.maybeNull(User),
    token: types.optional(types.string, ""),
    isAuthorized: types.optional(types.boolean, false),
    error: types.optional(types.string, "") 
}).actions(self => ({
    setUser(newUser){
        self.user = newUser
    },
    setToken(newToken){
        self.token = newToken
    },
    setIsAuthorized(state){
        self.isAuthorized = state
    },
    removeToken(){
        self.token = ""
    },
    setError(newError){
        self.error = newError
    },
    async getUserDetail(){
        const user = await _getUserDetailAsync(self.token)
        
        return user
    },
    async login(payload){
        try{
            self.setToken("Bearer " + await _userLoginAsync(payload));
            self.setUser(await self.getUserDetail(self.token));
            self.setIsAuthorized(true);
            saveRole(self.user.getRole);
            saveToken(self.token);
            saveAuthStatus(true);

        }catch(ex){
            self.setIsAuthorized(false);
            self.setError("password or username incorrect")
            return ex
        }
    },
    logout(){
        userLogout()
    }

})).views(self => ({
    get getUser(){
        return self.user
    },
    get isAuthentificated(){
        return self.isAuthorized
    },
    get getError(){
        return self.error
    }
}))

let _userStore
export const useUserStore = () => {
    if(!_userStore){
        _userStore = UserStore.create({
            token: "",
            error: "",
            isAuthorized: false
        })
    }
    return _userStore;
}