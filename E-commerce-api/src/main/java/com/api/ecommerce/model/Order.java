package com.api.ecommerce.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "order_info")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "order_id")
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;
    
    private String address;
    private String city;
    private String status;
    private Integer zip;
    
    @Column(name = "date_created")
    private Date dateCreated;
    
    @Column(name = "price_X_quantity")
    private Double priceXqte;
    
    @Column(name = "quantity")
    private Integer qte;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;

    public Order(User user, String address, String city, String status, Integer zip, Double priceXqte, Integer qte, Product product) {
        this.id = id;
        this.user = user;
        this.address = address;
        this.city = city;
        this.status = status;
        this.zip = zip;
        this.dateCreated = new Date();
        this.priceXqte = priceXqte;
        this.qte = qte;
        this.product = product;
    }

    public Order(User user, String address, String city, String status, Integer zip, Date dateCreated, Double priceXqte, Integer qte, Product product) {
        this.user = user;
        this.address = address;
        this.city = city;
        this.status = status;
        this.zip = zip;
        this.dateCreated = dateCreated;
        this.priceXqte = priceXqte;
        this.qte = qte;
        this.product = product;
    }

    public Order() {
        
    }

    public Long getId() {
        return id;
    }
    
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Double getPriceXqte() {
        return priceXqte;
    }

    public void setPriceXqte(Double priceXqte) {
        this.priceXqte = priceXqte;
    }

    public Integer getQte() {
        return qte;
    }

    public void setQte(Integer qte) {
        this.qte = qte;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
