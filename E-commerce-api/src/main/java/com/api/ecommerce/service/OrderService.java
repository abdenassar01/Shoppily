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
    private final UserService userService;

    @Autowired
    public OrderService(OrderRepository repository, UserService userService) {
        this.repository = repository;
        this.userService = userService;
    }
    
    public Order createOrder(Order ord){
        // TODO: Implements Payment Logique
         
        Order order = new Order();
        order.setAddress(ord.getAddress());
        order.setDateCreated(ord.getDateCreated());
        order.setCity(ord.getCity());
        order.setProduct(ord.getProduct());
        order.setQte(ord.getQte());
        order.setPriceXqte(ord.getPriceXqte());
        order.setUser(ord.getUser());
        order.setStatus(ord.getStatus());
        System.out.println(order.toString());
        return repository.save(order);
    }
    
    public Order getOrderById(Long id){
        return repository.getById(id);
    }
    
    public List<Order> getOrdersByUser(User user){
        return repository.findAllByUser(user);
    }

    public Page<Order> getPageOfOrdersByUser(Long id){
        Pageable page = PageRequest.of(1, 5, Sort.by("dateCreated"));
        User user = userService.getUserById(id);
        return repository.findAllByUser(user, page);
    }
    
}
