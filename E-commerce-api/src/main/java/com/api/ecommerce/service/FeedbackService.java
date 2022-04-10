package com.api.ecommerce.service;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.model.Listing;
import com.api.ecommerce.repository.FeedbackRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {
    
    private final FeedbackRepository repository;
    
    public FeedbackService(FeedbackRepository repository) {
        this.repository = repository;
    }
    
    public Feedback createFeedback(Feedback feedback){
        return repository.save(feedback);
    }
    
    public boolean deleteFeedback(@NotNull Feedback feedback){
        if (repository.findById(feedback.getId()) != null){
            repository.delete(feedback);
            return true;
        }
            return false;
    }
    
    public Feedback updateFeedback(Long id, Feedback newFeedback){
        repository.deleteById(id);
        return repository.save(newFeedback);
    }
    
    public Page<Feedback> getFeedbacks(Listing listing){
        Pageable page = PageRequest.of(1, 20, Sort.by("date_created"));
        return repository.findByListing(listing, page);
    }
}
