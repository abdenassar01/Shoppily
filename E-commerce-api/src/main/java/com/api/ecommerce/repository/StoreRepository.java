package com.api.ecommerce.repository;

import com.api.ecommerce.model.Store;
import com.api.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoreRepository extends JpaRepository<Store, Long> {
    List<Store> findAllByNameContaining(String name);
    
    Store getByUser(User user);
}
