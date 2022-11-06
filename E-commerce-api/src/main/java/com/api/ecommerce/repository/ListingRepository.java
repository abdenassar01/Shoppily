package com.api.ecommerce.repository;

import com.api.ecommerce.model.Category;
import com.api.ecommerce.model.Listing;
import com.api.ecommerce.model.Store;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long> {

    List<Listing> getByTitleContaining(String title);
    
    Page<Listing> searchAllByTitle(Pageable pageable, String title);
    
    Page<Listing> findAllByStore(Pageable pageable, Store store);
    
    Listing getAllByIdAndStore(Long id, Store store);
    
    Page<Listing> findAllByCategory(Pageable pageable, Category category);
    List<Listing> findAllByCategory(Category category);
}
