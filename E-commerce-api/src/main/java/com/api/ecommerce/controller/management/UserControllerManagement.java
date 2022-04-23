package com.api.ecommerce.controller.management;

import com.api.ecommerce.model.User;
import com.api.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/management/api/v1/user")
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class UserControllerManagement {
    
    private final UserService service;

    @Autowired
    public UserControllerManagement(UserService userService) {
        this.service = userService;
    }
    
    @GetMapping("/")
    public Page<User> getUser(){
        return service.getAllUser();
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
    public User updateUser(@PathVariable Long id,@RequestBody User user){
        return service.updateUser(id, user);
    }
}
