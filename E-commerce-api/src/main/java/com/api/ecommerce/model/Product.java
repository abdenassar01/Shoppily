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
    @Column(name = "product_id")
    private Long id;
    
    @Column(name = "product_reference")
    @JsonProperty(value = "reference")
    private String reference;
    
    @Column(name = "product_price")
    private Double price;
    
    @Column(name = "product_discription")
    private String discription;
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store store;

    @ManyToOne
    @JoinColumn(name="order_id", nullable=false)
    private Order order;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    @JsonIdentityReference(alwaysAsId = true)
    private Listing listing;
    
    @Column(name = "quantity_available")
    private Integer availableQte;
    
    @ElementCollection
    private List<String> images;

    public Product(String reference, Double price, String discription, Store store, Listing listing, Integer availableQte, List<String> images) {
        this.reference = reference;
        this.price = price;
        this.discription = discription;
        this.store = store;
        this.listing = listing;
        this.availableQte = availableQte;
        this.images = images;
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

    public String getDiscription() {
        return discription;
    }

    public void setDiscription(String discription) {
        this.discription = discription;
    }
    
    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public Integer getAvailableQte() {
        return availableQte;
    }

    public void setAvailableQte(Integer availableQte) {
        this.availableQte = availableQte;
    }

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }
}
