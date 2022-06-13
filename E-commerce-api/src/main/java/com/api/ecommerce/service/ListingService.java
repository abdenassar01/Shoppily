package com.api.ecommerce.service;

import com.api.ecommerce.model.Listing;
import com.api.ecommerce.model.Product;
import com.api.ecommerce.model.Store;
import com.api.ecommerce.repository.ListingRepository;
import com.api.ecommerce.repository.ProductRepository;
import com.api.ecommerce.repository.StoreRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class ListingService {

    private final ListingRepository repository;
    private final StoreRepository storeRepository;
    private final CategoryService categoryService; 
    private final ProductRepository productRepository;
    @Autowired
    public ListingService(ListingRepository repository, StoreRepository storeRepository, CategoryService categoryService, ProductRepository productRepository) {
        this.repository = repository;
        this.storeRepository = storeRepository;
        this.categoryService = categoryService;
        this.productRepository = productRepository;
    }

    public Listing getListingById(Long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("there is no listing with the specified id: " + id));
    }

    public Page<Listing> getPageOfListingByTitle(String title) {
        Pageable pageable = PageRequest.of(1, 10, Sort.by("title"));
        return repository.searchAllByTitle(pageable, title);
    }
    
    public Listing addListing(@NotNull Listing listing) {
        ArrayList<Product> products = new ArrayList<>();
        
        for(Product p : listing.getProducts() ) {
            productRepository.save(p);
            products.add(productRepository.getById(p.getId()));
        }
        
        Listing lst = new Listing();
        lst.setDiscription(listing.getDiscription());
        lst.setRating(listing.getRating());
        lst.setFeedbacks(listing.getFeedbacks());
        lst.setStore(
                storeRepository
                        .getById(
                                listing.getStore().getId()
                        ));
        lst.setTitle(listing.getTitle());
        lst.setCategory(listing.getCategory());
        lst.setFeedbacks(listing.getFeedbacks());
        lst.setProducts(products);
        
        return repository.save(lst);
    }

    public Listing updateListing(Long id, Listing listing) {
        repository.delete(repository.findById(id).orElseThrow(() -> new IllegalStateException("there is no listing with the specified id: " + id)));
        return addListing(listing);
    }

    public String deleteListing(Listing listing) {
        repository.delete(listing);
        return "deleted Successfully";
    }

    public Listing deleteListing(Long id) {
        repository.deleteById(id);
        return repository.findById(id).orElseThrow(() -> new IllegalStateException("there is no listing with the specified id: " + id));
    }

    public Page<Listing> getListingByStore(Long storeId) {
        Store store = storeRepository.getById(storeId);
        
        return repository.findAllByStore(
                PageRequest.of(1, 10), 
                store
        );
    }

    public Listing getListingByStore(Long storeId, Long listingId) {
        Store store = storeRepository.getById(storeId);
        List<Listing> listings = repository.findAllByStore(
                PageRequest.of(1, 10, Sort.by("title")),
                store
        ).stream()
                .filter((listing) -> Objects.equals(listing.getId(), listingId)).collect(Collectors.toList());
        return listings.get(0);
    }

    public List<Listing> getListingByTitle(String title) {
        return repository.getByTitleContaining(title);
    }
}