package com.api.ecommerce;

import com.api.ecommerce.model.Category;
import com.api.ecommerce.model.Store;
import com.api.ecommerce.repository.CategoryRepository;
import com.api.ecommerce.repository.StoreRepository;
import com.api.ecommerce.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class App implements CommandLineRunner {
    
    private final UserService user;
    private final ProductService product;
    private final ListingService listing;
    private final OrderService order;
    private final CategoryService category;
    private final FeedbackService feedback;
    private final StoreService store;
    private final CategoryRepository repository;

    @Autowired
    public App(UserService user, ProductService product, ListingService listing, OrderService order, CategoryService category, FeedbackService feedback, StoreService store, CategoryRepository repository) {
        this.user = user;
        this.product = product;
        this.listing = listing;
        this.order = order;
        this.category = category;
        this.feedback = feedback;
        this.store = store;
        this.repository = repository;
    }


    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        
    }
}
