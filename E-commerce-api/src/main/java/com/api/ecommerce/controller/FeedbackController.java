package com.api.ecommerce.controller;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.service.FeedbackService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/feedback")
@PreAuthorize(value = "hasAnyRole('ROLE_ADMIN', 'ROLE_USER', 'ROLE_SELLER')")
public class FeedbackController {

    private final FeedbackService service;

    public FeedbackController(FeedbackService service) {
        this.service = service;
    }

    @GetMapping("/listing/{listingId}")
    public ResponseEntity<List<Feedback>> getFeedBackById(@PathVariable Long listingId){
        return ResponseEntity.ok(service.getListingFeedBack(listingId));
    }
    
   @PutMapping("/new")
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback){
        return ResponseEntity.ok(service.createFeedback(feedback));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Feedback> deleteFeedback(@PathVariable Long id){
        return ResponseEntity.ok(service.getFeedbackById(id));
    }
    
    @PostMapping("/{id}")
    public ResponseEntity<Feedback>  updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        return ResponseEntity.ok(service.updateFeedback(id, feedback));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedback(@PathVariable Long id){
        return ResponseEntity.ok(service.getFeedbackById(id));
    }
}
