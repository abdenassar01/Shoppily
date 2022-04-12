package com.api.ecommerce.model;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;

import static com.api.ecommerce.security.roles.UserRoles.*;

@Entity
@Table(name = "user")
public class User implements UserDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "user_id")
    private Long id;
    
    @Column(name = "username", unique = true)
    private String username;
    
    @Column(name = "first_name")
    private String firstname;
    
    @Column(name = "last_name")
    private String lastname;
   
    @Column(name = "password")
    private String password;
    
    @Column(name = "role", nullable = false)
    private String role;

    @OneToOne(mappedBy = "user")
    private Feedback feedback;

    @OneToOne(mappedBy = "user")
    private Store store;

    public User(String username, String firstname, String lastname, String password, String role, boolean isAccountNonExpired, boolean isAccountNonLocked, boolean isCredentialsNonExpired, boolean isEnabled) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.password = password;
        this.role = role;
        this.isAccountNonExpired = isAccountNonExpired;
        this.isAccountNonLocked = isAccountNonLocked;
        this.isCredentialsNonExpired = isCredentialsNonExpired;
        this.isEnabled = isEnabled;
    }

    public User(String firstname, String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.role = role;
        this.isAccountNonExpired = true;
        this.isAccountNonLocked = true;
        this.isCredentialsNonExpired = true;
        this.isEnabled = true;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    private boolean isAccountNonExpired;
    
    private boolean isAccountNonLocked;
    
    private boolean isCredentialsNonExpired;

    private boolean isEnabled;

    public User() {}



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

    public void setPassword(String password) {
        this.password = password;
    }
    

    public Long getId() {
        return id;
    }

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
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return isCredentialsNonExpired;
    }

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
    

    public Feedback getFeedback() {
        return feedback;
    }

    public void setFeedback(Feedback feedback) {
        this.feedback = feedback;
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
