package com.api.ecommerce.repository;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.model.Listing;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<com.api.ecommerce.model.Feedback, Long> {

    @Query(value = "select feedback_id, feedback_content, date_created, listing_id, user_id from feedback where listing_id = ?1 \n-- #pageable\n ",
            nativeQuery = true,
            countQuery = "select count(*) from feedback where listing_id = ?1;"
    )
    Page<Feedback> findByListing(Long listingId, Pageable pageable);
    List<Feedback> findByListing(Listing listing);
}
