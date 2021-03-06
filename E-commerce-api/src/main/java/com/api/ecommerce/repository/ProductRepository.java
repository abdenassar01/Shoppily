package com.api.ecommerce.repository;

import com.api.ecommerce.model.Listing;
import com.api.ecommerce.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findAllByReference(String reference, Pageable page);
    
    List<Product> findAllByListing(Listing listing);

    Product searchFirstByReference(String ref);
}
