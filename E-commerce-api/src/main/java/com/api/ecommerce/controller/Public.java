package com.api.ecommerce.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;

@RestController
@PermitAll
@CrossOrigin("*")
public class Public {
    
    @GetMapping("/")
    public String sayHey(){
        return "Hello and Welcome to Shoppily api";
    }
}
