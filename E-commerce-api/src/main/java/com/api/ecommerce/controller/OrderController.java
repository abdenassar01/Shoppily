package com.api.ecommerce.controller;

import com.api.ecommerce.model.Order;
import com.api.ecommerce.service.OrderService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/order")
public class OrderController {

    private final OrderService service;

    public OrderController(OrderService orderService) {
        this.service = orderService;
    }

    @PostMapping("/make")
    public Order makeOrder(Order Order){
        return service.createOrder(Order);
    }
}
