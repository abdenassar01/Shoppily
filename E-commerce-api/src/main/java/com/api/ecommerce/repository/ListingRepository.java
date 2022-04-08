package com.api.ecommerce.repository;

import com.api.ecommerce.model.Listing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long> {
    Listing searchFirstByTitle(String title);
}
