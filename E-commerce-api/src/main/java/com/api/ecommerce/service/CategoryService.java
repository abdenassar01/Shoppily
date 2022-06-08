package com.api.ecommerce.service;

import com.api.ecommerce.model.Category;
import com.api.ecommerce.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    
    private final CategoryRepository repository;

    @Autowired
    public CategoryService(CategoryRepository repository) {
        this.repository = repository;
    }

    public List<Category> getAll(){
        return repository.findAll();
    }
    
    public Category getCategoryById(Long id){
        return repository.getById(id);
    }
}
