package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "listing")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Listing {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "description", length = 1000)
    @JsonProperty(value = "description")
    private String discription;
    
    @Column(name = "title")
    @JsonProperty(value = "title")
    private String title;
    
    @Column(name = "rating")
    @JsonProperty(value = "rating")
    private Double rating;
    
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "store_id", referencedColumnName = "id")
    @JsonProperty(value = "store")
    private Store store;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    @JsonProperty(value = "category")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Category category;
    
    @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true, fetch = FetchType.EAGER, mappedBy = "listing")
    @JsonProperty(value = "feedbacks")
    private List<Feedback> feedbacks;
    
    @OneToMany(cascade = CascadeType.REMOVE, orphanRemoval = true)
    @JsonProperty(value = "products")
    private List<Product> products;

    public Listing(String description, String title, Store store, List<Product> products, Category category) {
        this.discription = description;
        this.title = title;
        this.rating = 0.0;
        this.store = store;
        this.feedbacks = new ArrayList<>();
        this.category = category;
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

    @JsonIdentityReference(alwaysAsId = false)
    public Category getCategory() {
        return category;
    }
    
    public void setCategory(Category category) {
        this.category = category;
    }
    public void setRating(Double rating) {
        this.rating = rating;
    }

    @JsonIdentityReference(alwaysAsId = true)
    public Store getStore() {
        return store;
    }
    
    public void setStore(Store store) {
        this.store = store;
    }

    @JsonProperty(value = "feedbacks")
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
