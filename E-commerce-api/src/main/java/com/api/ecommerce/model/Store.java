package com.api.ecommerce.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "store")
public class Store {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "store_id")
    private Long id;
    
    @Column(name = "store_name")
    private String name;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name =  "manager_id", referencedColumnName = "user_id")
    private User user;
    
    @Column(name = "store_rating")
    private Double rating;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Listing> listings = new ArrayList<>();


    @Column(name = "successful_sells")
    private Integer successfulSells;
    
    @OneToOne(mappedBy = "store")
    private Product product;
    
    @OneToOne(mappedBy = "store")
    private Listing listing;

    public Store(String name, User user, Double rating, Integer successfulSells) {
        this.name = name;
        this.user = user;
        this.rating = rating;
        this.successfulSells = successfulSells;
    }

    public Store(String name, User user) {
        this.name = name;
        this.user = user;
        this.rating = 0.0;
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

    public void setSuccessfulSells(Integer successfulSells) {
        this.successfulSells = successfulSells;
    }
}
