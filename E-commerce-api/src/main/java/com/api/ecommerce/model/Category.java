package com.api.ecommerce.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "category")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "label")
    private String label;
    
    @OneToMany(cascade = CascadeType.MERGE, orphanRemoval = true)
    @PrimaryKeyJoinColumn
    @JsonIdentityReference(alwaysAsId = true)
    @JsonIgnore
    private List<Listing> listing;
    
    public Category() {
        
    }

    public Category(String label) {
        this.label = label;
    }

    public Long getId() {
        return id;
    }

    public List<Listing> getListing() {
        return listing;
    }

    public void setListing(List<Listing> listing) {
        this.listing = listing;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
    
}
