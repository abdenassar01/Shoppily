package com.api.ecommerce.service;

import com.api.ecommerce.model.Order;
import com.api.ecommerce.model.User;
import com.api.ecommerce.repository.OrderRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
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
    
    public Order createOrder(@NotNull Order ord){
        // TODO: Implements Payment Logique
         
        Order order = new Order();
        User user = userService.getUserById(ord.getUser().getId());
        order.setAddress(ord.getAddress());
        order.setDateCreated(ord.getDateCreated());
        order.setCity(ord.getCity());
        order.setProduct(ord.getProduct());
        order.setQte(ord.getQte());
        order.setZip(ord.getZip());
        order.setPriceXqte(ord.getPriceXqte());
        order.setUser(user);
        order.setStatus(ord.getStatus());
        return repository.save(order);
    }
    
    public Order getOrderById(Long id){
        return repository.getById(id);
    }
    
    public List<Order> getAll(){
        return repository.findAll();
    }
    public List<Order> getOrdersByUser(User user){
        return repository.findAllByUser(user);
    }

    public List<Order> getPageOfOrdersByUser(Long id){
        return repository.findAllByUser(userService.getUserById(id));
    }
    
    public Order updateOrder(Long id, Order newOrder){
        repository.deleteById(id);
        return repository.save(newOrder);
    }

    public List<Order> getPageOfOrdersByUserUsername(String username) {
        return repository.findAllByUser(userService.getUserByUsername(username));
    }
}
