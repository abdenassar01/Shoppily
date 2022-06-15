package com.api.ecommerce.controller;

import com.api.ecommerce.model.Store;
import com.api.ecommerce.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/store")
public class StoreController {
    
    private final StoreService service;
    
    @Autowired
    public StoreController(StoreService service) {
        this.service = service;
    }

    @PermitAll
    @GetMapping("/all")
    public ResponseEntity<Page<Store>> getPage(){
        return ResponseEntity.ok().body(service.getPageOfStores(20));
    }
    
    @PreAuthorize(value = "hasRole('ROLE_SELLER')")
    @GetMapping("/me")
    public Store getMyStore(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return service.getStoreByUserUsername(username);
    }
    
    @PreAuthorize(value = "hasRole('ROLE_ADMIN')")
    @PostMapping("/new")
    public Store addNewStore(@RequestBody Store store){
        return service.createStore(store);
    }
    
    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStore(@PathVariable Long id){
        return ResponseEntity.ok().body(service.deleteStoreById(id));
    }
   
    @PermitAll
    @GetMapping("/search")
    public ResponseEntity<List<Store>> searchStore(@RequestParam String store){
        return ResponseEntity.ok(service.searchStoreByTitle(store));
    }
}
