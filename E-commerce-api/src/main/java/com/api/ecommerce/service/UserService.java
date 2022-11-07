package com.api.ecommerce.service;

import com.api.ecommerce.model.User;
import com.api.ecommerce.repository.UserRepository;
// import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.repository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Page<User> getAllUser() {
        Pageable page = PageRequest.ofSize(20);
        return repository.findAll(page);
    }

    public User getUser(User user) {
        return getUserById(user.getId());
    }

    public User getUserById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalStateException("user with id: " + id + " is not found"));
    }

    public User getUserByUsername(String username) {
        return repository.findByUsername(username);
    }

    public User updateUser(Long id, User newUser) {
        User user = getUserById(id);
        newUser.setPassword(user.getPassword());
        deleteUser(user);
        return save(newUser);
    }

    public boolean deleteUser(User user) {
        if (getUser(user) != null) {
            repository.delete(user);
            return true;
        }
        return false;
    }

    public boolean deleteUserById(Long id) {
        if (getUserById(id) != null) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("There is no user with username: " + username);
        }
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(),
                user.getAuthorities());
    }

    public User save(User user) {
        User newUser = new User();
        newUser.setUsername(user.getUsername());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setFirstname(user.getFirstname());
        newUser.setLastname(user.getLastname());
        newUser.setLastname(user.getLastname());
        newUser.setAddress(user.getAddress());
        newUser.setAccountNonExpired(true);
        newUser.setAccountNonLocked(true);
        newUser.setCredentialsNonExpired(true);
        newUser.setEnabled(true);
        newUser.setRole(user.getRole());

        return repository.save(newUser);
    }
}
