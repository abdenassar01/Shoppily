package com.api.ecommerce.service;

import com.api.ecommerce.model.Feedback;
import com.api.ecommerce.model.Listing;
import com.api.ecommerce.model.User;
import com.api.ecommerce.repository.FeedbackRepository;
import com.api.ecommerce.repository.ListingRepository;
import com.api.ecommerce.repository.UserRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {
    
    private final FeedbackRepository repository;
    private final UserRepository userRepository;
    private final ListingRepository listingRepository;
    
    @Autowired
    public FeedbackService(FeedbackRepository repository, UserRepository userRepository, ListingRepository listingRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.listingRepository = listingRepository;
    }
    
    public Feedback createFeedback(@NotNull Feedback feedback){
        Feedback newFeedback = new Feedback();
        newFeedback.setDateCreated(feedback.getDateCreated());
        newFeedback.setContent(feedback.getContent());
        newFeedback.setUser(userRepository.findByUsername(feedback.getUser().getUsername()));
        newFeedback.setListing(listingRepository.findById(feedback.getListing().getId()));
        return repository.save(feedback);
    }
    
    public boolean deleteFeedback(@NotNull Feedback feedback){
        if (repository.findById(feedback.getId()).isPresent()){
            repository.delete(feedback);
            return true;
        }
            return false;
    }
    
    public boolean deleteById(Long id){
        if (repository.findById(id).isPresent()){
            repository.deleteById(id);
            return true;
        }
        return false;
    }
    
    public Feedback updateFeedback(Long id, Feedback newFeedback){
        repository.deleteById(id);
        return repository.save(newFeedback);
    }
    
    public List<Feedback> getListingFeedBack(Long id){
        Listing lst = listingRepository.getById(id);
        return repository.findAllByListing(lst);
    }
    
    public Feedback getFeedbackById(Long id){
        return repository
                .findById(id)
                .orElseThrow( 
                        () -> new IllegalStateException(
                                String.format("there is no feedback with the specified id: " + id))
                );
    }
}
