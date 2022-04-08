package com.api.ecommerce.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "listing")
public class Listing {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "listing_id")
    private Long id;
    
    @Column(name = "listing_discription")
    private String discription;
    
    @Column(name = "listing_Title")
    private String title;
    
    @Column(name = "listing_rating")
    private Double rating;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store store;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Feedback> feedbacks = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> products = new ArrayList<>();

    public Listing(String discription, Double rating, Store store, List<Feedback> feedbacks, List<Product> products) {
        this.discription = discription;
        this.rating = rating;
        this.store = store;
        this.feedbacks = feedbacks;
        this.products = products;
    }


    public Listing() {}

    public Long getId() {
        return id;
    }
    
    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public List<Feedback> getFeedbacks() {
        return feedbacks;
    }

    public void setFeedbacks(List<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
