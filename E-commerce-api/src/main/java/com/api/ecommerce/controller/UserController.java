package com.api.ecommerce.controller;

import com.api.ecommerce.model.User;
import com.api.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/user")
@PreAuthorize(value = "hasAnyRole('ADMIN', 'USER', 'SELLER')")
public class UserController {
    
    private final UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }
    
    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable Long id){
        return service.deleteUserById(id);
    }

    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id){
        return service.getUserById(id);
    }

    @PutMapping("/new")
    public User addNewUser(@RequestBody User user){
        return service.save(user);
    }

    @PostMapping("/{id}/update")
    public User updateUser(@PathVariable Long id, User user){
        return service.updateUser(id, user);
    }
}
