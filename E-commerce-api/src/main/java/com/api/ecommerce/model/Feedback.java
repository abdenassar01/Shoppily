package com.api.ecommerce.model;

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
    private String content;
    @Column(name = "date_created")
    private Date dateCreated;
    @OneToOne
    private User user;

    public Feedback(String content, User user) {
        this.content = content;
        this.user = user;
        this.dateCreated = new Date();
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
