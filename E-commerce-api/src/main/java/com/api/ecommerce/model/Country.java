package com.api.ecommerce.model;

import javax.persistence.*;

@Entity
@Table(name = "country")
public class Country {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(name = "label")
    private String label;

    public Country(String label) {
        this.label = label;
    }

    public Country() {
    }
    
    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
