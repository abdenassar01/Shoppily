package com.api.ecommerce.controller;

import com.api.ecommerce.model.User;
import com.api.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
public class UserController {
    
    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }
    
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER', 'ROLE_SELLER')")
    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Long id){
        return service.deleteUserById(id);
    }

    @GetMapping("/me")
    @PermitAll
    public User getUser(){
        return service.getUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }

    @PermitAll
    @PostMapping("/register")
    public User addNewUser(@RequestBody User user){
        return service.save(user);
    }

    @PostMapping("/{id}/update")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER', 'ROLE_SELLER')")
    public User updateUser(@PathVariable Long id, User user){
        return service.updateUser(id, user);
    }
}
