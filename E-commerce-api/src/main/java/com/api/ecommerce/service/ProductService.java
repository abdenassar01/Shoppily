package com.api.ecommerce.service;

import com.api.ecommerce.model.Product;
import com.api.ecommerce.repository.ProductRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    
    
    private final ProductRepository repository;

    @Autowired
    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }
    
    
    public Product addProduct(Product product){
        return repository.save(product);
    }
    
    public Product updateProduct(Long id, Product newProduct){
        repository.deleteById(id);
        return repository.save(newProduct);
    } 
    
    public boolean deleteProduct(@NotNull Product product){
        if (repository.findById(product.getId()) != null){
            repository.delete(product);
            return true;
        }else {
            return false;
        }
    }
    
    public Product getProductById(Long id){
        return repository.findById(id)
                .orElseThrow(() -> 
                        new IllegalStateException("there is no product with the specified id: " + id )
                );
    }
    
    public  Page<Product> getProductByTitleSorted(String title){
        Pageable page = PageRequest.of(1, 20, Sort.by("product_price"));
        return repository.findAllByTitle(title, page);
    }

    public  Page<Product> getProductByTitle(String title){
        Pageable page = PageRequest.of(1, 20);
        return repository.findAllByTitle(title, page);
    }
    
    // TODO: Method Still Not Working
    public Page<Product> getProductByCategory(Long id){
        Pageable page = PageRequest.of(1, 20, Sort.by("product_price"));
        return repository.findAllByCategory(id, page);
    }
    
    public Product searchProductByTitle(String title){
        return repository.searchFirstByTitle(title);
    }
    
    public Page<Product> searchProductsByTitle(String title){
        Pageable page = PageRequest.of(1, 10);
        
        return repository.searchByTitle(title, page);
    }
    
}
