package com.api.ecommerce.service;

import com.api.ecommerce.model.Order;
import com.api.ecommerce.model.User;
import com.api.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    
    private final OrderRepository repository;

    @Autowired
    public OrderService(OrderRepository repository) {
        this.repository = repository;
    }
    
    public Order createOrder(Order order){
        // TODO: Implements Payment Logique
        return repository.save(order);
    }
    
    public List<Order> getOrdersByUser(User user){
        return repository.findAllByUser(user);
    }

    public Page<Order> getPageOfOrdersByUser(User user){
        Pageable page = PageRequest.of(1, 5, Sort.by("date_created"));
        return repository.findAllByUser(user, page);
    }
    
}
