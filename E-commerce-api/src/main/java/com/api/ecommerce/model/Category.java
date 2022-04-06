package com.api.ecommerce.model;


import javax.persistence.*;

@Entity
@Table(name = "category")
public class Category {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "category_id")
    private Long id;
    
    @Column(name = "category_label")
    private String label;
    
    @OneToOne(mappedBy = "category", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Product product;

    public Category(String label) {
        this.label = label;
    }

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
