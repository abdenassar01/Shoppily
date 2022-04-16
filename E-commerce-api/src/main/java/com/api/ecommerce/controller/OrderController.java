package com.api.ecommerce.controller;

import com.api.ecommerce.model.Order;
import com.api.ecommerce.service.OrderService;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/order")
public class OrderController {

    private final OrderService service;
    
    public OrderController(OrderService orderService) {
        this.service = orderService;
    }

    @PostMapping("/new")
    public Order makeOrder(Order order){
        // TODO: keep getting null for all properties
        return service.createOrder(order);
    }
    
    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id){
        return service.getOrderById(id);
    }

    @GetMapping("/{id}/orders")
    public Page<Order> getOrderOfUser(@PathVariable Long id) {
       return service.getPageOfOrdersByUser(id);
    }
    
    
}
