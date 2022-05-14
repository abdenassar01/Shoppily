package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "store")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Store {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "store_id")
    private Long id;
    
    @Column(name = "store_name")
    private String name;
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name =  "manager_id", referencedColumnName = "user_id")
    private User user;
    
    @Column(name = "store_rating")
    private Double rating;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Listing> listings = new ArrayList<>();


    @Column(name = "successful_sells")
    private Integer successfulSells;
    
    @OneToOne(mappedBy = "store")
    @JsonIdentityReference(alwaysAsId = true)
    private Product product;
    
    @OneToOne(mappedBy = "store")
    @JsonIdentityReference(alwaysAsId = true)
    private Listing listing;

    public Store(String name, User user, Double rating, List<Listing> listings, Integer successfulSells) {
        this.name = name;
        this.user = user;
        this.rating = rating;
        this.listings = listings;
        this.successfulSells = successfulSells;
    }

    public Store() {
        
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Integer getSuccessfulSells() {
        return successfulSells;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Listing> getListings() {
        return listings;
    }

    public void setListings(List<Listing> listings) {
        this.listings = listings;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Listing getListing() {
        return listing;
    }

    public void setListing(Listing listing) {
        this.listing = listing;
    }

    public void setSuccessfulSells(Integer successfulSells) {
        this.successfulSells = successfulSells;
    }
    
}
