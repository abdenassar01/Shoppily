package com.api.ecommerce.controller;

import com.api.ecommerce.model.Order;
import com.api.ecommerce.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("api/v1/order")
@PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_SELLER', 'ROLE_USER')")
public class OrderController {

    private final OrderService service;
    
    public OrderController(OrderService orderService) {
        this.service = orderService;
    }

    @PutMapping(value = "/new",consumes = MediaType.APPLICATION_JSON_VALUE)
    public Order makeOrder(@RequestBody Order order){
        return service.createOrder(order);
    }
    
    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id){
        return service.getOrderById(id);
    }

    @GetMapping("/{id}/orders")
    public List<Order> getOrderOfUser(@PathVariable Long id) {
       return service.getPageOfOrdersByUser(id);
    }
}
