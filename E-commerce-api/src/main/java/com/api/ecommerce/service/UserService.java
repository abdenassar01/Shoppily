package com.api.ecommerce.service;

import com.api.ecommerce.model.User;
import com.api.ecommerce.repository.UserRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


@Service
public class UserService {
    
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.repository = userRepository;
    }
    
    
    public Page<User> getAllUser(){
        Pageable page = PageRequest.ofSize(20);
        return repository.findAll(page);
    }
    
    public User addUser(User user){
        return repository.save(user);
    }
    
    public User getUser(@NotNull User user){
       return getUserById(user.getId());
    }

    public User getUserById(Long id){
        return repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("user with id: " + id + " is not found"));
    }
    
    public User updateUser(Long id, User newUser){
        User user = getUserById(id);
        deleteUser(user);
        return repository.save(newUser);
    }
    
    
    public User deleteUser(User user){
        User userTmp = getUser(user);
        if (getUser(user) != null){
            repository.delete(user);
            return userTmp;
        }
        return null;
    }
}
