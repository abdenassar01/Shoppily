package com.api.ecommerce.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;

@Entity
@Table(name = "category")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "category_id")
    private Long id;
    
    @Column(name = "category_label")
    private String label;
    
    @OneToOne(mappedBy = "category", cascade = CascadeType.MERGE)
    @PrimaryKeyJoinColumn
    @JsonIdentityReference(alwaysAsId = true)
    private Product product;

    public Category() {
        
    }

    public Long getId() {
        return id;
    }
    

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Category(String label, Product product) {
        this.label = label;
        this.product = product;
    }
}
