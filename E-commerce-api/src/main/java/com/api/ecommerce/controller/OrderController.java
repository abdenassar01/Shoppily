package com.api.ecommerce.controller;

import com.api.ecommerce.model.*;
import com.api.ecommerce.service.ListingService;
import com.api.ecommerce.service.OrderService;
import com.api.ecommerce.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("api/v1/order")
//@PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER', 'ROLE_USER')")
public class OrderController {

    private final OrderService service;
    private final StoreService storeService;
    private final ListingService listingService;
    
    @Autowired
    public OrderController(OrderService orderService, StoreService storeService, ListingService listingService) {
        this.service = orderService;
        this.storeService = storeService;
        this.listingService = listingService;
    }

    @GetMapping("/")
    @PreAuthorize(value = "hasRole('ROLE_ADMIN')")
    public List<Order> getAll(){
        return service.getAll();
    }

    @PutMapping(value = "/new",consumes = MediaType.APPLICATION_JSON_VALUE)
    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER', 'ROLE_USER')")
    public Order makeOrder(@RequestBody Order order){
        return service.createOrder(order);
    }
    
    @GetMapping("/{id}/add-product")
    @PreAuthorize(value = "hasRole('ROLE_SELLER')")
    public Order addProduct(@PathVariable Long id){
        Order order = service.getOrderById(id);
        return service.updateOrder(id, order);
    }
    @GetMapping("/{id}")
    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER', 'ROLE_USER')")
    public Order getOrder(@PathVariable Long id){
        return service.getOrderById(id);
    }

    @GetMapping("/{id}/orders")
    @PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER', 'ROLE_USER')")
    public List<Order> getOrderOfUser(@PathVariable Long id) {
       return service.getPageOfOrdersByUser(id);
    }  
    
    @GetMapping("/me/orders")
    @PermitAll
    public List<Order> getOrderOfUser() {
       return service.getPageOfOrdersByUserUsername(SecurityContextHolder.getContext().getAuthentication().getName());
    }
}
