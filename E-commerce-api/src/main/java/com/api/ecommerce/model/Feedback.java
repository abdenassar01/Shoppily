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
    
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonProperty(value = "user_id")
    @JsonIdentityReference(alwaysAsId = true)
    private User user;
    
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "listing_id", referencedColumnName = "id")
    @JsonProperty(value = "listing")
    @JsonIdentityReference(alwaysAsId = true)
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

    @JsonIgnore
    public Listing getListing() {
        return listing;
    }

    public void setListing(Optional<Listing> listing) {
        this.listing = listing;
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
