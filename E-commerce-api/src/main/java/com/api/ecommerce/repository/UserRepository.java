package com.api.ecommerce.repository;

import com.api.ecommerce.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    User findAllByFirstnameAndLastname(String firstName, String lastName);
}
