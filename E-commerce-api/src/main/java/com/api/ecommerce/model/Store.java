package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "store")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Store {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "name")
    private String name;
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name =  "manager_id", referencedColumnName = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;
    
    @Column(name = "store_rating")
    private Double rating;
    
    @Column(name = "successful_sells")
    private Integer successfulSells;
    
    @OneToMany(mappedBy = "store")
    private List<Listing> listings;

    public Store(String name, User user, Double rating) {
        this.name = name;
        this.user = user;
        this.rating = rating;
        this.listings = new ArrayList<>();
        this.successfulSells = 0;
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

    @JsonProperty(value = "user")
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
    
    public void setSuccessfulSells(Integer successfulSells) {
        this.successfulSells = successfulSells;
    }
    
}
