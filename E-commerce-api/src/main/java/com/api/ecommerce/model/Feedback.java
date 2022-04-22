package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "feedback")
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "feedback_id")
    private Long id;
    
    @Column(name = "feedback_content", nullable = false)
    @JsonProperty(value = "content")
    private String content;
    
    @Column(name = "date_created")
    @JsonProperty(value = "date_created")
    private Date dateCreated;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonProperty(value = "user_id")
    private User user;

  

    @ManyToOne
    @JoinColumn(name = "listing_id")
    @JsonProperty(value = "listing")
    private Listing listing;

    public void setId(Long id) {
        this.id = id;
    }

    @JsonIgnore
    public Listing getListing() {
        return listing;
    }

    public void setListing(Listing listing) {
        this.listing = listing;
    }
    public Feedback(String content, Date dateCreated, User user, Listing listing) {
        this.content = content;
        this.dateCreated = dateCreated;
        this.user = user;
        this.listing = listing;
    }

    public Feedback() {
        
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
