package com.api.ecommerce.repository;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.model.Listing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepository extends JpaRepository<com.api.ecommerce.model.Feedback, Long> {

    Page<Feedback> findByListing(Listing listing, Pageable pageable);
}
