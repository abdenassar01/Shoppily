package com.api.ecommerce.controller;

import com.api.ecommerce.model.User;
import com.api.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

//    @PostMapping("/add")
//    public User addUser(User user){
//        return userService.addUser(user);
//    }
    
    @GetMapping("/")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Page<User> getUser(){
        return userService.getAllUser();
    }
    
}
