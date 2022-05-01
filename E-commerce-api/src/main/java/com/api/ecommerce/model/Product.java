package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

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
    
    @Column(name = "product_title")
    private String title;
    
    @Column(name = "product_price")
    private Double price;
    
    @Column(name = "product_discription")
    private String discription;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", referencedColumnName = "category_id")
    @JsonIdentityReference(alwaysAsId = true)
    private com.api.ecommerce.model.Category category;
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "store_id", referencedColumnName = "store_id")
    private Store store; 
    
    @OneToOne(mappedBy = "product")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "listing_id")
    private Listing listing;
    
    @Column(name = "quantity_available")
    private Integer availableQte;
    
    @ElementCollection
    private List<String> images = new ArrayList<>();

    public Product(String title, Double price, String discription, Category category, Store store, Listing listing, Integer availableQte, List<String> images) {
        this.title = title;
        this.price = price;
        this.discription = discription;
        this.category = category;
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
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
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
