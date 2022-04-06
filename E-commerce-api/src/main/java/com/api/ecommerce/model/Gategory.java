package com.api.ecommerce.model;


import javax.persistence.*;

@Entity
@Table(name = "gategory")
public class Gategory {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "gategory_id")
    private Long id;
    @Column(name = "gategory_label")
    private String label;
}
