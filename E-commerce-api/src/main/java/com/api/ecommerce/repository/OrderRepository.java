package com.api.ecommerce.repository;

import com.api.ecommerce.model.Order;
import com.api.ecommerce.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    
    List<Order> findAllByUser(User user);
    Page<Order> findAllByUser(User user, Pageable pageable);
    
}
