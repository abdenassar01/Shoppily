package com.api.ecommerce.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "product")
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
    @OneToOne
    private Gategory gategory;
    @OneToOne
    private Store store; 
    @Column(name = "quantity_available")
    private Integer availableQte;
    @ElementCollection
    List<String> images;

    public Product(String title, Double price, String discription, Gategory gategory, Store store, Integer availableQte, List<String> images) {
        this.title = title;
        this.price = price;
        this.discription = discription;
        this.gategory = gategory;
        this.store = store;
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

    public Gategory getGategory() {
        return gategory;
    }

    public void setGategory(Gategory gategory) {
        this.gategory = gategory;
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
