package com.api.ecommerce.service;

import com.api.ecommerce.model.Store;
import com.api.ecommerce.model.User;
import com.api.ecommerce.repository.StoreRepository;
import com.api.ecommerce.repository.UserRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class StoreService {
    
    private final StoreRepository repository;
    private final UserRepository userRepository;
    
    @Autowired
    public StoreService(StoreRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }
    
    public Page<Store> getPageOfStores(int pageSize){
        Pageable page = PageRequest.ofSize(pageSize);
        return repository.findAll(page);
    }
    
    public Store getStoreById(Long id){
        return repository.findById(id).get();
    }

    public Store createStore(@NotNull Store store){
        Optional<Store> prev = Optional.ofNullable(repository.getByUser(store.getUser()));
        if(prev.isPresent()){
            return prev.get();
        }
        Store str = new Store();
        str.setName(store.getName());
        str.setRating(0.0);
        
        str.setUser(
                userRepository.getById(
                        store.getUser().getId()
                ));
        str.setListings(new ArrayList<>());
        str.setSuccessfulSells(0);
        return repository.save(str);
    }
    
    public String deleteStoreById(Long id) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username);
        Store store = repository.getById(id);
        if((Objects.equals(user.getRole(), "ADMIN")) || (Objects.equals(user.getStore(), store))){
            repository.deleteById(id);
            return "deleted successfully";  
        }
        return "You don't have the right to access";
    }
    
    public Store getStoreByUserUsername(String username){
        User user = userRepository.findByUsername(username);
        return repository.getByUser(user);
    }
    
    public List<Store> searchStoreByTitle(String store){
        return repository.findAllByNameContaining(store);
    }
}
