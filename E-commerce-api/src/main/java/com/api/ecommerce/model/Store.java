package com.api.ecommerce.model;

import javax.persistence.*;

@Entity
@Table(name = "store")
public class Store {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "store_id")
    private Long id;
    @Column(name = "store_name")
    private String name;
    @OneToOne
    private User user;
    @Column(name = "store_rating")
    private Double rating;
    @Column(name = "successful_sells")
    private Integer successfulSells;

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
