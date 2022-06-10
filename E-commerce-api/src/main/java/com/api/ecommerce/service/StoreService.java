package com.api.ecommerce.service;

import com.api.ecommerce.model.Store;
import com.api.ecommerce.repository.StoreRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;


@Service
public class StoreService {
    
    private final StoreRepository repository;
    
    @Autowired
    public StoreService(StoreRepository repository) {
        this.repository = repository;
    }
    
    public Page<Store> getPageOfStores(int pageSize){
        Pageable page = PageRequest.ofSize(pageSize);
        return repository.findAll(page);
    }

    public Page<Store> getStoresSortedByName(int pageNumber,int pageSize){
        Pageable page = PageRequest.of(pageNumber, pageSize, Sort.by("store_name"));
        
        return repository.findAll(page);
    }
    
    public Store getStoreById(Long id){
        return repository.getById(id);
    }


    public Store createStore(Store store){
        return repository.save(store);
    }
    
    public Store deleteStore(@NotNull Store store){
        Store seller = repository.findByName(store.getName());
        repository.delete(store);
        return seller;
    }
    
    public Store getStore(String name){
        return repository.findByName(name);
    }
    
    public boolean exist(Store store){
        return repository.exists(Example.of(store));
    }
    
    public Store updateStore(@NotNull Store store){
        repository.deleteById(store.getId());
       return repository.save(store);
    }
}
