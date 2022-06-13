package com.api.ecommerce.controller;

import com.api.ecommerce.model.Listing;
import com.api.ecommerce.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/listing")
@CrossOrigin("*")
public class ListingController {
    
    private final ListingService service;

    @Autowired
    public ListingController(ListingService service) {
        this.service = service;
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Listing> getListingById(@PathVariable Long id){
        return ResponseEntity.ok().body(service.getListingById(id));
    }
    
    @GetMapping("/title")
    public ResponseEntity<List<Listing>> searchByTitle(@RequestParam String title){
        return ResponseEntity.ok().body(service.getListingByTitle(title));
    }
    
    @GetMapping("/store/{id}/all")
    public ResponseEntity<Page<Listing>> getPageOfStoreListings(@PathVariable Long id){
        return ResponseEntity.ok().body(service.getListingByStore(id));
    }
    
    @GetMapping("store/{storeId}/{listingId}")
    public ResponseEntity<Listing> getListingByStore(@PathVariable Long listingId, @PathVariable Long storeId){
        return ResponseEntity.ok().body(service.getListingByStore(storeId, listingId));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Listing> deleteListingById(@PathVariable Long id){
        return ResponseEntity.ok().body(service.deleteListing(id));
    }
    
    @DeleteMapping("/")
    public String deleteListing(@RequestBody Listing listing){
        return service.deleteListing(listing);
    }
    
    @PostMapping("/new")
    public ResponseEntity<Listing> addListing(@RequestBody Listing listing){
        return ResponseEntity.ok().body(service.addListing(listing));
    }
    
    @PostMapping("/{id}")
    public ResponseEntity<Listing> updateListing(@PathVariable Long id, @RequestBody Listing listing){
        return ResponseEntity.ok().body(service.updateListing(id, listing));
    }
}
