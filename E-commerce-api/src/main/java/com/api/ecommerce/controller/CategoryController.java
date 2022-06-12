package com.api.ecommerce.controller;

import com.api.ecommerce.model.Category;
import com.api.ecommerce.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class CategoryController {
    
    private final CategoryService service;

    @Autowired
    public CategoryController(CategoryService service) {
        this.service = service;
    }
    
    @GetMapping("categories")
    public List<Category> getAllCategories(){
        return service.getAll();
    }
    
}
