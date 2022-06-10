package com.api.ecommerce.repository;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.model.Listing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FeedbackRepository extends JpaRepository<com.api.ecommerce.model.Feedback, Long> {
    
    List<Feedback> findByListing(Listing listing);
    
    List<Feedback> findAllByListing(Listing listing);

    Page<Optional<Feedback>> findByListing(Optional<Listing> listing, Pageable page);
}
