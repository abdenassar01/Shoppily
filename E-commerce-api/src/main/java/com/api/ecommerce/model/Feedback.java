package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.Date;
import java.util.Optional;

@Entity
@Table(name = "feedback")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Feedback {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "content", nullable = false)
    @JsonProperty(value = "content")
    private String content;
    
    @Column(name = "date_created")
    @JsonProperty(value = "date_created")
    private Date dateCreated;
    
    @OneToOne()
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "listing_id", referencedColumnName = "id")
    private Listing listing;

    public Feedback() {

    }

    public Feedback(String content, User user, Listing listing) {
        this.content = content;
        this.dateCreated = new Date();
        this.user = user;
        this.listing = listing;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @JsonProperty("listing_id")
    @JsonIdentityReference(alwaysAsId = true)
    public Listing getListing() {
        return listing;
    }
    
    @JsonProperty("listing_id")
    public void setListing(Optional<Listing> listing) {
        this.listing = listing.orElse(null);
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

    @JsonIdentityReference(alwaysAsId = true)
    @JsonProperty("user_id")
    public User getUser() {
        return user;
    }

    @JsonProperty("user_id")
    public void setUser(User user) {
        this.user = user;
    }
    
}
