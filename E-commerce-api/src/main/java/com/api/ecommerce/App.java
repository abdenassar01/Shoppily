package com.api.ecommerce;


import com.api.ecommerce.model.*;
import com.api.ecommerce.repository.CategoryRepository;
import com.api.ecommerce.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@SpringBootApplication
public class App implements CommandLineRunner {
    private final UserService userRepository;
    private final ProductService productRepository;
    private final OrderService orderRepository;
    private final StoreService storeService;
    private final ListingService listingService;
    private final CategoryRepository categoryRepository;
    
    private final FeedbackService feedbackService;

    @Autowired
    public App(UserService userRepository, ProductService productRepository, OrderService orderRepository, StoreService storeService, ListingService listingService, CategoryRepository categoryRepository, FeedbackService feedbackService) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.orderRepository = orderRepository;
        this.storeService = storeService;
        this.listingService = listingService;
        this.categoryRepository = categoryRepository;
        this.feedbackService = feedbackService;
    }


    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
//        User user = new User("ABDENASSAR", "AMIMI", "admin", "password", "ADMIN");
//        User user3 = new User("Nouria", "El Hajjam", "nouria-seller", "password", "SELLER");
//        User user2 = new User("Rochdiya", "Khammar", "Rochdiya-seller", "password", "SELLER");
//        User user5 = new User("Zayna", "Bendahan", "zayna-seller","password","SELLER");
//        User user4 = new User("Nyla", "Benjelloun", "nyla-seller", "password", "SELLER");
//        User user6 = new User("Younes ", "Yaktine", "younes-seller", "password", "SELLER");        
//        User user1 = new User("Dirar ", "El-Moustaoui", "dirar-seller", "password", "SELLER");
//        User user7 = new User("Ayoub ", "Sibari", "ayoub-seller","password","SELLER");
//        User user8 = new User("Jamal ", "Chraïbi", "jamal-seller", "password", "SELLER");
//        User user10 = new User("El Houari", " Al-Fassi", "el_houari-seller", "password", "SELLER");
//        User user11 = new User("Abdeslam ", "Nedali", "abdeslam-user","password","USER");
//        User user12 = new User("Hayyan ", "Al-Jabri", "hayyan-user", "password", "USER");
//        User user15 = new User( "Samara ", "Khatibi", "samara-user","password","USER");
//        User user13= new User("Jamaldine ", "Bendahan", "jamaldine-user","password","USER");
//        User user9 = new User("Zubayr ", "Mernissi", "zubayr-seller","password","SELLER");
//        User user16 = new User("Leila ", "Mernissi", "leila-user", "password", "USER");
//        User user14 = new User("Firdoos ", "Lemsih", "firdoos-user", "password", "USER");
//        User user17 = new User( "Chahida ", "Saqqat", "chahida-user","password","USER");
//        User user18 = new User("Sara ", "Al-Mokhtar", "sara-user", "password", "USER");
//        User user19 = new User("Zuha ", "Yaktine", "zuha-user", "password", "USER");
//        User user20 = new User( "Nejlae ", "El Khayat", "nejlae-user","password","USER");
//        User user21 = new User("Imane ", "Bourkia", "imane-user", "password", "USER");
//        User user22 = new User( "Jalal ", "Bendahan", "jalal-user","password","USER");
//        User user23 = new User("Kadeen ", "Maadawi", "kadeen-user", "password", "USER");
//        User user24 = new User( "Ibrahim ", "Ben Bouchta", "ibrahim-user","password","USER");
//        User user25 = new User("Yassine ", "El Hajjam", "yassine-user", "password", "USER");
//        User user26 = new User( "Youssef ", "Saqqat", "youssef-user","password","USER");
//        User user27 = new User("Hadir ", "Hajji", "hadir-user", "password", "USER");
//        User user28 = new User( "Mostafa ", "Joumari", "mostafa-user","password","USER");
//        User user29 = new User("Ayoub ", "Ben Jelloun", "ayoub-user", "password", "USER");
//
////        userRepository.save(user);
////        userRepository.save(user2);
////        userRepository.save(user3);
////        userRepository.save(user4);
////        userRepository.save(user5);
////        userRepository.save(user6);
////        userRepository.save(user1);
////        userRepository.save(user7);
////        userRepository.save(user8);
////        userRepository.save(user9);
////        userRepository.save(user10);
////        userRepository.save(user11);
////        userRepository.save(user12);
////        userRepository.save(user13);
////        userRepository.save(user14);
////        userRepository.save(user15);
////        userRepository.save(user16);
////        userRepository.save(user17);
////        userRepository.save(user18);
////        userRepository.save(user19);
////        userRepository.save(user20);
////        userRepository.save(user21);
////        userRepository.save(user22);
////        userRepository.save(user23);
////        userRepository.save(user24);
////        userRepository.save(user25);
////        userRepository.save(user26);
////        userRepository.save(user27);
////        userRepository.save(user28);
////        userRepository.save(user29);
//        
//        // TODO: I should insert all that shit using the service
//
//        Store store1 = new Store("Brilliant Boutique", userRepository.getUserByUsername(user1.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store2 = new Store("Cartmax", userRepository.getUserByUsername(user3.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store3 = new Store("DollarSmart", userRepository.getUserByUsername(user4.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store4 = new Store("Megaplex", userRepository.getUserByUsername(user5.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store5 = new Store("Fuller Shelf", userRepository.getUserByUsername(user6.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store6 = new Store("Shopperia", userRepository.getUserByUsername(user7.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store7 = new Store("Smart Store", userRepository.getUserByUsername(user8.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store8 = new Store("Vendira", userRepository.getUserByUsername(user9.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store9 = new Store("Shop & Smile", userRepository.getUserByUsername(user10.getUsername()), 5.0, new ArrayList<>(), 0);
//        Store store10 = new Store("Freshcommerce", userRepository.getUserByUsername(user11.getUsername()), 5.0, new ArrayList<>(), 0);
//        
////        storeService.createStore(store1);
////        storeService.createStore(store2);
////        storeService.createStore(store3);
////        storeService.createStore(store4);
////        storeService.createStore(store5);
////        storeService.createStore(store6);
////        storeService.createStore(store7);
////        storeService.createStore(store8);
////        storeService.createStore(store9);
////        storeService.createStore(store10);
//        
//        Listing listing1 = new Listing("great deal", "the best watch ever",  0.0, storeService.getStore(store1.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing2 = new Listing("<h1>great deal</h1>", "Hot Sale  Smartphone",  0.0,  storeService.getStore(store2.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing3 = new Listing("<h1>great deal</h1>", "QGeeM USB C Hub for Macbook Pro Multi USB 3.1 Type C ",  0.0,  storeService.getStore(store3.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing4 = new Listing("great deal", "drone 352tx",  0.0,  storeService.getStore(store10.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing5 = new Listing("great deal", "USB 3.0 32GB 64GB Real capaciteit usb 3.0 flash drive 128GB pendrive ",  0.0,  storeService.getStore(store4.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing6 = new Listing("great deal", "KEEROP Men Fashion Casual Shoes Breathable Air Mesh Mens Sneakers ",  0.0,  storeService.getStore(store5.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing7 = new Listing("great deal", "Silicone anti snoring Nasal Dilators Anti Snore Nose Clip Sleep Tray Sleeping",  0.0,  storeService.getStore(store6.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing8 = new Listing("great deal", "USB 3.0 Real capaciteit usb 3.0 flash drive 128GB pendrive ",  0.0,  storeService.getStore(store7.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing9 = new Listing("great deal", "Headphone Stand Bracket Wall Mounted Headset Holder ",  0.0,  storeService.getStore(store8.getName()), new ArrayList<>(), new ArrayList<>());
//        Listing listing10 = new Listing("great deal", "airpods",  0.0,  storeService.getStore(store9.getName()), new ArrayList<>(), new ArrayList<>());
//
//        //INSERTED
//        
////        listingService.addListing(listing1);
////        listingService.addListing(listing2);
////        listingService.addListing(listing3);
////        listingService.addListing(listing4);
////        listingService.addListing(listing5);
////        listingService.addListing(listing6);
////        listingService.addListing(listing7);
////        listingService.addListing(listing8);
////        listingService.addListing(listing9);
////        listingService.addListing(listing10);
//        
//        Feedback feedback1 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user14.getUsername()),  listingService.getListingByTitle(listing1.getTitle()));
//        Feedback feedback2 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user15.getUsername()),  listingService.getListingByTitle(listing2.getTitle()));
//        Feedback feedback3 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user16.getUsername()),  listingService.getListingByTitle(listing3.getTitle()));
//        Feedback feedback4 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user17.getUsername()),  listingService.getListingByTitle(listing4.getTitle()));
//        Feedback feedback5 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user18.getUsername()),  listingService.getListingByTitle(listing5.getTitle()));
//        Feedback feedback6 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user19.getUsername()),  listingService.getListingByTitle(listing6.getTitle()));
//        Feedback feedback7 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user20.getUsername()),  listingService.getListingByTitle(listing7.getTitle()));
//        Feedback feedback8 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user21.getUsername()),  listingService.getListingByTitle(listing8.getTitle()));
//        Feedback feedback9 = new Feedback("great deal bro, happy to work with you", new Date(), userRepository.getUserByUsername(user22.getUsername()),  listingService.getListingByTitle(listing9.getTitle()));
//        Feedback feedback10 = new Feedback("great deal bro, happy to work with yout", new Date(), userRepository.getUserByUsername(user23.getUsername()),listingService.getListingByTitle(listing10.getTitle()));
//        
////        feedbackService.createFeedback(feedback1);
////        feedbackService.createFeedback(feedback2);
////        feedbackService.createFeedback(feedback3);
////        feedbackService.createFeedback(feedback4);
////        feedbackService.createFeedback(feedback5);
////        feedbackService.createFeedback(feedback6);
////        feedbackService.createFeedback(feedback7);
////        feedbackService.createFeedback(feedback8);
////        feedbackService.createFeedback(feedback9);
////        feedbackService.createFeedback(feedback10);
//        
//        ArrayList<String> images = new ArrayList<>();
//        images.add("https://ae01.alicdn.com/kf/Seddf7a958d894bfbb3fa53aacda12abcw/Keyboard-Bluetooth-Keyboard-and-Mouse-Wireless-Spanish-Russian-Mini-Keyboard-for-Tablet-ipad-8-Air-4.jpg_Q90.jpg_.webp");
//        
//        Product prd1 = new Product("smart watch",30.1, "WaterProof watch", categoryRepository.getById(35L), storeService.getStore(store1.getName()),  listingService.getListingByTitle(listing1.getTitle()), 10, images);
//        Product prd2 = new Product("usb",33.1, "WaterProof watch", categoryRepository.getById(32L), storeService.getStore(store2.getName()),  listingService.getListingByTitle(listing2.getTitle()), 5, images);
//        Product prd3 = new Product("cable usb", 14.1, "WaterProof watch", categoryRepository.getById(42L), storeService.getStore(store3.getName()), listingService.getListingByTitle(listing3.getTitle()), 2, images);
//        Product prd4 = new Product("mouse",50.1, "WaterProof watch", categoryRepository.getById(32L), storeService.getStore(store4.getName()),  listingService.getListingByTitle(listing4.getTitle()), 7, images);
//        Product prd5 = new Product("keyboard",19.1, "WaterProof watch", categoryRepository.getById(32L), storeService.getStore(store5.getName()),  listingService.getListingByTitle(listing5.getTitle()), 13, images);
//        Product prd6 = new Product("snow ball",200.0, "WaterProof watch", categoryRepository.getById(42L), storeService.getStore(store6.getName()),  listingService.getListingByTitle(listing6.getTitle()), 20, images);
//        Product prd7 = new Product("monitor",300.1, "WaterProof watch", categoryRepository.getById(33L), storeService.getStore(store7.getName()),  listingService.getListingByTitle(listing7.getTitle()), 21, images);
//        Product prd8 = new Product("phone charger",99.0, "WaterProof watch", categoryRepository.getById(34L), storeService.getStore(store8.getName()),  listingService.getListingByTitle(listing8.getTitle()), 19, images);
//        Product prd9 = new Product("smartphone case",199.5, "WaterProof watch", categoryRepository.getById(34L), storeService.getStore(store9.getName()),  listingService.getListingByTitle(listing9.getTitle()), 100, images);
//        Product prd10 = new Product("watch", 200.0, "WaterProof watch", categoryRepository.getById(31L), storeService.getStore(store10.getName()),  listingService.getListingByTitle(listing10.getTitle()), 50, images);
//        
//        // TODO: SOME shity Exception occurred here 
//        
//        productRepository.addProduct(prd1);
//        productRepository.addProduct(prd2);
//        productRepository.addProduct(prd3);
//        productRepository.addProduct(prd4);
//        productRepository.addProduct(prd5);
//        productRepository.addProduct(prd6);
//        productRepository.addProduct(prd7);
//        productRepository.addProduct(prd8);
//        productRepository.addProduct(prd9);
//        productRepository.addProduct(prd10);
//        
//        Order order1 = new Order(userRepository.getUserByUsername(user24.getUsername()), "Dchiyar Taounate", "Taounate", "awaiting shipment", 34000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd1.getTitle()));
//        Order order2 = new Order(userRepository.getUserByUsername(user25.getUsername()), "Casablanca 20000", "Casablanca", "shipped", 20000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd2.getTitle()));
//        Order order3 = new Order(userRepository.getUserByUsername(user26.getUsername()), "Fes 30000", "Fes", "awaiting shipment", 30000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd3.getTitle()));
//        Order order4 = new Order(userRepository.getUserByUsername(user27.getUsername()), "Tangier 90000", "Tangier", "awaiting shipment", 90000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd4.getTitle()));
//        Order order5 = new Order(userRepository.getUserByUsername(user28.getUsername()), "Marrakech 40000", "Marrakech", "awaiting shipment", 40000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd5.getTitle()));
//        Order order6 = new Order(userRepository.getUserByUsername(user29.getUsername()), "Temara 12000", "Temara", "awaiting shipment", 12000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd6.getTitle()));
//        Order order7 = new Order(userRepository.getUserByUsername(user5.getUsername()), "Berkane 63300", "Berkane", "awaiting shipment", 63300, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd7.getTitle()));
//        Order order8 = new Order(userRepository.getUserByUsername(user15.getUsername()), "Oued Zem 25350", "Oued Zem", "awaiting shipment", 25350, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd8.getTitle()));
//        Order order9 = new Order(userRepository.getUserByUsername(user20.getUsername()), "SidiSlimane 14044", "SidiSlimane", "awaiting shipment", 14044, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd9.getTitle()));
//        Order order10 = new Order(userRepository.getUserByUsername(user17.getUsername()), "Agadir 80000", "Agadir", "awaiting shipment", 80000, new Date(), 30.0, 1, productRepository.searchProductByTitle(prd10.getTitle()));
//       
//        orderRepository.createOrder(order1);
//        orderRepository.createOrder(order2);
//        orderRepository.createOrder(order3);
//        orderRepository.createOrder(order4);
//        orderRepository.createOrder(order5);
//        orderRepository.createOrder(order6);
//        orderRepository.createOrder(order7);
//        orderRepository.createOrder(order8);
//        orderRepository.createOrder(order9);
//        orderRepository.createOrder(order10);
        
        // TODO: Complete the products and before them the listings
    }
}
