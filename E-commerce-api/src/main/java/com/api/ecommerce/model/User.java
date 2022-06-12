package com.api.ecommerce.model;

import com.fasterxml.jackson.annotation.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

import static com.api.ecommerce.security.roles.UserRoles.*;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "user", uniqueConstraints = @UniqueConstraint(name = "Uk_username", columnNames = { "username" }))
public class User implements UserDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;
    
    @Column(name = "username")
    @JsonProperty
    private String username;
    
    @Column(name = "first_name")
    @JsonProperty
    private String firstname;
    
    @Column(name = "last_name")
    @JsonProperty
    private String lastname;
   
    @Column(name = "password")
    private String password;
    
    @Column(name = "role", nullable = false)
    @JsonProperty
    private String role;

    @Column(name = "address")
    @JsonProperty
    private String address;

    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIdentityReference(alwaysAsId = true)
    private List<Feedback> feedbacks;

    @JsonIgnore
    @OneToOne(mappedBy = "user")
    @JsonIdentityReference(alwaysAsId = true)
    private Store store;

    public User(String username, String firstname, String lastname, String password, String role, String address) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.role = role;
        this.address = address;
    }

    @JsonIgnore
    private boolean isAccountNonExpired;
    
    @JsonIgnore
    private boolean isAccountNonLocked;
    
    @JsonIgnore
    private boolean isCredentialsNonExpired;

    @JsonIgnore
    private boolean isEnabled;

    public User() {}
    

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @JsonProperty(value = "username")
    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @JsonProperty(value = "password")
    public void setPassword(String password) {
        this.password = password;
    }
    

    public Long getId() {
        return id;
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
         if (getRole().equalsIgnoreCase("Admin")){
             return ADMIN.getGrantedAuthorities();
        }
        else if(getRole().equalsIgnoreCase("Seller")) {
            return SELLER.getGrantedAuthorities();
        }  
        return USER.getGrantedAuthorities();
    }

    @Override
    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @Override
    @JsonProperty(value = "username")
    public String getUsername() {
        return username;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return isEnabled;
    }

    public Store getStore() {
        return store;
    }

    public void setStore(Store store) {
        this.store = store;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Feedback> getFeedbacks() {
        return feedbacks;
    }

    public void setFeedbacks(List<Feedback> feedbacks) {
        this.feedbacks = feedbacks;
    }

    public void setAccountNonExpired(boolean accountNonExpired) {
        isAccountNonExpired = accountNonExpired;
    }

    public void setAccountNonLocked(boolean accountNonLocked) {
        isAccountNonLocked = accountNonLocked;
    }

    public void setCredentialsNonExpired(boolean credentialsNonExpired) {
        isCredentialsNonExpired = credentialsNonExpired;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }
}
