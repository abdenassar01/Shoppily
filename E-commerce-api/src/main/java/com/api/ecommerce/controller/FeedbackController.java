package com.api.ecommerce.controller;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.model.Listing;
import com.api.ecommerce.service.FeedbackService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/feedback")
@PreAuthorize(value = "permitAll()")
public class FeedbackController {

    private final FeedbackService service;

    public FeedbackController(FeedbackService service) {
        this.service = service;
    }

    @GetMapping("/listing")
    public ResponseEntity<Page<Feedback>> getFeedBackById(@RequestBody Listing listing){
        return ResponseEntity.ok(service.getFeedbacks(listing));
    }
    
   @PutMapping("/new")
    public ResponseEntity<Feedback> addFeedback(@RequestBody Feedback feedback){
        return ResponseEntity.ok(service.createFeedback(feedback));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Feedback> deleteFeedback(@PathVariable Long id){
        return ResponseEntity.ok(service.getFeedbackById(id));
    }
    
    @PostMapping("/{id}/update")
    public ResponseEntity<Feedback>  updateFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        return ResponseEntity.ok(service.updateFeedback(id, feedback));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedback(@PathVariable Long id){
        return ResponseEntity.ok(service.getFeedbackById(id));
    }
}
