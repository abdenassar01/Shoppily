package com.api.ecommerce.controller;

import com.api.ecommerce.model.Store;
import com.api.ecommerce.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/store")
@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
public class StoreController {
    
    private final StoreService service;
    
    @Autowired
    public StoreController(StoreService service) {
        this.service = service;
    }
    
    @GetMapping("/me")
    public Store getMyStore(){
        return service.getStore("Cartmax");
    }
}
