package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "product")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "label")
    @JsonProperty(value = "label")
    private String reference;
    
    @Column(name = "price")
    private Double price;

    @ManyToOne
    @JoinColumn(name="order_id", referencedColumnName = "id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "listing_id", referencedColumnName = "id")
    @JsonIdentityReference(alwaysAsId = true)
    private Listing listing;
    
    @Column(name = "quantity_available")
    private Integer availableQte;

    @Column(name = "cover")
    private String image;

    public Product(String reference, Double price, Integer availableQte, String image) {
        this.reference = reference;
        this.price = price;
        this.availableQte = availableQte;
        this.image = image;
    }

    public Product() {
        
    }
    
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return reference;
    }

    public void setTitle(String reference) {
        this.reference = reference;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Listing getListing() {
        return listing;
    }

    public void setListing(Listing listing) {
        this.listing = listing;
    }
    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getAvailableQte() {
        return availableQte;
    }

    public void setAvailableQte(Integer availableQte) {
        this.availableQte = availableQte;
    }

    public String getImages() {
        return image;
    }

    public void setImages(String image) {
        this.image = image;
    }
}
