package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerator;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "listing")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Listing {
  

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "listing_id")
    private Long id;
    
    @Column(name = "listing_discription")
    @JsonProperty(value = "discription")
    private String discription;
    
    @Column(name = "listing_Title")
    @JsonProperty(value = "title")
    private String title;
    
    @Column(name = "listing_rating")
    @JsonProperty(value = "rating")
    private Double rating;
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    @JsonProperty(value = "store")
    private Store store;

    @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
    @JsonProperty(value = "feedbacks")
    private List<Feedback> feedbacks = new ArrayList<>();
    
    @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
    @JsonProperty(value = "products")
    private List<Product> products = new ArrayList<>();

    public Listing(String discription, String title, Double rating, Store store, List<Feedback> feedbacks, List<Product> products) {
        this.discription = discription;
        this.title = title;
        this.rating = rating;
        this.store = store;
        this.feedbacks = feedbacks;
        this.products = products;
    }

    public Listing() {
    }

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

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
