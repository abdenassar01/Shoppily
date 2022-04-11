package com.api.ecommerce;


import com.api.ecommerce.model.User;
import com.api.ecommerce.security.roles.UserRoles;
import com.api.ecommerce.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class App implements CommandLineRunner {


    public App(UserService service) {
        this.service = service;
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
    private final UserService service;

    
    //TODO: Use Just Roles Based Auth instead of permissions or authorities;
    //TODO: Remove The Country attribute since I'll be Working only on morocco
    
    @Override
    public void run(String... args) throws Exception {
        service.save(new User("admin", "Nassar", "Amimi", "password", UserRoles.ADMIN.getGrantedAuthorities(), true, true, true, true));
        service.save(new User("user", "Nassar", "Amimi", "password", UserRoles.USER.getGrantedAuthorities(), true, true, true, true));
        service.save(new User("seller", "Nassar", "Amimi", "password", UserRoles.SELLER.getGrantedAuthorities(), true, true, true, true));
    }
}
