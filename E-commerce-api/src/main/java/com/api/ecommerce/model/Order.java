package com.api.ecommerce.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "order_info")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    private String address;
    private String city;
    private String status;
    private Integer zip;

    @Column(name = "date_created")
    private Date dateCreated;

    @Column(name = "Total")
    private Double priceXqte;

    @Column(name = "quantity")
    private Integer qte;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "order")
    private List<Product> products;

    public Order(User user, String address, String city, String status, Integer zip, Date dateCreated, Double priceXqte, Integer qte, List<Product> products) {
        this.user = user;
        this.address = address;
        this.city = city;
        this.status = status;
        this.zip = zip;
        this.dateCreated = dateCreated;
        this.priceXqte = priceXqte;
        this.qte = qte;
        this.products = products;
    }

    public Order() {
        
    }

    @JsonProperty("id")
    public Long getId() {
        return id;
    }

    @JsonProperty(value = "user_id")
    public User getUser() {
        return user;
    }

    @JsonProperty(value = "user_id")
    public void setUser(User user) {
        this.user = user;
    }

    @JsonProperty(value = "address")
    public String getAddress() {
        return address;
    }

    @JsonProperty(value = "address")
    public void setAddress(String address) {
        this.address = address;
    }

    @JsonProperty(value = "city")
    public String getCity() {
        return city;
    }
    
    @JsonProperty(value = "city")
    public void setCity(String city) {
        this.city = city;
    }

    @JsonProperty(value = "order_status")
    public String getStatus() {
        return status;
    }

    @JsonProperty(value = "order_status")
    public void setStatus(String status) {
        this.status = status;
    }

    @JsonProperty(value = "zip_code")
    public Integer getZip() {
        return zip;
    }
    
    @JsonProperty(value = "zip_code")
    public void setZip(Integer zip) {
        this.zip = zip;
    }
   
    @JsonProperty(value = "date_created")
    public Date getDateCreated() {
        return dateCreated;
    }

    @JsonProperty(value = "date_created")
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    @JsonProperty(value = "price_x_qte")
    public Double getPriceXqte() {
        return priceXqte;
    }

    @JsonProperty(value = "price_x_qte")
    public void setPriceXqte(Double priceXqte) {
        this.priceXqte = priceXqte;
    }

    @JsonProperty(value = "quantity")
    public Integer getQte() {
        return qte;
    }

    @JsonProperty(value = "quantity")
    public void setQte(Integer qte) {
        this.qte = qte;
    }

    @JsonProperty(value = "products")
    @JsonIdentityReference(alwaysAsId = false)
    public List<Product> getProduct() {
        return products;
    }

    @JsonProperty(value = "products")
    @JsonIdentityReference(alwaysAsId = true)
    public void setProduct(List<Product> products) {
        this.products = products;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
