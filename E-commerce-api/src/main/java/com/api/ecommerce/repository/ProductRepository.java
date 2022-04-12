package com.api.ecommerce.repository;

import com.api.ecommerce.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findAllByTitle(String title, Pageable page);
    //    @Query(value = "SELECT DISTINCT * FROM product WHERE category_id = ?;")
    Page<Product> findAllByCategory(Long id, Pageable page);

    Page<Product> searchByTitle(String title, Pageable page);
    
    Product searchFirstByTitle(String title);
}
